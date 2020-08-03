import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MojConfigService } from "../shared/moj-config.service";
import { PermissionType } from "./permission.enum";
import { Router, Event as NavigationEvent, ActivatedRoute, NavigationEnd, } from "@angular/router";
import { permissionsData, permissionsModule } from "./permissionsData";

@Injectable({ providedIn: 'root' })
export class PermissionService {
    public userPermissions: permissionsData[] = [];
    public routerId: string;
    public routeControllersPermissions: permissionsData[];

    constructor(router: Router, private activatedRoute: ActivatedRoute) {
        //  this.AddModule("#form;^myform" ,PermissionType.Read);
        //get routerID
        router.events.subscribe((event: NavigationEvent) => {
            if (event instanceof NavigationEnd) {
                this.resetPrevRouteData();
                var child = this.activatedRoute.firstChild;
                while (child) {
                    if (child.firstChild) {
                        child = child.firstChild;
                    } else if (child.snapshot.data && child.snapshot.data['routerID']) {
                        this.routerId = child.snapshot.data['routerID'].replace("#", "");
                        this.setRouterControllersPermissions();
                        return
                    }
                    else {
                        this.setRouterControllersPermissions();
                        return;
                    }
                }
            }
        });
    }

    resetPrevRouteData() {
        this.routerId = null;
        this.routeControllersPermissions = [];
    }

    setRouterControllersPermissions() {
        var routePermissions = this.userPermissions.filter(s => (this.routerId != null && s.routerID == this.routerId || s.routerID == "generalRouter") && s.controllerName != null);
        if (routePermissions && routePermissions.length) {
            routePermissions.forEach(element => {
                this.routeControllersPermissions.push({ controllerName: element.controllerName, permissionType: element.permissionType });
            });
        }
    }

    setUesrPermission(uesrPermission: permissionsModule[]) {
        uesrPermission.forEach(element => {
            this.AddModule(element.moduleString, element.type);
        });
    }

    AddModule(moduleString: string, type: PermissionType) {
        let permissionData = new permissionsData();
        var result = moduleString.split(';');
        if (result && result.length) {
            var moduleRouterID = result.find(s => s.indexOf("#") == 0);
            if (moduleRouterID)
                permissionData.routerID = moduleRouterID.replace("#", "");

            var moduleControllerName = result.find(s => s.indexOf("^") == 0);
            permissionData.controllerName = moduleControllerName != undefined ? moduleControllerName.replace("^", "") : null;

            if (permissionData.routerID) {
                permissionData.permissionType = type;
                this.userPermissions.push(permissionData);
            }
        }
    }

    isBlocked(routerId): boolean {
        if (this.userPermissions && this.userPermissions.length) {
            let result = this.userPermissions.filter(s => (s.routerID == routerId) && s.permissionType == PermissionType.blocked);
            if (result && result.length > 0)
                return true
            return false;
        }
    }

    getControllerPermission(controllerName) {
        var result = { enable: true, visible: true };
        if (controllerName != undefined) {
            controllerName.replace(new RegExp("'"), '');

            if (this.routeControllersPermissions && this.routeControllersPermissions.length) {
                var enableResult = this.routeControllersPermissions.filter(s => s.controllerName == controllerName && s.permissionType == PermissionType.Read);
                if (enableResult && enableResult.length > 0)
                    result.enable = false;

                var visibleResult = this.routeControllersPermissions.filter(s => s.controllerName == controllerName && s.permissionType == PermissionType.Hidden);
                if (visibleResult && visibleResult.length > 0)
                    result.visible = false;
            }
        }
        return result;
    }
}




