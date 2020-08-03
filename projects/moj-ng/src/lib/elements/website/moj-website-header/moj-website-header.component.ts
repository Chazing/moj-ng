import { MojLanguageService } from './../../../shared/moj-language.service';
import { LANGUAGES } from './../language';
import { MojUtilsService } from './../../../shared/utils';
import { Component, Input, Output, EventEmitter, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Size } from '../../general/general.enum';
import { Link } from '../link';
import { MojMessagesService } from '../../../messages/moj-messages.service';
import { DialogResultEnum } from '../../../messages/message.enum';
import { Router } from '@angular/router';
import { MojLanguage } from '../language';
import { Observable } from 'rxjs';
import { MojTopMenuItem } from '../moj-website-topmenu/moj-website-topmenu-item.model';
import { MojTopMenuService } from '../moj-website-topmenu/moj-website-topmenu.service';

enum OnlineType {
    onlineEng = 'onlineEng',
    onlineHeb = 'onlineHeb'
}

/**
 * ```typescript
 * <moj-website-header mainSiteName="'Texts.GisMainTitle'"
                            engSiteName="'Texts.GisSecondTitle'"
                            subSiteName="'Texts.justice'"></moj-website-header>
 * ```
 * <example-url>../screenshots/websiteHeader.JPG</example-url>
 */
@Component({
    selector: 'moj-website-header',
    templateUrl: 'moj-website-header.component.html',
    styleUrls: ['./moj-website-header.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MojWebsiteHeaderComponent {
    @ViewChild("dynamic",{static:true})dynamic :ElementRef;
    breadcrumbsArr: Observable<MojTopMenuItem[]>;
    @Input() mainSiteName: string;
    @Input() subSiteName: string = "";
    @Input() engSiteName: string = "";
    @Input() siteNameSize: Size = Size.Font20;
    @Input() onlineType: OnlineType = OnlineType.onlineEng;
    @Input() isShowLangs: boolean = false;
    @Input() isShowMember: boolean = false;
    @Input() userName: string = "";
    @Input() logoutUrl: string = "/logout";
    @Input() logoutUrlNoRoute: string = "";
    @Input() logoutConfirmMessage: string = "MojTexts.logoutConfirmMessage";
    @Input() addLineAfterHeader: boolean = false;
    hasContentAfterSupport:boolean=false;
    @Input() userActionLinks: Link[];
    @Output() linkClick: EventEmitter<Link> = new EventEmitter<Link>();
    userAcronyms:string

    onlineTypeEnum = OnlineType;
    @Input() languages: MojLanguage[] = LANGUAGES;
    currentLang: string;

    constructor(protected translateService: TranslateService, private messageService: MojMessagesService, 
        private router: Router, private languageService: MojLanguageService,protected mojTopMenuService: MojTopMenuService) { 
            this.breadcrumbsArr = mojTopMenuService.breadcrumbs$;
    }

    ngOnInit() {
        this.currentLang = this.translateService.currentLang;
        this.getUserAcronyms();
    }

    getUserAcronyms()
    {
        this.userAcronyms="";
        if(this.userName !=undefined && this.userName!=null)
        {
            let splitUserName=this.userName.split(" ");
            splitUserName.forEach(element => {
                this.userAcronyms+=element[0];
            });
        }
    }
    breadcrumbslinkClick(item: MojTopMenuItem) {
        this.mojTopMenuService.navigateItem(item);
    }
    changeLang(lang: MojLanguage) {
        if(lang.code != this.currentLang){
            this.languageService.changeLang(lang);
        }
    }

    onLinkClick(event) {
        let currentLink = this.userActionLinks.find(x => x.linkId === event.currentTarget.id);
        this.linkClick.emit(currentLink);
        if (currentLink.linkOpenType === 2) {
            return false;
        }
    }

    onLogoutClick() {
        this.messageService
            .confirm(
                this.translateService.instant(this.logoutConfirmMessage),
                this.translateService.instant('MojTexts.logout')
            )
            .subscribe(result => {
                if (result.dialogResultType == DialogResultEnum.OK) {
                    let link: Link = { textKey: '', linkId: 'exit', linkOpenType: 2, href: '' };
                    this.linkClick.emit(link);
                    if(this.logoutUrlNoRoute){
                        window.location.href = this.logoutUrlNoRoute;
                    }
                    else{
                        this.router.navigate([this.logoutUrl]);
                    }  
                }
            });
    }
    
    ngAfterContentInit()
    {
        if(this.dynamic.nativeElement.innerHTML.trim() !="" || this.isShowMember)
        {
           this.hasContentAfterSupport=true;
        } 
    }
}
