import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { MessageType, ButtonStyle, PermissionService, PermissionType, } from '@moj/moj-ng';
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
