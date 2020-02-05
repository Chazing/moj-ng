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
var primeng_1 = require("primeng/primeng");
var DropDownBase = /** @class */ (function (_super) {
    __extends(DropDownBase, _super);
    function DropDownBase(el, _injector, permissionService) {
        var _this = _super.call(this, el, _injector, permissionService) || this;
        _this.fieldName = 'value';
        _this.fieldID = 'key';
        _this.placeholder = '';
        _this.multiple = false;
        _this.afterInit = false;
        _this.propagateChange = function () { };
        _this.propagateTouched = function () { };
        return _this;
    }
    Object.defineProperty(DropDownBase.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (val) {
            this._items = val;
            if (this.afterInit) {
                // inputs fieldID and fieldName inited
                this.setModel(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    DropDownBase.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.afterInit = true;
        this.setModel(this.items);
    };
    DropDownBase.prototype.setModel = function (items) {
        //model type to return: object/id/string
        if (items && items.length > 0 && this.afterInit) {
            if (items.constructor === Array) {
                if (this.fieldID && items[0].hasOwnProperty(this.fieldID)) {
                    this.isIdModel = true;
                }
                else if (this.fieldName && items[0].hasOwnProperty(this.fieldName)) {
                    this.isObjectModel = true;
                }
            }
            //fix prime bug default value not selected
            if (!this.control)
                this.setControl();
            if (this.control && this.control.value) {
                this.writeValue(this.control.value);
            }
        }
    };
    Object.defineProperty(DropDownBase.prototype, "value", {
        get: function () {
            return this._innerValue;
        },
        set: function (v) {
            var _this = this;
            this._innerValue = v;
            this.propagateTouched();
            if (!v) {
                this.propagateChange(null);
            }
            else if (this.isIdModel && typeof v !== 'string') {
                //return id
                if (this.multiple && v.length > 0) {
                    var selectedItems = v.map(function (item) {
                        return item[_this.fieldID];
                    });
                    this.propagateChange(selectedItems);
                }
                else {
                    this.propagateChange(v[this.fieldID]);
                }
            }
            else {
                //return object / string
                this.propagateChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    DropDownBase.prototype.ngAfterViewInit = function () {
        var parentNode = this.el.nativeElement.parentNode;
        while (parentNode) {
            if (parentNode.nodeName === "FIELDSET") {
                if (parentNode.disabled)
                    break;
            }
            parentNode = parentNode.parentNode;
        }
        if (parentNode && parentNode.disabled)
            this.disabled = true;
    };
    DropDownBase.prototype.writeValue = function (value) {
        var _this = this;
        if (value && (!this.multiple || (this.multiple && value.length > 0))) {
            //value or array with values exists
            if (this.items && this.items.length > 0 && this.isIdModel) {
                //find the object in the list and select the id
                if (!this.multiple) {
                    var currentFieldID_1 = this.fieldID;
                    var elementPos = this.items
                        .map(function (x) {
                        return x[currentFieldID_1];
                    })
                        .indexOf(value);
                    var selectedItem = elementPos >= 0 ? this.items[elementPos] : value;
                    this._innerValue = selectedItem;
                }
                else {
                    var selectedItems_1 = [];
                    value.forEach(function (item) {
                        var currentFieldID = _this.fieldID;
                        var elementPos = _this.items
                            .map(function (x) {
                            return x[currentFieldID];
                        })
                            .indexOf(item);
                        if (elementPos >= 0) {
                            selectedItems_1.push(_this.items[elementPos]);
                        }
                    });
                    this._innerValue = selectedItems_1;
                }
            }
            else {
                this._innerValue = value;
            }
        }
        else {
            this._innerValue = null;
        }
    };
    DropDownBase.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    DropDownBase.prototype.registerOnTouched = function (fn) {
        this.propagateTouched = fn;
    };
    DropDownBase.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'custom':
                default:
                    _this.customTemplate = item.template;
                    break;
            }
        });
    };
    __decorate([
        core_1.ContentChildren(primeng_1.PrimeTemplate),
        __metadata("design:type", core_1.QueryList)
    ], DropDownBase.prototype, "templates", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DropDownBase.prototype, "items", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DropDownBase.prototype, "fieldName", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DropDownBase.prototype, "fieldID", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DropDownBase.prototype, "placeholder", void 0);
    return DropDownBase;
}(element_base_1.ElementBase));
exports.DropDownBase = DropDownBase;
//# sourceMappingURL=dropdown.base.js.map