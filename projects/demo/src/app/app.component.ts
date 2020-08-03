import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { MessageType, ButtonStyle, PermissionService, PermissionType, popupDir, MojLanguage, MojDirection, Link, SocialLinkType, LinkOpenType, } from '@moj/moj-ng';
// import { ButtonStyle } from '@moj/moj-ng';
import { MojMessagesService } from '@moj/moj-ng';
import { MenuItem } from 'primeng/primeng';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    multiselectValue;
    buttonStyle = ButtonStyle;
    links;
    items: MenuItem[];
    popupDir=popupDir;
    languages: MojLanguage[] = [{ code: "he", value: "עב", dir: MojDirection.rtl }, { code: "en", value: "EN", dir: MojDirection.ltr }];
    SocialLink : Link[] = [
        { href:"https://www.linkedin.com/company/israeli-ministry-of-justice",iconClass:SocialLinkType.linkdin,linkId: "angular2" ,linkOpenType:LinkOpenType.Browser},
        { href:"https://www.instagram.com/ministry_of_justice_il/",iconClass:SocialLinkType.instagram,linkId: "angular2" ,linkOpenType:LinkOpenType.Browser},
        { href:"https://he-il.facebook.com/justice.gov.il",iconClass:SocialLinkType.facebook,linkId: "angular2" ,linkOpenType:LinkOpenType.Browser},
        { href:"https://twitter.com/JusticeGov?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",iconClass:SocialLinkType.twitter,linkId: "angular2" ,linkOpenType:LinkOpenType.Browser},
        { href:"https://www.youtube.com/channel/UCED0pglX9p-U6qELxY6PioQ",iconClass:SocialLinkType.youtube,linkId: "angular2" ,linkOpenType:LinkOpenType.Browser},
    ];
    
    constructor(translate: TranslateService, private messageService: MojMessagesService, private permissionService: PermissionService) {

        this.permissionService.AddModule("#permissionsDemo;^autocomplete", PermissionType.Read);
        this.permissionService.AddModule("#permissionsDemo;^textbox", PermissionType.Read);
        this.permissionService.AddModule("#permissionsDemo;^button", PermissionType.Read);
        this.permissionService.AddModule("#blockedPage;", PermissionType.blocked);

    }
    ngOnInit() {
    }

    onClick() {
        this.messageService.showMessage("הודעה לדוגמה", null, null, MessageType.Attention)
    }
}
