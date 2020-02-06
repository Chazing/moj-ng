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
var ag_grid_community_1 = require("ag-grid-community");
var element_base_1 = require("../../base/element.base");
var MojCellEditorComponent = /** @class */ (function () {
    function MojCellEditorComponent() {
        this.labelTextKey = '';
    }
    MojCellEditorComponent.prototype.agInit = function (params) {
        this.params = params;
        this.labelTextKey = params.column.colDef.headerName || params.column.colDef.field;
        if (this.elementBase) {
            this.elementBase.labelTextKey = this.labelTextKey;
            if (this.params.column.colDef.field)
                this.elementBase.identifier = this.params.column.colDef.field;
        }
        if (params.column.colDef.cellEditorParams) {
            this.mapCellParams(params.column.colDef.cellEditorParams);
        }
    };
    MojCellEditorComponent.prototype.ngAfterViewInit = function () {
        if (this.elementBase && this.elementBase.control && this.params.column.colDef.cellEditorParams) {
            this.elementBase.control.setValidators(this.params.column.colDef.cellEditorParams.validators);
        }
    };
    //inputs and outputs from EditColumnOptions
    MojCellEditorComponent.prototype.mapCellParams = function (cellEditorParams) {
        var _this = this;
        Object.keys(cellEditorParams).forEach(function (key) {
            if (_this.elementBase) {
                //map outputs
                if (_this.elementBase[key] instanceof core_1.EventEmitter) {
                    _this.elementBase[key].subscribe(function (event) {
                        cellEditorParams[key](event, _this.elementBase);
                    });
                }
                //map inputs
                else {
                    _this.elementBase[key] = cellEditorParams[key];
                }
            }
        });
    };
    MojCellEditorComponent.prototype.isCancelAfterEnd = function () {
        if (!this.elementBase.control.valid) {
            return true;
        }
    };
    MojCellEditorComponent.prototype.ngOnDestroy = function () {
        if (this.elementBase.control.valid) {
            this.params.api.context.invalidCell = null;
        }
        else {
            this.params.api.context.invalidCell = { 'nodeId': this.params.node.id, 'rowIndex': this.params.rowIndex, 'fieldName': this.params.fieldName, 'value': this.params.value };
        }
    };
    MojCellEditorComponent.prototype.isPopup = function () {
        return true;
    };
    MojCellEditorComponent.prototype.getValue = function () {
        return this.params.value;
    };
    __decorate([
        core_1.ViewChild(element_base_1.ElementBase, { static: true }),
        __metadata("design:type", element_base_1.ElementBase)
    ], MojCellEditorComponent.prototype, "elementBase", void 0);
    return MojCellEditorComponent;
}());
exports.MojCellEditorComponent = MojCellEditorComponent;
var MojTextboxColumnComponent = /** @class */ (function (_super) {
    __extends(MojTextboxColumnComponent, _super);
    function MojTextboxColumnComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MojTextboxColumnComponent.prototype.onKeyDown = function (event) {
        var isNavigationKey = event.keyCode === ag_grid_community_1.Constants.KEY_LEFT
            || event.keyCode === ag_grid_community_1.Constants.KEY_RIGHT
            || event.keyCode === ag_grid_community_1.Constants.KEY_UP
            || event.keyCode === ag_grid_community_1.Constants.KEY_DOWN
            || event.keyCode === ag_grid_community_1.Constants.KEY_PAGE_DOWN
            || event.keyCode === ag_grid_community_1.Constants.KEY_PAGE_UP
            || event.keyCode === ag_grid_community_1.Constants.KEY_PAGE_HOME
            || event.keyCode === ag_grid_community_1.Constants.KEY_PAGE_END
            || event.keyCode === ag_grid_community_1.Constants.STEP_EVERYTHING;
        if (isNavigationKey) {
            event.stopPropagation();
        }
    };
    MojTextboxColumnComponent = __decorate([
        core_1.Component({
            selector: "moj-textbox-column",
            template: "<moj-textbox tabindex=\"-1\" [(ngModel)]=\"params.value\" (keydown)=\"onKeyDown($event)\"></moj-textbox>",
        })
    ], MojTextboxColumnComponent);
    return MojTextboxColumnComponent;
}(MojCellEditorComponent));
exports.MojTextboxColumnComponent = MojTextboxColumnComponent;
var MojTextAreaColumnComponent = /** @class */ (function (_super) {
    __extends(MojTextAreaColumnComponent, _super);
    function MojTextAreaColumnComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MojTextAreaColumnComponent.prototype.onKeyDown = function (event) {
        var key = event.which || event.keyCode;
        if (key == ag_grid_community_1.Constants.KEY_LEFT ||
            key == ag_grid_community_1.Constants.KEY_UP ||
            key == ag_grid_community_1.Constants.KEY_RIGHT ||
            key == ag_grid_community_1.Constants.KEY_DOWN ||
            (event.shiftKey && key == ag_grid_community_1.Constants.KEY_ENTER)) {
            event.stopPropagation();
        }
    };
    MojTextAreaColumnComponent = __decorate([
        core_1.Component({
            selector: "moj-textarea-column",
            template: "<moj-textarea [(ngModel)]=\"params.value\" (keydown)=\"onKeyDown($event)\"></moj-textarea>",
        })
    ], MojTextAreaColumnComponent);
    return MojTextAreaColumnComponent;
}(MojCellEditorComponent));
exports.MojTextAreaColumnComponent = MojTextAreaColumnComponent;
var MojDropdownColumnComponent = /** @class */ (function (_super) {
    __extends(MojDropdownColumnComponent, _super);
    function MojDropdownColumnComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MojDropdownColumnComponent.prototype.onKeyDown = function (event) {
        var isNavigationKey = event.keyCode === ag_grid_community_1.Constants.KEY_UP || event.keyCode === ag_grid_community_1.Constants.KEY_DOWN;
        if (isNavigationKey) {
            event.stopPropagation();
        }
    };
    MojDropdownColumnComponent = __decorate([
        core_1.Component({
            selector: "moj-dropdown-column",
            template: "<moj-dropdownlist [(ngModel)]=\"params.value\" (keydown)=\"onKeyDown($event)\"></moj-dropdownlist>",
        })
    ], MojDropdownColumnComponent);
    return MojDropdownColumnComponent;
}(MojCellEditorComponent));
exports.MojDropdownColumnComponent = MojDropdownColumnComponent;
var MojAutoCompleteColumnComponent = /** @class */ (function (_super) {
    __extends(MojAutoCompleteColumnComponent, _super);
    function MojAutoCompleteColumnComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MojAutoCompleteColumnComponent.prototype.onKeyDown = function (event) {
        var isNavigationKey = event.keyCode === ag_grid_community_1.Constants.KEY_LEFT
            || event.keyCode === ag_grid_community_1.Constants.KEY_RIGHT
            || event.keyCode === ag_grid_community_1.Constants.KEY_UP
            || event.keyCode === ag_grid_community_1.Constants.KEY_DOWN;
        if (isNavigationKey) {
            event.stopPropagation();
        }
    };
    MojAutoCompleteColumnComponent = __decorate([
        core_1.Component({
            selector: "moj-autocomplete-column",
            template: "<moj-autocomplete [(ngModel)]=\"params.value\" (keydown)=\"onKeyDown($event)\"></moj-autocomplete>",
        })
    ], MojAutoCompleteColumnComponent);
    return MojAutoCompleteColumnComponent;
}(MojCellEditorComponent));
exports.MojAutoCompleteColumnComponent = MojAutoCompleteColumnComponent;
var MojMultiSelectColumnComponent = /** @class */ (function (_super) {
    __extends(MojMultiSelectColumnComponent, _super);
    function MojMultiSelectColumnComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MojMultiSelectColumnComponent = __decorate([
        core_1.Component({
            selector: "moj-multiselect-column",
            template: "<moj-multiselect [(ngModel)]=\"params.value\"></moj-multiselect>",
        })
    ], MojMultiSelectColumnComponent);
    return MojMultiSelectColumnComponent;
}(MojCellEditorComponent));
exports.MojMultiSelectColumnComponent = MojMultiSelectColumnComponent;
var MojDatePickerColumnComponent = /** @class */ (function (_super) {
    __extends(MojDatePickerColumnComponent, _super);
    function MojDatePickerColumnComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MojDatePickerColumnComponent.prototype.onKeyDown = function (event) {
        var isNavigationKey = event.keyCode === ag_grid_community_1.Constants.KEY_LEFT
            || event.keyCode === ag_grid_community_1.Constants.KEY_RIGHT
            || event.keyCode === ag_grid_community_1.Constants.KEY_UP
            || event.keyCode === ag_grid_community_1.Constants.KEY_DOWN
            || event.keyCode === ag_grid_community_1.Constants.KEY_PAGE_DOWN
            || event.keyCode === ag_grid_community_1.Constants.KEY_PAGE_UP
            || event.keyCode === ag_grid_community_1.Constants.KEY_PAGE_HOME
            || event.keyCode === ag_grid_community_1.Constants.KEY_PAGE_END
            || event.keyCode === ag_grid_community_1.Constants.STEP_EVERYTHING;
        if (isNavigationKey) {
            event.stopPropagation();
        }
    };
    MojDatePickerColumnComponent = __decorate([
        core_1.Component({
            selector: "moj-datepicker-column",
            template: "<moj-datepicker [(ngModel)]=\"params.value\" (keydown)=\"onKeyDown($event)\" ></moj-datepicker>",
        })
    ], MojDatePickerColumnComponent);
    return MojDatePickerColumnComponent;
}(MojCellEditorComponent));
exports.MojDatePickerColumnComponent = MojDatePickerColumnComponent;
//# sourceMappingURL=edit-inline-columns.js.map