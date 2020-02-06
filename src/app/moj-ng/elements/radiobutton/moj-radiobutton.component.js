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
var element_base_1 = require("../base/element.base");
var label_enum_1 = require("../label/label.enum");
var permission_service_1 = require("../../permissions/permission.service");
/**
 * ```html
 * <moj-radiobutton [controlWidthColumns]="2" [(ngModel)]="radioOptions" [radiovalue]="1" name="radioOptions" [labelTextKey]="'Texts.option1'"></moj-radiobutton>
   <moj-radiobutton [controlWidthColumns]="2" [(ngModel)]="radioOptions" [radiovalue]="2" name="radioOptions" [labelTextKey]="'Texts.option2'"></moj-radiobutton>
 * ```
 * If action is required after changing the radio checked
 * ```html
 * (checkedChange)="onRadioChanged($event)
 * ```
 * ```typescript
 * onRadioChanged(value) {
    if (value == 1) {
    }
  }
 * ```
 */
var MojRadiobuttonComponent = /** @class */ (function (_super) {
    __extends(MojRadiobuttonComponent, _super);
    function MojRadiobuttonComponent(el, _injector, translateService, permissionService) {
        var _this = _super.call(this, el, _injector, permissionService) || this;
        _this.translateService = translateService;
        _this.checkedChange = new core_1.EventEmitter();
        _this.setFocus = false;
        _this.labelAlignEnum = label_enum_1.LabelAlign;
        return _this;
    }
    MojRadiobuttonComponent_1 = MojRadiobuttonComponent;
    MojRadiobuttonComponent.prototype.onCheckedChange = function (event) {
        this.checkedChange.emit(this.radiovalue);
    };
    MojRadiobuttonComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.identifier = this.identifier + "_" + this.radiovalue;
    };
    MojRadiobuttonComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.setFocus)
            setTimeout(function () {
                _this.radioButtonElement.nativeElement.focus();
            }, 200);
    };
    var MojRadiobuttonComponent_1;
    __decorate([
        core_1.ViewChild('radioButtonElement', { static: true }),
        __metadata("design:type", core_1.ElementRef)
    ], MojRadiobuttonComponent.prototype, "radioButtonElement", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MojRadiobuttonComponent.prototype, "checkedChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MojRadiobuttonComponent.prototype, "radiovalue", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MojRadiobuttonComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojRadiobuttonComponent.prototype, "setFocus", void 0);
    MojRadiobuttonComponent = MojRadiobuttonComponent_1 = __decorate([
        core_1.Component({
            selector: "moj-radiobutton",
            templateUrl: "moj-radiobutton.component.html",
            styleUrls: ["./moj-radiobutton.component.scss"],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: MojRadiobuttonComponent_1,
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            core_1.Injector,
            core_2.TranslateService, permission_service_1.PermissionService])
    ], MojRadiobuttonComponent);
    return MojRadiobuttonComponent;
}(element_base_1.ElementBase));
exports.MojRadiobuttonComponent = MojRadiobuttonComponent;
//# sourceMappingURL=moj-radiobutton.component.js.map