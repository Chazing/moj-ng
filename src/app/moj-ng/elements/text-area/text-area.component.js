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
var element_base_1 = require("../base/element.base");
var forms_1 = require("@angular/forms");
var permission_service_1 = require("../../permissions/permission.service");
/**
  * Usage example
  * ```html
  * <moj-textarea [(ngModel)]="stringFrom" name="stringFrom"
  *              controlWidthColumns="4" [maxTextLength]="5">
  * </moj-textarea>
  * ```
  * <example-url>../screenshots/textarea.JPG</example-url>
 */
var MojTextAreaComponent = /** @class */ (function (_super) {
    __extends(MojTextAreaComponent, _super);
    function MojTextAreaComponent(el, _injector, permissionService) {
        var _this = _super.call(this, el, _injector, permissionService) || this;
        _this.rows = 3;
        _this.placeholder = '';
        _this.isBlured = false;
        return _this;
    }
    MojTextAreaComponent_1 = MojTextAreaComponent;
    Object.defineProperty(MojTextAreaComponent.prototype, "showValidationMsg", {
        get: function () {
            return this.control.invalid && ((this.control.touched && this.isBlured) || this.control.submitted);
        },
        enumerable: true,
        configurable: true
    });
    MojTextAreaComponent.prototype.onChange = function () {
        this.isBlured = true;
    };
    var MojTextAreaComponent_1;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MojTextAreaComponent.prototype, "maxTextLength", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MojTextAreaComponent.prototype, "rows", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MojTextAreaComponent.prototype, "placeholder", void 0);
    MojTextAreaComponent = MojTextAreaComponent_1 = __decorate([
        core_1.Component({
            selector: 'moj-textarea',
            templateUrl: './text-area.component.html',
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return MojTextAreaComponent_1; }),
                    multi: true
                },
                { provide: element_base_1.ElementBase, useExisting: core_1.forwardRef(function () { return MojTextAreaComponent_1; }) }],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Injector, permission_service_1.PermissionService])
    ], MojTextAreaComponent);
    return MojTextAreaComponent;
}(element_base_1.ElementBase));
exports.MojTextAreaComponent = MojTextAreaComponent;
//# sourceMappingURL=text-area.component.js.map