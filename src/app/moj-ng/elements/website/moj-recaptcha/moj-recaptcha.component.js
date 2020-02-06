"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var forms_1 = require("@angular/forms");
var core_2 = require("@ngx-translate/core");
var moj_recaptcha_service_1 = require("./moj-recaptcha.service");
var element_base_1 = require("../../base/element.base");
var permission_service_1 = require("../../../../moj-ng/permissions/permission.service");
/**
 *  <example-url>../screenshots/recaptcha.JPG</example-url>
 */
var MojRecaptchaComponent = /** @class */ (function (_super) {
    __extends(MojRecaptchaComponent, _super);
    function MojRecaptchaComponent(el, translateService, recaptchaService, zone, _injector, permissionService) {
        var _this = _super.call(this, el, _injector, permissionService) || this;
        _this.translateService = translateService;
        _this.recaptchaService = recaptchaService;
        _this.zone = zone;
        _this.permissionService = permissionService;
        _this.renderRecapcha = function () {
            _this.recaptchaId = grecaptcha.render(_this.recaptchaId, { 'sitekey': _this.recaptchaService.siteKey, 'callback': "captchaComponentReponseCallback" + _this.recaptchaId, "expired-callback": "captchaComponentExpiredCallback" + _this.recaptchaId, size: "normal" });
        };
        _this.recaptchaService.increaseIdentifier();
        _this.recaptchaId = "recaptcha" + _this.recaptchaService.recaptchaIdentifierNumber;
        _this.recaptchaService.recaptchaReady.subscribe(function (value) {
            if (value) {
                setTimeout(_this.renderRecapcha, 1);
            }
        });
        _this.createCallbachFunc();
        return _this;
    }
    MojRecaptchaComponent_1 = MojRecaptchaComponent;
    MojRecaptchaComponent.prototype.createCallbachFunc = function () {
        var _this = this;
        window["captchaComponentReponseCallback" + this.recaptchaId] = function (response) {
            _this.zone.run(function () { return _this.onResponse(response); });
        };
        window["captchaComponentExpiredCallback" + this.recaptchaId] = function () {
            _this.zone.run(function () { return _this.onResponse(null); });
        };
    };
    MojRecaptchaComponent.prototype.onResponse = function (val) {
        this.propagateChange(val);
    };
    Object.defineProperty(MojRecaptchaComponent.prototype, "showValidationMsg", {
        get: function () {
            return this.control.invalid && ((this.control.touched) || this.control.submitted);
        },
        enumerable: true,
        configurable: true
    });
    var MojRecaptchaComponent_1;
    MojRecaptchaComponent = MojRecaptchaComponent_1 = __decorate([
        core_1.Component({
            selector: 'moj-recaptcha',
            templateUrl: './moj-recaptcha.component.html',
            styleUrls: ['./moj-recaptcha.component.scss'],
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return MojRecaptchaComponent_1; }),
                    multi: true
                }],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_2.TranslateService, moj_recaptcha_service_1.MojRecaptchaService,
            core_1.NgZone, core_1.Injector, permission_service_1.PermissionService])
    ], MojRecaptchaComponent);
    return MojRecaptchaComponent;
}(element_base_1.ElementBase));
exports.MojRecaptchaComponent = MojRecaptchaComponent;
//# sourceMappingURL=moj-recaptcha.component.js.map