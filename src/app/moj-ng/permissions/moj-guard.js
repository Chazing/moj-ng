"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var permission_service_1 = require("./permission.service");
var __1 = require("..");
var MojGuard = /** @class */ (function () {
    function MojGuard(permissionService, messageService) {
        this.permissionService = permissionService;
        this.messageService = messageService;
    }
    MojGuard.prototype.canActivate = function (route) {
        if (route.data && route.data.routerID && this.permissionService.isBlocked(route.data.routerID.replace("#", ""))) {
            this.messageService.showMessage('MojTexts.permissionError', 'MojTexts.alertMessage', null, __1.MessageType.Error);
            return false;
        }
        return true;
    };
    MojGuard = __decorate([
        core_1.Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [permission_service_1.PermissionService, __1.MojMessagesService])
    ], MojGuard);
    return MojGuard;
}());
exports.MojGuard = MojGuard;
//# sourceMappingURL=moj-guard.js.map