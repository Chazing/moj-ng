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
var dropdown_base_1 = require("../base/dropdown.base");
var element_base_1 = require("../base/element.base");
var primeng_1 = require("primeng/primeng");
var permission_service_1 = require("../../permissions/permission.service");
/**
  * Usage example
  * ```html
  * <moj-dropdownlist [controlWidthColumns]="2" [required]="true" [(ngModel)]="fileTypeValue" name="fileTypeValue"
  *            [editable]="true" [items]="dropDownListItems">
  *         </moj-dropdownlist>
  * ```
  * for custom design with template
  * ```html
  * <moj-dropdownlist name="ddValue" labelTextKey="Texts.Choose"
  * controlWidthColumns="2" [items]="listItems" [(ngModel)]="ddValue">
  <ng-template let-item pTemplate="custom">
      <div style="background-color: crimson">{{item.value}}</div>
  </ng-template>
</moj-dropdownlist>
  * ```
  * <example-url>../screenshots/dropdownlist.JPG</example-url>
 */
var MojDropdownListComponent = /** @class */ (function (_super) {
    __extends(MojDropdownListComponent, _super);
    function MojDropdownListComponent(el, _injector, translateService, permissionService, cdr) {
        var _this = _super.call(this, el, _injector, permissionService) || this;
        _this.translateService = translateService;
        _this.cdr = cdr;
        _this.editable = false;
        _this.filter = false;
        _this.autoWidth = false;
        _this.setFocus = false;
        _this.onChange = new core_1.EventEmitter();
        return _this;
    }
    MojDropdownListComponent_1 = MojDropdownListComponent;
    MojDropdownListComponent.prototype.onchange = function (event) {
        this.onChange.emit(event);
    };
    MojDropdownListComponent.prototype.remove = function () {
        this.value = null;
        this.onChange.emit(null);
    };
    MojDropdownListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        _super.prototype.ngAfterViewInit.call(this);
        this.cdr.detectChanges();
        if (this.setFocus)
            setTimeout(function () {
                _this.dropdownElement.focus();
            }, 200);
    };
    var MojDropdownListComponent_1;
    __decorate([
        core_1.ViewChild('dropdownElement', { static: true }),
        __metadata("design:type", primeng_1.Dropdown)
    ], MojDropdownListComponent.prototype, "dropdownElement", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojDropdownListComponent.prototype, "editable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojDropdownListComponent.prototype, "filter", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojDropdownListComponent.prototype, "autoWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojDropdownListComponent.prototype, "setFocus", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MojDropdownListComponent.prototype, "onChange", void 0);
    MojDropdownListComponent = MojDropdownListComponent_1 = __decorate([
        core_1.Component({
            selector: 'moj-dropdownlist',
            templateUrl: "moj-dropdownlist.component.html",
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: MojDropdownListComponent_1,
                    multi: true
                },
                { provide: element_base_1.ElementBase, useExisting: core_1.forwardRef(function () { return MojDropdownListComponent_1; }) }]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Injector, core_2.TranslateService, permission_service_1.PermissionService, core_1.ChangeDetectorRef])
    ], MojDropdownListComponent);
    return MojDropdownListComponent;
}(dropdown_base_1.DropDownBase));
exports.MojDropdownListComponent = MojDropdownListComponent;
//# sourceMappingURL=moj-dropdownlist.component.js.map