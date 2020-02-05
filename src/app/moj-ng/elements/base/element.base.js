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
var value_accessor_base_1 = require("./value-accessor.base");
var rxjs_1 = require("rxjs");
var element_size_enum_1 = require("./element-size.enum");
var utils_1 = require("../../shared/utils");
var ElementBase = /** @class */ (function (_super) {
    __extends(ElementBase, _super);
    function ElementBase(el, _injector, permissionService) {
        var _this = _super.call(this) || this;
        _this.el = el;
        _this._injector = _injector;
        _this.permissionService = permissionService;
        _this.labelTextKey = "";
        _this.customValidationErrors = [];
        _this.submitted = false;
        _this.size = element_size_enum_1.ElementSize.medium;
        _this.focus = new core_1.EventEmitter();
        _this.blur = new core_1.EventEmitter();
        _this.keyup = new core_1.EventEmitter();
        _this.isControlRequired = new rxjs_1.BehaviorSubject(false);
        _this.isControlRequired$ = _this.isControlRequired.asObservable();
        _this.utilsService = _this._injector.get(utils_1.MojUtilsService);
        _this.isMobile = _this.utilsService.isMobile();
        return _this;
    }
    Object.defineProperty(ElementBase.prototype, "tabIndex", {
        get: function () {
            return this.disabled ? -1 : 0;
        },
        set: function (newIndex) {
            this.tabIndex = newIndex;
        },
        enumerable: true,
        configurable: true
    });
    ElementBase.prototype.getControlColWidth = function () {
        return "col-sm-" + this.controlWidthColumns;
    };
    Object.defineProperty(ElementBase.prototype, "showValidationMsg", {
        get: function () {
            var isShowValidationMsg = this.control && this.control.invalid && (this.control.touched || this.control.submitted);
            this.setaria_invalid(isShowValidationMsg);
            return isShowValidationMsg;
        },
        enumerable: true,
        configurable: true
    });
    ElementBase.prototype.ngDoCheck = function () {
        this.updateFilledState();
    };
    ElementBase.prototype.setPermissions = function () {
        var result = this.permissionService.getControllerPermission(this.identifier);
        if (this.disabled != undefined && !this.disabled || this.disabled == undefined) {
            this.disabled = !result.enable;
        }
        if (this.visible != undefined && this.visible || this.visible == undefined) {
            this.visible = result.visible;
        }
    };
    ElementBase.prototype.updateFilledState = function () {
        this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) ||
            (this.value && !Array.isArray(this.value)) || (Array.isArray(this.value) && this.value.length > 0);
    };
    ElementBase.prototype.setaria_invalid = function (isShowValidationMsg) {
        var input;
        switch (this.el.nativeElement.nodeName) {
            case "MOJ-TEXTBOX":
            case "MOJ-DATEPICKER":
            case "MOJ-CHECKBOX":
            case "MOJ-RADIOBUTTON":
            case "MOJ-MULTISELECT":
            case "MOJ-AUTOCOMPLETE":
                input = this.el.nativeElement.querySelector('input');
                break;
            case "MOJ-DROPDOWNLIST":
                input = this.el.nativeElement.querySelector('input.ui-dropdown-label'); //editable need input.ui-dropdown-label, not editable - the hidden input
                if (!input) {
                    input = this.el.nativeElement.querySelector('input');
                }
                break;
            case "MOJ-TEXTAREA":
                input = this.el.nativeElement.querySelector('textarea');
                break;
        }
        if (input) {
            input.setAttribute('aria-invalid', isShowValidationMsg);
        }
    };
    ElementBase.prototype.ngOnInit = function () {
        var _this = this;
        this.setControl();
        this.setIdentifier();
        this.setPermissions();
        this.controlColWidth = this.getControlColWidth();
        this.isControlRequired.next(this.getIsControlRequired());
        //check if require indication (*) need to change when control status checked
        this.subscription = this.control.statusChanges.subscribe(function (res) {
            _this.isControlRequired.next(_this.getIsControlRequired());
        });
    };
    ElementBase.prototype.ngAfterViewInit = function () {
        this.setAriaDescribedby(); //accessibility - for read messages tooltip
    };
    //TODO:ask if the change is not wrong
    ElementBase.prototype.setIdentifier = function () {
        if (this.identifier == undefined || this.identifier == null || this.identifier == "") {
            if (this.formControlName) {
                this.identifier = this.formControlName;
            }
            else {
                this.identifier = this.name;
            }
        }
    };
    ElementBase.prototype.setControl = function () {
        //for reactive forms
        if (this.formControlName) {
            if (!this.controlContainer) {
                this.controlContainer = this._injector.get(forms_1.ControlContainer);
            }
            this.control = this.controlContainer.control.get(this.formControlName);
            //for conditional validations (like greaterThen)
            this.control.valueAccessor = this;
        }
        else {
            //for template driven forms
            this.control = this._injector.get(forms_1.NgControl).control;
        }
    };
    ElementBase.prototype.onFocusIn = function ($event) {
        this.focus.emit(event);
    };
    ElementBase.prototype.onBlur = function ($event) {
        this.blur.emit(event);
    };
    ElementBase.prototype.onKeyUp = function ($event) {
        this.keyup.emit(event);
    };
    ElementBase.prototype.getIsControlRequired = function () {
        if (this.control.validator == null)
            return false;
        var validator = this.control.validator("required");
        return validator != null && validator.required;
    };
    ElementBase.prototype.setAriaDescribedby = function () {
        //set input aria-described by to error messages span
        var input;
        switch (this.el.nativeElement.nodeName) {
            case "MOJ-TEXTBOX":
            case "MOJ-DATEPICKER":
            case "MOJ-CHECKBOX":
            case "MOJ-RADIOBUTTON":
            case "MOJ-MULTISELECT":
            case "MOJ-AUTOCOMPLETE":
                input = this.el.nativeElement.querySelector('input');
                break;
            case "MOJ-DROPDOWNLIST":
                input = this.el.nativeElement.querySelector('input.ui-dropdown-label'); //editable need input.ui-dropdown-label, not editable - the hidden input
                if (!input) {
                    input = this.el.nativeElement.querySelector('input');
                }
                break;
            case "MOJ-TEXTAREA":
                input = this.el.nativeElement.querySelector('textarea');
                break;
        }
        if (input) {
            input.setAttribute('aria-describedby', this.identifier + '-error');
        }
    };
    ElementBase.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ElementBase.prototype, "controlWidthColumns", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ElementBase.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ElementBase.prototype, "readOnly", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ElementBase.prototype, "labelTextKey", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], ElementBase.prototype, "customValidationErrors", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ElementBase.prototype, "formControlName", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ElementBase.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ElementBase.prototype, "submitted", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ElementBase.prototype, "size", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ElementBase.prototype, "visible", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ElementBase.prototype, "helpText", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ElementBase.prototype, "focus", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ElementBase.prototype, "blur", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ElementBase.prototype, "keyup", void 0);
    return ElementBase;
}(value_accessor_base_1.ValueAccessorBase));
exports.ElementBase = ElementBase;
//# sourceMappingURL=element.base.js.map