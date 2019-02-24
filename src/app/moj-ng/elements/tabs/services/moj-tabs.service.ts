import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MojTab } from '../models/moj-tabs.models';
import { NavigationService } from './navigation.service';
import { MojMessagesService } from "../../../messages/moj-messages.service";
import { MessageType } from "../../../../moj-ng/messages/message.enum";

@Injectable({
    providedIn: 'root',
})
export class MojTabsService {


    private isMainTabOpen: boolean;
    private unsubscribe$ = new Subject();

    private movingSubject = new Subject<MojTab>();
    private moving = this.movingSubject.asObservable().pipe(takeUntil(this.unsubscribe$));

    private closingSubject = new Subject<MojTab>();
    private closing = this.closingSubject.asObservable();

    activeTabUrl: string;
    tabsUrlStack: string[] = [''];
    tabs: MojTab[] = [];
    limit: number = 7;

    constructor(private navigationService: NavigationService, private  messageService: MojMessagesService) {
        this.navigationService.handleNavigatedUrl.subscribe(url => this.openTabForUrl(url));
        this.navigationService.handleCanActivateUrl.subscribe(url => {

            let tab = this.getTab(url);
            if (tab || this.tabs.length < this.limit) {
                let tabWithUrl = tab ? tab : new MojTab(url, null);
                if (tabWithUrl.url != url) {
                    tabWithUrl.url = url;
                }
                this.onTabClick(tabWithUrl);
            }
            else {
                //alert("The tabs is limited to :" + this.limit);
                this.messageService.showMessage("MojTexts.errorTabsLimitMessage", "MojTexts.alertMessage", null, MessageType.Alert);
            }
        });
    }

    //Event Methods----------------------

    onTabClick(tab: MojTab) {
        if (tab.url != this.activeTabUrl) {
            //Check if need to throw moving event
            if (this.getCurrentTab().hasMoving()) {
                this.movingSubject.next(tab);
            }
            else {
                // Move to tab
                this.move(tab);
            }
        }
    }

    onCloseTabClick(tab: MojTab) {
        if (tab.hasClosing()) {
            this.closingSubject.next(tab);
        }
        else {
            this.close(tab);
        }
    }

    //Internal Functions-----------------  

    private goBackInStack(): string {
        let newUrl = '';
        if (this.tabsUrlStack.length > 1) {
            this.tabsUrlStack.pop();// Remove current closed url
            newUrl = this.tabsUrlStack.pop();
        }
        return newUrl;
    }
    private clearUrlInStack(url:string){
        let index = this.tabsUrlStack.findIndex(t => t == url);
        if (index > -1) {
            this.tabsUrlStack.splice(index, 1);
        }
    }    

    private pushUrlToStack(url: string): any {
       this.clearUrlInStack(url);
        this.tabsUrlStack.push(url);
    }

    public showSideMenu() { //For html view
        let tab = this.getCurrentTab();
        return tab != null && tab.sideMenuItems != null && tab.sideMenuItems.length > 0;
    }

    public getSideItemUrl(url: string) {//For html view
        return url.startsWith('/') ? url : this.activeTabUrl + '/' + url;
    }

    private openAppMainTab(tabToGoUrl: string): any {
        // Open appMainTab if tabToGo is not the same and appMainTab isn't open yet(not exsist in tabsUrlStack)
        if (!this.isMainTabOpen) {
            let appMainTab = this.getAppMainTab();

            if (appMainTab != null && appMainTab.url != tabToGoUrl && (this.getTab(appMainTab.url) == undefined)) {
                this.openTab(appMainTab.url, appMainTab);
                this.isMainTabOpen = true;
            }
        }
    }

    private navigate(url: string) {
        this.navigationService.navigateWithoutValidations = true;
        this.navigationService.navigate(url);
    }

    private openTab(url: string, tab: MojTab) {
        this.unsubscribeAll();
        this.activeTabUrl = tab.url;
        this.pushUrlToStack(this.activeTabUrl);
    }

    private unsubscribeAll(): any {
        this.unsubscribe$.next();
    }

    private setActiveSideItemByUrl(url: string, tab: MojTab): string {
        if (url == tab.url && tab.sideMenuItemSelected != null) {// If already has sideItem selected and url isn't the sideItem url
            let sideUrl = `${tab.url}/${tab.sideMenuItemSelected.url}`;
            return this.smartCompare(url, sideUrl) ? sideUrl : null;//handle url with / at end and without
        }
        if (tab.sideMenuItems != null && tab.sideMenuItems.length > 0) {
            let sideItem = tab.sideMenuItems.find(s => `${tab.url}/${s.url}` == url);

            if (sideItem) {
                tab.sideMenuItemSelected = sideItem;
            }
            else {
                tab.sideMenuItemSelected = tab.sideMenuItems[0];
            }
        }
        return null;
    }

