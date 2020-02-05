import { MojMessagesService } from './../messages/moj-messages.service';
import { MessageType } from './../messages/message.enum';
import { CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { PermissionService } from "./permission.service";

@Injectable({ providedIn: 'root' })
export class MojGuard implements CanActivate {

    constructor(private permissionService: PermissionService, private messageService: MojMessagesService) {

    }


    canActivate(route: ActivatedRouteSnapshot): boolean {
        if (route.data && route.data.routerID && this.permissionService.isBlocked(route.data.routerID.replace("#", ""))) {
            this.messageService.showMessage(
                'MojTexts.permissionError',
                'MojTexts.alertMessage',
                null,
                MessageType.Error
            );
            return false;
        }
        return true;
    }
}