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
var multiselect_1 = require("primeng/components/multiselect/multiselect");
var element_base_1 = require("../base/element.base");
var primeng_1 = require("primeng/primeng");
var permission_service_1 = require("../../permissions/permission.service");
/**
 * Example of usage:
 * ```html
 * <moj-multiselect name="multiselectValue"
                     labelTextKey="Texts.Choose"
                     controlWidthColumns="2"
                     [(ngModel)]="multiselectValue"
                     [items]="listItems"
                     fieldName="ProductName"
                     fieldID="ID"
                     [filter]="true">
    </moj-multiselect>
 * ```
 * For custom template
 * ```html
 *  <moj-multiselect name="autocompleteValueFrom" labelTextKey="Texts.Choose" controlWidthColumns="2"
                              [items]="numberItems" [fieldName]="'name'" [fieldID]="'id'" [(ngModel)]="autocompleteValueFrom" #autocompleteValueFrom1="ngModel"
                              (onSelect)="select($event)" [required]="true" [labelTextKey]="'בחר מעל'">
                              <ng-template let-item pTemplate="custom">
                                    <label [title]=item.value.tooltip>{{item.value.name}}</label>
                            </ng-template>
    </moj-multiselect>
 * ```
 * <example-url>../screenshots/multiselect.JPG</example-url>
*/
var MojMultiSelectComponent = /** @class */ (function (_super) {
    __extends(MojMultiSelectComponent, _super);
    function MojMultiSelectComponent(el, _injector, translateService, renderer, permissionService, cdr) {
        var _this = _super.call(this, el, _injector, permissionService) || this;
        _this.translateService = translateService;
        _this.renderer = renderer;
        _this.cdr = cdr;
        _this.filter = false;
        _this.maxSelectedLabels = 4;
        _this.selectedItemsLabel = 'MojTexts.selectedItemsLabel';
        _this.onChange = new core_1.EventEmitter();
        _this.onPanelShow = new core_1.EventEmitter();
        _this.onPanelHide = new core_1.EventEmitter();
        return _this;
    }
    MojMultiSelectComponent_1 = MojMultiSelectComponent;
    MojMultiSelectComponent.prototype.onchange = function (event) {
        this.onChange.emit(event);
    };
    MojMultiSelectComponent.prototype.onPanelshow = function (event) {
        //select all text
        var _this = this;
        var selectAllText = this.translateService.instant('MojTexts.selectAll');
        var a = this.pMultiSelect.el.nativeElement.getElementsByClassName("ui-chkbox");
        if (a[0]) {
            a[0].title = selectAllText;
        }
        for (var i = 1; i < a.length; i++) {
            var label = a[i].parentNode.getElementsByTagName("label");
            var item = this.items.filter(function (x) { return x[_this.fieldName] == label[0].textContent; });
            if (item != undefined && item.length && item[0].disabled) {
                this.renderer.addClass(a[i].parentNode, 'ui-state-disabled');
                this.renderer.addClass(a[i].parentNode, 'disabled-item');
            }
        }
        if (!this.filter) {
            var b = this.pMultiSelect.el.nativeElement.getElementsByClassName("ui-multiselect-header");
            if (b[0]) {
                b[0].insertAdjacentHTML('beforeend', '<div class="ui-multiselect-filter-container"> ' + selectAllText + ' </div>');
            }
        }
        this.onPanelShow.emit(event);
    };
    MojMultiSelectComponent.prototype.onPanelhide = function (event) {
        this.onPanelHide.emit(event);
    };
    MojMultiSelectComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.multiple = true;
        // this.pMultiSelect.defaultLabel = this.translateService.instant(this.placeholder);
        this.pMultiSelect.updateLabel();
    };
    MojMultiSelectComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        this.cdr.detectChanges();
    };
    var MojMultiSelectComponent_1;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojMultiSelectComponent.prototype, "filter", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MojMultiSelectComponent.prototype, "maxSelectedLabels", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MojMultiSelectComponent.prototype, "selectedItemsLabel", void 0);
    __decorate([
        core_1.ViewChild(multiselect_1.MultiSelect, { static: true }),
        __metadata("design:type", multiselect_1.MultiSelect)
    ], MojMultiSelectComponent.prototype, "pMultiSelect", void 0);
    __decorate([
        core_1.ContentChildren(primeng_1.PrimeTemplate),
        __metadata("design:type", core_1.QueryList)
    ], MojMultiSelectComponent.prototype, "templates", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MojMultiSelectComponent.prototype, "onChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MojMultiSelectComponent.prototype, "onPanelShow", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MojMultiSelectComponent.prototype, "onPanelHide", void 0);
    MojMultiSelectComponent = MojMultiSelectComponent_1 = __decorate([
        core_1.Component({
            selector: 'moj-multiselect',
            templateUrl: "moj-multiselect.component.html",
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: MojMultiSelectComponent_1,
                    multi: true
                },
                { provide: element_base_1.ElementBase, useExisting: core_1.forwardRef(function () { return MojMultiSelectComponent_1; }) }]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Injector, core_2.TranslateService, core_1.Renderer2,
            permission_service_1.PermissionService, core_1.ChangeDetectorRef])
    ], MojMultiSelectComponent);
    return MojMultiSelectComponent;
}(dropdown_base_1.DropDownBase));
exports.MojMultiSelectComponent = MojMultiSelectComponent;
//# sourceMappingURL=moj-multiselect.component.js.map