    private removeTrailingSlash(str): string {
        return str.endsWith('/') ? str.slice(0, -1) : str;
    }

    private smartCompare(url: string, url2: string): boolean {
        return url != url2 && this.removeTrailingSlash(url) != this.removeTrailingSlash(url2);
    }

    //External Functions-----------------

    public move(tab: MojTab) {
        let url = tab.url;

        if (tab.sideMenuItemSelected) {
            url = `${url}/${tab.sideMenuItemSelected.url}`;
        }
        tab.unsubscribeToMoving();
        this.navigate(url);
    }

    public close(tab: MojTab) {
        let index = this.tabs.findIndex(t => t.url == tab.url);

        this.tabs.splice(index, 1);
        tab.unsubscribe();
        if (this.activeTabUrl == tab.url) {
            let newUrl = this.goBackInStack();
            if (tab.urlRegex != null && tab.urlRegex !== "" && newUrl.match(tab.urlRegex) != null) {
                newUrl = this.goBackInStack();
            }
            this.navigate(newUrl);
        }else{
            this.clearUrlInStack(tab.url);
        }
    }

    public openTabForUrl(url: string) {
        let tabToGo = this.getTab(url, true);

        if (tabToGo != null) {
            let newSideItemUrl = this.setActiveSideItemByUrl(url, tabToGo);

            if (tabToGo.url != this.activeTabUrl) {
                this.openAppMainTab(tabToGo.url);// Open main tab if needed
                this.openTab(url, tabToGo);
                if (tabToGo.appMainTab) {
                    this.subscribeToMoving(tabToGo, tabToGo.appMainTabMovingSubscriber);
                }
            }
            if (newSideItemUrl) {
                this.navigate(newSideItemUrl);
            }
        }
        else {
            this.activeTabUrl = "";
        }
    }

    //Useful Functions-----------------   

    public getAppMainTab(): MojTab {
        return this.tabs.find(t => t.appMainTab);
    }

    public getCurrentTab(): MojTab {
        return this.getTab(this.activeTabUrl);
    }

    public getTab(url: string, smartSearch: boolean = false): MojTab {
        let tab = this.tabs.find(t => t.url === url || t.urlRegex != null && url.match(t.urlRegex) != null);

        if (tab == null && smartSearch) {
            let filteredTabs = this.tabs.filter(t => t.sideMenuItems != null && url.toLowerCase().startsWith(t.url.toLowerCase()));

            tab = filteredTabs.find(tabItem => tabItem.sideMenuItems.findIndex(sideItem => `${tabItem.url}/${sideItem.url}` === url) != -1);
        }
        return tab;
    }

    public subscribeToMoving(tab: MojTab, movingSubscriber?: (value: MojTab) => void): any {
        if (movingSubscriber && tab.url == this.activeTabUrl) {
            if (tab.hasMoving()) {
                tab.unsubscribeToMoving();
            }
            tab.saveMovingSubscription(this.moving.subscribe(movingSubscriber));
        }
    }

    public addOrGetTab(tab: MojTab, movingSubscriber?: (value: MojTab) => void, closingSubscriber?: (value: MojTab) => void): MojTab {
        let internalTab = this.getTab(tab.url);

        if (internalTab == null) {
            if (tab.url == null || (tab.url != "" && !tab.url.startsWith('/')) || ((tab.urlRegex != null && tab.urlRegex != "" && !tab.urlRegex.startsWith('/')))) {
                throw "Tab urls must not be null and should start with slash - '/'. \nFor Example, url = '/home'\n";
            }
            if (closingSubscriber) {
                tab.saveClosingSubscription(this.closing.subscribe(closingSubscriber));
            }
            this.tabs.push(tab);
            internalTab = tab;
        }
        else {
            internalTab.url = tab.url;
            internalTab.urlRegex = tab.urlRegex;
            internalTab.title$ = tab.title$;
        }
        if (internalTab) {
            this.setActiveSideItemByUrl(internalTab.url, internalTab);
            this.openTab(internalTab.url, internalTab);
            if (internalTab.appMainTab && movingSubscriber) {
                internalTab.appMainTabMovingSubscriber = movingSubscriber;
            }
            this.subscribeToMoving(internalTab, movingSubscriber);
        }
        return internalTab;
    }
}