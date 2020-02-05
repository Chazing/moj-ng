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
var element_base_1 = require("../base/element.base");
var angular2_text_mask_1 = require("angular2-text-mask");
var permission_service_1 = require("../../permissions/permission.service");
/**
  * Usage example
  * ```html
  * <moj-textbox [(ngModel)]="formModel.title1" name="title1" minlength="3"
            controlWidthColumns="2" labelTextKey="Texts.textField">
  *</moj-textbox>
  * ```
  * <example-url>../screenshots/textbox.JPG</example-url>
 */
var MojTextboxComponent = /** @class */ (function (_super) {
    __extends(MojTextboxComponent, _super);
    function MojTextboxComponent(el, _injector, permissionService) {
        var _this = _super.call(this, el, _injector, permissionService) || this;
        _this.inputType = "";
        _this.pattern = "";
        _this.addIcon = false;
        _this.iconClass = 'fas fa-search';
        //   @Input() size: 
        _this.onChange = new core_1.EventEmitter();
        _this.iconClicked = new core_1.EventEmitter();
        _this.isBlured = false;
        _this.mask = {
            mask: false
        };
        return _this;
    }
    MojTextboxComponent_1 = MojTextboxComponent;
    Object.defineProperty(MojTextboxComponent.prototype, "showValidationMsg", {
        get: function () {
            return this.control.invalid && ((this.control.touched && this.isBlured) || this.control.submitted);
        },
        enumerable: true,
        configurable: true
    });
    MojTextboxComponent.prototype.onFocusIn = function ($event) {
        $event.target.select();
        _super.prototype.onFocusIn.call(this, $event);
    };
    MojTextboxComponent.prototype.onchange = function (value) {
        this.isBlured = true;
        this.onChange.emit(value);
    };
    MojTextboxComponent.prototype.iconClick = function () {
        this.iconClicked.emit();
    };
    var MojTextboxComponent_1;
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MojTextboxComponent.prototype, "inputType", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MojTextboxComponent.prototype, "maxlength", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MojTextboxComponent.prototype, "max", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MojTextboxComponent.prototype, "min", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MojTextboxComponent.prototype, "pattern", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", angular2_text_mask_1.TextMaskConfig)
    ], MojTextboxComponent.prototype, "mask", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MojTextboxComponent.prototype, "autocomplete", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojTextboxComponent.prototype, "addIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MojTextboxComponent.prototype, "iconClass", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MojTextboxComponent.prototype, "onChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MojTextboxComponent.prototype, "iconClicked", void 0);
    MojTextboxComponent = MojTextboxComponent_1 = __decorate([
        core_1.Component({
            selector: "moj-textbox",
            templateUrl: "moj-textbox.component.html",
            styleUrls: ['moj-textbox.component.scss'],
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return MojTextboxComponent_1; }),
                    multi: true
                },
                { provide: element_base_1.ElementBase, useExisting: core_1.forwardRef(function () { return MojTextboxComponent_1; }) }
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Injector, permission_service_1.PermissionService])
    ], MojTextboxComponent);
    return MojTextboxComponent;
}(element_base_1.ElementBase));
exports.MojTextboxComponent = MojTextboxComponent;
//# sourceMappingURL=moj-textbox.component.js.map