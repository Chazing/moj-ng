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
var core_2 = require("@ngx-translate/core");
var label_enum_1 = require("./label.enum");
var label_base_1 = require("./label-base");
var MojLabelComponent = /** @class */ (function (_super) {
    __extends(MojLabelComponent, _super);
    function MojLabelComponent(translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.translateService = translateService;
        return _this;
    }
    MojLabelComponent.prototype.ngOnInit = function () {
        this.labelDivStyles = this.labelStyle + (this.isAutoWidth ? " col auto-width " : ' col-sm-' + this.widthColumns) + (this.labelAlign == label_enum_1.LabelAlign.Left ? ' left-to-right' : '');
    };
    MojLabelComponent = __decorate([
        core_1.Component({
            selector: 'moj-label',
            template: "<div *ngIf=\"widthColumns > 0 || isAutoWidth\" class=\"{{labelDivStyles}}\" [ngStyle]=\"styleClass\">\n                    <span [style.width]=\"isAutoWidth ? 'auto' : ''\">{{ getLabelText}}</span>\n                    <span class=\"star\" *ngIf=\"isRequiredIndication\">*</span>\n               </div>",
        }),
        __metadata("design:paramtypes", [core_2.TranslateService])
    ], MojLabelComponent);
    return MojLabelComponent;
}(label_base_1.LabelBase));
exports.MojLabelComponent = MojLabelComponent;
//# sourceMappingURL=moj-label.component.js.map