import { Injectable } from "@angular/core"
import { MojTopMenuItem } from "./moj-website-topmenu-item.model";
import { Router, NavigationEnd } from "@angular/router";
import { Location } from '@angular/common';
import { Subject, config } from "rxjs";
import { filter } from "rxjs/operators";
import { MojConfigService } from './../../../shared/moj-config.service';

@Injectable()
export class MojTopMenuService {
    treeNav: MojTopMenuItem[] = [];

    breadcrumbsSource = new Subject<MojTopMenuItem[]>();
    breadcrumbs$ = this.breadcrumbsSource.asObservable();

    mainActiveIdSource = new Subject<number>();
    mainActiveId$ = this.mainActiveIdSource.asObservable();

    menuInAction = new Subject<boolean>();
    menuInAction$ = this.menuInAction.asObservable();

    lastLocation: string;

    addMainItem(item: MojTopMenuItem): number {
        item.id = this.treeNav.length + 1;
        this.treeNav.push(item);
        return item.id;
    }

    addSubItem(item: MojTopMenuItem, parentId?: number) {
        var mainItem = this.treeNav[this.treeNav.length - 1];
        if (mainItem != null) {
            if (mainItem.subItems == undefined)
                mainItem.subItems = [];
            mainItem.subItems.push(item);
        }
    }

    getItemsByUrl(url: string): MojTopMenuItem[] {
        
        let mainItem = this.treeNav.find(x => x.internalLink == url || "/" + x.internalLink == url);
        let subItem;
        if (mainItem == undefined) {
            for (var i = 0; i < this.treeNav.length; i++) {
                if (this.treeNav[i].subItems != undefined) {
                    subItem = this.treeNav[i].subItems.find(x => x.internalLink == url || "/" + x.internalLink == url);
                    if (subItem != undefined) {
                        subItem.active = true;
                        mainItem = this.treeNav[i];
                        return [mainItem, subItem];
                    }
                }
                else {
                    
                    mainItem = this.treeNav.find(x => url.indexOf(x.internalLink + "/") != -1);

                }
            }
            return [];
        }
        mainItem.active = true;
        return [mainItem];
    }

    navigateItem(item: MojTopMenuItem) {
        if (item.externalLink || item.internalLink) {
            if (item.externalLink) {
                 window.open(item.externalLink,item.linkTarget);
            }
            if (item.internalLink) {       
                if(item.linkTarget && item.linkTarget!="_self")
                   {
                    let url=item.internalLink;
                    if(this.config.configuration.BaseUrl)
                    {
                        let slesh=item.internalLink.indexOf("/")==0?"":"/";
                        url=this.config.configuration.BaseUrl+slesh+item.internalLink;
                        window.open( url,item.linkTarget);
                    }
                   }  
                else
                  this.router.navigate([item.internalLink]);
            }
            this.menuInAction.next(false);
        }
        else
            this.menuInAction.next(true);
    }

    menuStateChange(state: boolean) {
        this.menuInAction.next(state);
    }

    handleActiveItem(url: string) {
        var activeItems = this.getItemsByUrl(url);
        this.breadcrumbsSource.next(activeItems);
        
        this.mainActiveIdSource.next(activeItems.length > 0 ? activeItems[0].id : 0);
    }

    constructor(protected router: Router, protected location: Location,private config?:MojConfigService) {
        router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(ev => {
            var locationPath = location.path();
            this.lastLocation = locationPath;
            if (locationPath != '') {
                this.handleActiveItem(locationPath);
            };
        })
    }
}