"use strict";
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
var http_1 = require("@angular/common/http");
var products_1 = require("./products");
var grid_example_service_1 = require("./grid-example.service");
var edit_popup_example_component_1 = require("./edit-popup-example.component");
var edit_options_model_1 = require("../../moj-ng/elements/grid/edit-component/edit-options.model");
var moj_grid_service_1 = require("../../moj-ng/elements/grid/service/moj-grid.service");
var store_service_1 = require("../common/services/store.service");
var moj_grid_panel_component_1 = require("../../moj-ng/elements/grid/moj-grid-panel.component");
var GridExampleComponent = /** @class */ (function () {
    function GridExampleComponent(gridExampleService, http, gridService, store) {
        var _this = this;
        this.gridExampleService = gridExampleService;
        this.http = http;
        this.gridService = gridService;
        this.store = store;
        this.editOptions = new edit_options_model_1.EditOptions();
        this.actions = [
            { textKey: 'צפייה בבקשה', href: '/website-example/autocomplete', cssClass: 'request' },
            { textKey: 'צפייה בצו', href: '/website-example/recaptcha', cssClass: 'zzz' },
            { textKey: 'הגשת התנגדות', href: '/website-example/form', cssClass: 'refuse' }
        ];
        this.fileTypes = [
            { extension: 'pdf', iconClass: 'fas fa-trash-alt' },
            { extension: 'folder', iconClass: 'fas fa-folder redd' }
        ];
        this.beforeAdd = function () {
            if (_this.rowData1) {
                return false;
            }
        };
        this.getItems = function (rowData) {
            return [
                { textKey: rowData.ID.toString(), href: '/website-example/autocomplete', cssClass: 'request' },
                { textKey: rowData.ProductName.toString(), href: '/website-example/recaptcha', cssClass: 'zzz' },
                { textKey: rowData.Discontinued.toString(), href: '/website-example/form', cssClass: 'refuse' }
            ];
        };
        this.getIcon = function (params) {
            if (params.data.ProductName == "Chef Anton's Gumbo Mix") {
                return {
                    iconClass: 'fas fa-trash-alt',
                    tooltip: 'one',
                    text: 'delete',
                    clickLink: function () {
                        params.data.Format = 'doc';
                        params.api.refreshCells({ rowNodes: [params.node] });
                    }
                };
            }
            else if (params.data.Format == 'doc') {
                return {
                    iconClass: 'far fa-arrow-alt-circle-down',
                    tooltip: 'Texts.aa',
                    field: 'Format'
                };
            }
            else {
                return {
                    iconClass: 'fas fa-pencil-alt',
                    field: 'ProductName',
                    clickLink: _this.clickLink
                };
            }
        };
    }
    GridExampleComponent.prototype.ngOnInit = function () {
        this.rowData1 = products_1.products;
        this.rowData2 = products_1.products;
        this.columns1 = [
            this.gridService.getMojCheckBoxColumn("", { colDef: { width: 1 } }, "mycheck"),
            this.gridService.getMojColumn('ID', { colDef: { filter: 'agNumberColumnFilter' } }),
            this.gridService.getMojHebrewEnglishColumn('ProductName', { colDef: { hide: true } }),
            this.gridService.getMojColumn('UnitPrice', {
                colDef: { headerName: 'price', editable: true, onCellValueChanged: this.clickLink }
            }),
            this.gridService.getStateColumn({ isHideOnPrint: true }),
            this.gridService.getMojDateColumn('FirstOrderedOn'),
            this.gridService.getEditColumn({ headerName: 'edit', cssClass: 'orange2', colDef: { field: "editme" } }),
            this.gridService.getLinkColumn('ID', { clickLink: this.clickLink, title: 'aa', editGridOnClick: true }),
            this.gridService.getDeleteColumn({ colDef: { field: "deleteme" } }),
            this.gridService.getDuplicateColumn()
        ];
        this.columns2 = [
            this.gridService.getMojDocumentFormatColumn('Format', {
                clickLink: this.clickLink,
                tooltip: 'Texts.aa',
                fileTypes: this.fileTypes
            }),
            this.gridService.getMojHebrewEnglishColumn('ProductName'),
            this.gridService.getLinkColumn('ID', { clickLink: this.clickLink, title: 'aa' }),
            this.gridService.getRadioBttonColumn('Discontinued'),
            this.gridService.getActionsPopupColumn({ items: this.actions }),
            this.gridService.getActionsPopupColumn({ items: this.getItems }),
            this.gridService.getMojIconColumn(null, {
                icon: { iconClass: 'far fa-smile orange2 font-22', tooltip: 'please smile!' }
            }),
            this.gridService.getMojIconColumn(null, {
                icon: { field: 'UnitPrice', iconClass: 'far fa-arrow-alt-circle-down orange1', clickLink: this.clickLink },
                iconWithText: true
            }),
            this.gridService.getMojIconColumn(null, {
                icon: this.getIcon,
                iconWithText: true,
                colDef: { headerName: 'dynamic' }
            })
        ];
        this.editOptions.editComponentType = edit_popup_example_component_1.EditPopupExampleComponent;
        this.editOptions.editDialogTitle = 'עריכת מוצר';
        this.editOptions.editType = edit_options_model_1.EditType.Dialog;
        // this.editOptions.preventScrollInEditPopup = true;
        // this.editOptions.editType = EditType.ReplaceArea;
        // this.editOptions.hideAreaOnEdit = this.areaToReplace;
        this.gridOptions = this.gridService.getMojGridOptions();
        this.gridOptions.paginationPageSize = 5;
        //this.editOptions.editType = EditType.Dialog;
        //this.editOptions.deleteUrl = 'http://localhost:62060/api/Grid/Delete';
        //this.editOptions.saveUrl = 'http://localhost:62060/api/Grid/Post';
        this.editService = this.gridExampleService;
        this.editService.afterDuplicate = this.afterDuplicate.bind(this);
    };
    GridExampleComponent.prototype.afterDuplicate = function (data, id) {
        this.grid.edit(data, id);
    };
    GridExampleComponent.prototype.clickLink = function (product) {
        alert('Go to task ' + product.ID);
    };
    GridExampleComponent.prototype.onBtExport = function () {
        var params = {
            skipHeader: false,
            columnGroups: false,
            skipFooters: false,
            skipGroups: false,
            skipPinnedTop: false,
            skipPinnedBottom: false,
            allColumns: false,
            onlySelected: false,
            fileName: 'exportGridExample',
            sheetName: 'sheet1'
        };
        this.gridApi1.exportDataAsExcel();
    };
    GridExampleComponent.prototype.onGridReady1 = function (params) {
        this.gridApi1 = params.api;
        this.gridService.getGridState(this.grid, this.store.getGridExampleState());
    };
    GridExampleComponent.prototype.printDataToConsole = function () {
        console.log(this.gridService.getRowData(this.gridApi1));
    };
    GridExampleComponent.prototype.setGridState = function () {
        this.store.setGridExampleState(this.gridService.setGridState(this.grid));
    };
    __decorate([
        core_1.ViewChild('areaToReplace', { read: core_1.ViewContainerRef, static: true }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], GridExampleComponent.prototype, "areaToReplace", void 0);
    __decorate([
        core_1.ViewChild('grid1', { static: true }),
        __metadata("design:type", moj_grid_panel_component_1.MojGridPanelComponent)
    ], GridExampleComponent.prototype, "grid", void 0);
    GridExampleComponent = __decorate([
        core_1.Component({
            selector: 'grid-example',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            templateUrl: 'grid-example.component.html'
        }),
        __metadata("design:paramtypes", [grid_example_service_1.GridExampleService,
            http_1.HttpClient,
            moj_grid_service_1.GridService,
            store_service_1.StoreService])
    ], GridExampleComponent);
    return GridExampleComponent;
}());
exports.GridExampleComponent = GridExampleComponent;
//# sourceMappingURL=grid-example.component.js.map