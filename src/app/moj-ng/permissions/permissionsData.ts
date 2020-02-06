import { stringify } from "@angular/compiler/src/util";
import { PermissionType } from "./permission.enum";

export class permissionsModule {
    moduleString: string;
    type: PermissionType
}

export class permissionsData {
    routerID?: string;
    controllerName: string;
    permissionType: PermissionType;

}
