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
var permission_service_1 = require("../../permissions/permission.service");
/**
  * Usage example
  * ```html
  * <moj-checkbox [controlWidthColumns]=1  [(ngModel)]="checkBoxValue" name="checkBoxValue" [labelTextKey]="'Texts.areYouInterested'">
  * ```
  * <example-url>../screenshots/checkBox.JPG</example-url>
 */
var MojCheckboxComponent = /** @class */ (function (_super) {
    __extends(MojCheckboxComponent, _super);
    function MojCheckboxComponent(el, _injector, permissionService) {
        var _this = _super.call(this, el, _injector, permissionService) || this;
        _this.onChange = new core_1.EventEmitter();
        return _this;
    }
    MojCheckboxComponent_1 = MojCheckboxComponent;
    MojCheckboxComponent.prototype.onFocusIn = function ($event) {
        $event.target.select();
        _super.prototype.onFocusIn.call(this, $event);
    };
    MojCheckboxComponent.prototype.onchange = function (event) {
        this.onChange.emit(event);
    };
    var MojCheckboxComponent_1;
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MojCheckboxComponent.prototype, "onChange", void 0);
    MojCheckboxComponent = MojCheckboxComponent_1 = __decorate([
        core_1.Component({
            selector: 'moj-checkbox',
            templateUrl: 'moj-checkbox.component.html',
            styleUrls: ['moj-checkbox.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return MojCheckboxComponent_1; }),
                    multi: true
                }, { provide: element_base_1.ElementBase, useExisting: core_1.forwardRef(function () { return MojCheckboxComponent_1; }) }]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Injector, permission_service_1.PermissionService])
    ], MojCheckboxComponent);
    return MojCheckboxComponent;
}(element_base_1.ElementBase));
exports.MojCheckboxComponent = MojCheckboxComponent;
//# sourceMappingURL=moj-checkbox.component.js.map