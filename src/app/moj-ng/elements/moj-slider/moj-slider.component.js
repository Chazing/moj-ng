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
var core_2 = require("@ngx-translate/core");
var permission_service_1 = require("../../permissions/permission.service");
/**
 * ```html
 * <moj-slider [controlWidthColumns]="2" [(ngModel)]="sliderValue" [isRange]=true [showValueLabel]=true name="sliderValue"></moj-slider>
 * ```
 */
var MojSliderComponent = /** @class */ (function (_super) {
    __extends(MojSliderComponent, _super);
    function MojSliderComponent(el, _injector, translateService, permissionService) {
        var _this = _super.call(this, el, _injector, permissionService) || this;
        _this.translateService = translateService;
        _this.minValue = 0;
        _this.maxValue = 100;
        _this.disabled = false;
        _this.isRange = false;
        _this.step = 1;
        _this.orientation = 'horizontal';
        _this.showValueLabel = false;
        _this.onChange = new core_1.EventEmitter();
        return _this;
    }
    MojSliderComponent_1 = MojSliderComponent;
    MojSliderComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    Object.defineProperty(MojSliderComponent.prototype, "labelText", {
        get: function () {
            var text = '';
            if (!this.isRange)
                return this.value;
            if (this.value) {
                text = this.translateService.instant('MojTexts.from') + " " + this.value[0] + " " + this.translateService.instant('MojTexts.to') + " " + this.value[1];
            }
            return text;
        },
        enumerable: true,
        configurable: true
    });
    MojSliderComponent.prototype.change = function (event) {
        this.onChange.emit(event);
    };
    var MojSliderComponent_1;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MojSliderComponent.prototype, "minValue", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MojSliderComponent.prototype, "maxValue", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojSliderComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojSliderComponent.prototype, "isRange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MojSliderComponent.prototype, "step", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MojSliderComponent.prototype, "orientation", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojSliderComponent.prototype, "showValueLabel", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], MojSliderComponent.prototype, "onChange", void 0);
    MojSliderComponent = MojSliderComponent_1 = __decorate([
        core_1.Component({
            selector: 'moj-slider',
            templateUrl: './moj-slider.component.html',
            styleUrls: ['./moj-slider.component.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: MojSliderComponent_1,
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Injector, core_2.TranslateService, permission_service_1.PermissionService])
    ], MojSliderComponent);
    return MojSliderComponent;
}(element_base_1.ElementBase));
exports.MojSliderComponent = MojSliderComponent;
//# sourceMappingURL=moj-slider.component.js.map