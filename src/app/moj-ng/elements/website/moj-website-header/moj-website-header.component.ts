import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Size } from '../../general/general.enum';
import { Link } from '../link';
import { MojMessagesService } from '../../../messages/moj-messages.service';
import { DialogResultEnum } from '../../../messages/message.enum';
import { Router } from '@angular/router';
import { MojUtilsService } from '../../../../moj-ng/shared/utils';
import { MojLanguage } from '../language';

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
    @Input() mainSiteName: string;
    @Input() subSiteName: string = "";
    @Input() engSiteName: string = "";
    @Input() siteNameSize: Size = Size.Font24;
    @Input() onlineType: OnlineType = OnlineType.onlineEng;
    @Input() isShowLangs: boolean = false;
    @Input() isShowMember: boolean = false;
    @Input() userName: string = "";
    @Input() logoutUrl: string = "/logout";
    @Input() logoutUrlNoRoute: string = "";
    @Input() logoutConfirmMessage: string = "MojTexts.logoutConfirmMessage";
    @Input() addLineAfterHeader: boolean = false;

    @Input() userActionLinks: Link[];
    @Output() linkClick: EventEmitter<Link> = new EventEmitter<Link>();

    onlineTypeEnum = OnlineType;
    @Input() languages: MojLanguage[] = [];
    currentLang: string;

    constructor(protected translateService: TranslateService, private messageService: MojMessagesService, 
        private router: Router, private util: MojUtilsService) { 
    }

    ngOnInit() {
        this.currentLang = this.translateService.currentLang;
    }

    changeLang(lang: MojLanguage) {
        if(lang.code != this.currentLang){
            this.util.changeLang(lang);
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
}
