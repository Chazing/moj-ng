import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Link, SocialLinkType, LinkOpenType } from '../link';

/**
 * ```html
 * <moj-website-footer versionNumber="1.0.0" [links]="links"></moj-website-footer>
 * ```
 * 
 * ```typescript
export class WebsiteExampleComponent {
    links: Link[] = [
        { textKey: "angular 2", href: "https://angular.io/guide/quickstart", linkId: "angular2", linkOpenType:LinkOpenType.Browser },
        { textKey: "primeng", href: "https://www.primefaces.org/primeng/#/", linkId: "primeng", linkOpenType:LinkOpenType.None }
    ]
}
 * ```
 * <example-url>../screenshots/footer.JPG</example-url>
 */
@Component({
    selector: 'moj-website-footer',
    templateUrl: "moj-website-footer.component.html",
    styleUrls:["moj-website-footer.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MojWebsiteFooterComponent {
    @Input() versionNumber: string;
    @Input() links: Link[];
    @Input() socialSitesLinks: Link[];
    defaultMessage: string = "MojTexts.stickyAlertRecord";
    @Input() message: string = this.defaultMessage;
    /**
     * ```html
     * <moj-website-footer versionNumber="1.0.0" [links]="links" (linkClick)=onLinkClick($event)></moj-website-footer>
     * ```
     * ```typescript
     * onLinkClick(linkElement: Link) {
        if (linkElement.linkId === 'lnkId') {
            //Whatever
        }
    }
    }
     * ```
     */
    @Output() linkClick: EventEmitter<Link> = new EventEmitter<Link>();

    curYear: number = new Date().getFullYear()

    constructor(protected translateService: TranslateService) { 
   
    }
    

    getBrowserVersion() {
        var ua = navigator.userAgent, tem,
            M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE ' + (tem[1] || '');
        }
        if (M[1] === 'Chrome') {
            tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
            if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
        return M.join(' ');
    }

    onLinkClick(event) {
        let currentLink = this.links.find(x => x.linkId === event.currentTarget.id);
        this.linkClick.emit(currentLink);
        if (currentLink.linkOpenType === 2) {
            return false;
        }
    }
}