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
var core_1 = require("@ngx-translate/core");
var core_2 = require("@angular/core");
var forms_1 = require("@angular/forms");
var element_base_1 = require("../base/element.base");
var permission_service_1 = require("../../permissions/permission.service");
var moj_dynamic_label_component_1 = require("./moj-dynamic-label.component");
/**
 ```html
 <moj-label-for  [contentWidthColumns]=1 [labelTextKey]="'dfsdfsdf'" [(ngModel)]="formModel.textField"
                name="textField"></moj-label-for>
```
 */
var MojLabelForComponent = /** @class */ (function (_super) {
    __extends(MojLabelForComponent, _super);
    function MojLabelForComponent(el, _injector, permissionService, translateService) {
        var _this = _super.call(this, el, _injector, permissionService) || this;
        _this.translateService = translateService;
        // @Input() contentLabelStyle: LabelStyle = LabelStyle.Bold;
        _this.contentFontSize = moj_dynamic_label_component_1.FontSize.font16;
        _this.contentFontWeight = moj_dynamic_label_component_1.FontWeight.bold;
        _this.contentColor = moj_dynamic_label_component_1.MojColor.Default;
        // @Input() labelStyle: LabelStyle = LabelStyle.Standard;
        _this.fontSize = moj_dynamic_label_component_1.FontSize.font16;
        _this.fontWeight = moj_dynamic_label_component_1.FontWeight.normal;
        _this.color = moj_dynamic_label_component_1.MojColor.Default;
        return _this;
    }
    MojLabelForComponent_1 = MojLabelForComponent;
    MojLabelForComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.contentLabelClass = this.contentFontSize + " " + this.contentFontWeight + " " + this.contentColor;
        this.controlColWidth = this.controlWidthColumns ? this.controlColWidth : 'auto-width';
        this.labelClass = this.fontSize + " " + this.fontWeight + " " + this.color;
    };
    Object.defineProperty(MojLabelForComponent.prototype, "getLabelText", {
        get: function () {
            if (this.labelTextKey || this.identifier) {
                var res = this.translateService.instant(this.labelTextKey ? this.labelTextKey : "Texts." + this.identifier);
                return (res.indexOf("Texts.") == 0 ? res.substr(6) : res) + ':';
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    var MojLabelForComponent_1;
    __decorate([
        core_2.Input(),
        __metadata("design:type", String)
    ], MojLabelForComponent.prototype, "contentFontSize", void 0);
    __decorate([
        core_2.Input(),
        __metadata("design:type", String)
    ], MojLabelForComponent.prototype, "contentFontWeight", void 0);
    __decorate([
        core_2.Input(),
        __metadata("design:type", Object)
    ], MojLabelForComponent.prototype, "contentColor", void 0);
    __decorate([
        core_2.Input(),
        __metadata("design:type", String)
    ], MojLabelForComponent.prototype, "fontSize", void 0);
    __decorate([
        core_2.Input(),
        __metadata("design:type", String)
    ], MojLabelForComponent.prototype, "fontWeight", void 0);
    __decorate([
        core_2.Input(),
        __metadata("design:type", Object)
    ], MojLabelForComponent.prototype, "color", void 0);
    MojLabelForComponent = MojLabelForComponent_1 = __decorate([
        core_2.Component({
            selector: 'moj-label-for',
            template: "<div class=\"moj-input-container {{controlColWidth}}\"><label  class=\"label-for {{labelClass}}\" [attr.for]=\"identifier\">{{getLabelText}}</label>\n               <div class=\"content-label-for {{contentLabelClass}}\" id=\"{{identifier}}\">{{value}}</div></div>",
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_2.forwardRef(function () { return MojLabelForComponent_1; }),
                    multi: true
                }, { provide: element_base_1.ElementBase, useExisting: core_2.forwardRef(function () { return MojLabelForComponent_1; }) }],
            styleUrls: ["moj-label-for.component.scss"]
        }),
        __metadata("design:paramtypes", [core_2.ElementRef, core_2.Injector, permission_service_1.PermissionService, core_1.TranslateService])
    ], MojLabelForComponent);
    return MojLabelForComponent;
}(element_base_1.ElementBase));
exports.MojLabelForComponent = MojLabelForComponent;
//# sourceMappingURL=moj-label-for.component.js.map