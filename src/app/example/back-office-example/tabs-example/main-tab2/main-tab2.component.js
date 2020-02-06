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
var core_2 = require("../../../../../../node_modules/@ngx-translate/core");
var moj_tabs_models_1 = require("../../../../moj-ng/elements/tabs/models/moj-tabs.models");
var moj_tabs_service_1 = require("../../../../moj-ng/elements/tabs/services/moj-tabs.service");
var edit_popup_example_component_1 = require("../../../grid-example/edit-popup-example.component");
var edit_options_model_1 = require("../../../../moj-ng/elements/grid/edit-component/edit-options.model");
var http_1 = require("../../../../../../node_modules/@angular/common/http");
var grid_example_service_1 = require("../../../grid-example/grid-example.service");
var products_1 = require("../../../grid-example/products");
var moj_grid_service_1 = require("../../../../moj-ng/elements/grid/service/moj-grid.service");
var rxjs_1 = require("rxjs");
var dynamic_components_1 = require("../../../../moj-ng/elements/dynamic-form/dynamic-components");
var moj_filter_model_1 = require("../../../../moj-ng/elements/filter/moj-filter.model");
var moj_list_view_type_enum_1 = require("../../../../moj-ng/elements/grid/list-view/moj-list-view-type.enum");
var dataview_type_enum_1 = require("../../../../moj-ng/elements/grid/models/dataview-type.enum");
var MainTab2Component = /** @class */ (function () {
    function MainTab2Component(translate, mojTabsService, gridExampleService, http, gridService) {
        this.translate = translate;
        this.mojTabsService = mojTabsService;
        this.gridExampleService = gridExampleService;
        this.http = http;
        this.gridService = gridService;
        this.array = new Array();
        this.listItemType = moj_list_view_type_enum_1.MojListItemType;
        this.filterConfig = {
            categories: [
                new moj_filter_model_1.MojCategoryFilter("תיקים", null, [
                    new moj_filter_model_1.MojCategoryFilter("תיקי בית משפט מחוזי", [
                    // [{ name: "fld1", type: MojDynamicCheckboxComponent, labelTextKey: "חיפה"}],
                    // [{ name: "fld2", type: MojDynamicCheckboxComponent, labelTextKey: "ירושלים"}]
                    ], [
                        new moj_filter_model_1.MojCategoryFilter("בימ\"ש", [
                            [{ name: "fld1", type: dynamic_components_1.MojDynamicCheckboxComponent, value: true, labelTextKey: "חיפה" }],
                            [{ name: "fld2", type: dynamic_components_1.MojDynamicCheckboxComponent, labelTextKey: "ירושלים" }]
                        ]),
                        new moj_filter_model_1.MojCategoryFilter("תובע מטפל", [
                            [{ name: "fld3", type: dynamic_components_1.MojDynamicCheckboxComponent, labelTextKey: "אמיר אוחיון" }],
                            [{ name: "fld4", type: dynamic_components_1.MojDynamicCheckboxComponent, labelTextKey: "אמיר דרורי" }]
                        ]),
                        new moj_filter_model_1.MojCategoryFilter("טווח תאריכים", [
                            [{ name: "fld5", type: dynamic_components_1.MojDynamicDatePickerComponent, labelTextKey: "מתאריך", controlWidthColumns: 6 },
                                { name: "fld6", type: dynamic_components_1.MojDynamicDatePickerComponent, labelTextKey: "עד תאריך", controlWidthColumns: 6 }]
                        ]),
                        new moj_filter_model_1.MojCategoryFilter("סטטוס", [
                            [{ name: "fld7", type: dynamic_components_1.MojDynamicCheckboxComponent, labelTextKey: "סגור" }],
                        ])
                    ]),
                    new moj_filter_model_1.MojCategoryFilter("תיקי הכוון והשמה", [], [
                        new moj_filter_model_1.MojCategoryFilter("בימ\"ש", [
                            [{ name: "fld1", type: dynamic_components_1.MojDynamicCheckboxComponent, labelTextKey: "חיפה" }],
                            [{ name: "fld2", type: dynamic_components_1.MojDynamicCheckboxComponent, labelTextKey: "ירושלים" }]
                        ])
                    ]),
                    new moj_filter_model_1.MojCategoryFilter("תיקי טאבו", [], [
                        new moj_filter_model_1.MojCategoryFilter("בימ\"ש", [
                            [{ name: "fld1", type: dynamic_components_1.MojDynamicCheckboxComponent, labelTextKey: "חיפה" }],
                            [{ name: "fld2", type: dynamic_components_1.MojDynamicCheckboxComponent, labelTextKey: "ירושלים" }]
                        ])
                    ]),
                    new moj_filter_model_1.MojCategoryFilter("תיקי תאגידים", [], [
                        new moj_filter_model_1.MojCategoryFilter("בימ\"ש", [
                            [{ name: "fld1", type: dynamic_components_1.MojDynamicCheckboxComponent, labelTextKey: "חיפה" }],
                            [{ name: "fld2", type: dynamic_components_1.MojDynamicCheckboxComponent, labelTextKey: "ירושלים" }]
                        ])
                    ])
                ]),
                new moj_filter_model_1.MojCategoryFilter("נוצר ע\"י", [
                    [{ name: "fld8", type: dynamic_components_1.MojDynamicAutoCompleteComponent, labelTextKey: "נוצר ע\"י" }]
                ]),
                new moj_filter_model_1.MojCategoryFilter("תאריך יצירה", [
                    [{ name: "fld9", type: dynamic_components_1.MojDynamicDatePickerComponent, labelTextKey: "מתאריך", controlWidthColumns: 6 },
                        { name: "fld10", type: dynamic_components_1.MojDynamicDatePickerComponent, labelTextKey: "עד תאריך", controlWidthColumns: 6 }]
                ]),
                new moj_filter_model_1.MojCategoryFilter("תאריך שינוי", [
                    [{ name: "fld13", type: dynamic_components_1.MojDynamicAutoCompleteComponent, labelTextKey: "נוצר ע\"י" }]
                ]),
                new moj_filter_model_1.MojCategoryFilter("מעדכן אחרון", [
                    [{ name: "fld14", type: dynamic_components_1.MojDynamicTextboxComponent, labelTextKey: "" }]
                ])
            ]
        };
        this.editOptions = new edit_options_model_1.EditOptions();
        this.dataViewType = dataview_type_enum_1.MojDataViewType;
        this.listData = [
            { id: 1, icon: "fal fa-file-word", name: "אמיר אוחיון - פתוח - 22", desc: "" },
            { id: 2, icon: "fal fa-file-pdf", name: "אמירן סהר חברה בע\"מ", desc: "" }
        ];
        this.actions = [
            { textKey: 'צפייה בבקשה', href: '/website-example/autocomplete', cssClass: 'request' },
            { textKey: 'צפייה בצו', href: '/website-example/recaptcha', cssClass: 'zzz' },
            { textKey: 'הגשת התנגדות', href: '/website-example/form', cssClass: 'refuse' }
        ];
        this.fileTypes = [
            { extension: 'pdf', iconClass: 'fas fa-trash-alt' },
            { extension: 'folder', iconClass: 'fas fa-folder redd' }
        ];
        this.buttonToggleItems = [
            //{id:1, text:this.translateService.instant("FileFields.discussions"),cssClasses:'file_toggle_btn'},
            //{id:2, text:this.translateService.instant("Texts.documents"),cssClasses:'file_toggle_btn'}, 
            { id: 1, text: "שדגשדג", iconClass: 'far fa-clock' },
            { id: 2, text: "שדג", iconClass: 'far fa-file' }
        ];
        this.initMainTab();
        for (var index = 0; index < 999999; index++) {
            this.array.push({ aa: 'aa', bb: 'bb', cc: 'cc', dd: 'dd' });
        }
    }
    MainTab2Component.prototype.filterMyData = function (filterData) {
        console.log(filterData);
    };
    MainTab2Component.prototype.initMainTab = function () {
        var sideMenuItems = [
            { url: 'sub1', title$: rxjs_1.of('טאב משני 1') },
            { url: 'sub2', title$: rxjs_1.of('טאב משני 2') },
            { url: 'sub3', title$: rxjs_1.of('טאב משני 3') }
        ];
        this.tab = new moj_tabs_models_1.MojTab('/bo-example/root/tab2/hello-tab2', rxjs_1.of('טאב 2'));
        this.tab.sideMenuItems = sideMenuItems;
        this.tab.headerData = new Array({ key: "Texts.ProductName", value: "ירושלים", cssClass: "my-class" }, { key: "Texts.ProductName", value: "שלום כהן" });
        this.tab = this.mojTabsService.addOrGetTab(this.tab);
    };
    MainTab2Component.prototype.ngOnInit = function () {
        this.rowData1 = products_1.products;
        this.rowData2 = products_1.products;
        this.columns1 = [
            this.gridService.getMojColumn('ID'),
            this.gridService.getMojColumn('ProductName'),
            this.gridService.getMojColumn('UnitPrice', {
                colDef: { headerName: 'price', editable: true, onCellValueChanged: this.clickLink }
            }),
            this.gridService.getStateColumn(),
            this.gridService.getMojDateColumn('FirstOrderedOn'),
            this.gridService.getEditColumn(),
            this.gridService.getDeleteColumn()
        ];
        this.columns2 = [
            this.gridService.getMojDocumentFormatColumn('Format', {
                clickLink: this.clickLink,
                tooltip: 'Texts.aa',
                fileTypes: this.fileTypes
            }),
            this.gridService.getLinkColumn('ID', { clickLink: this.clickLink, title: 'aa' }),
            this.gridService.getRadioBttonColumn('Discontinued'),
            this.gridService.getActionsPopupColumn({ items: this.actions }),
            this.gridService.getMojIconColumn('Discontinued', {
                icon: { iconClass: 'far fa-smile orange2 font-22', tooltip: 'please smile!' }
            }),
            this.gridService.getMojIconColumn('Discontinued', {
                icon: { field: 'ProductName', iconClass: 'far fa-arrow-alt-circle-down orange1', clickLink: this.clickLink },
                iconWithText: true
            }),
            this.gridService.getMojIconColumn('Discontinued', {
                icon: this.getIcon.bind(this),
                iconWithText: true,
                colDef: { headerName: 'dynamic' }
            })
        ];
        this.editOptions.editComponentType = edit_popup_example_component_1.EditPopupExampleComponent;
        this.editOptions.editDialogTitle = 'עריכת מוצר';
        // this.editOptions.editType = EditType.ReplaceArea;
        // this.editOptions.hideAreaOnEdit = this.areaToReplace;
        this.gridOptions = this.gridService.getMojGridOptions();
        this.gridOptions.paginationPageSize = 5;
        //this.editOptions.editType = EditType.Dialog;
        //this.editOptions.deleteUrl = 'http://localhost:62060/api/Grid/Delete';
        //this.editOptions.saveUrl = 'http://localhost:62060/api/Grid/Post';
        this.editService = this.gridExampleService;
    };
    MainTab2Component.prototype.clickLink = function (product) {
        alert('Go to task ' + product.ID);
    };
    MainTab2Component.prototype.onBtExport = function () {
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
    MainTab2Component.prototype.onGridReady1 = function (params) {
        this.gridApi1 = params.api;
    };
    MainTab2Component.prototype.printDataToConsole = function () {
        console.log(this.gridService.getRowData(this.gridApi1));
    };
    MainTab2Component.prototype.getIcon = function (params) {
        if (params.data.ProductName == "Chef Anton's Gumbo Mix") {
            return {
                iconClass: 'fas fa-trash-alt',
                tooltip: 'one',
                text: 'delete'
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
                clickLink: this.clickLink
            };
        }
    };
    __decorate([
        core_1.ViewChild('areaToReplace', { read: core_1.ViewContainerRef, static: true }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], MainTab2Component.prototype, "areaToReplace", void 0);
    MainTab2Component = __decorate([
        core_1.Component({
            selector: 'moj-bo-example-mainTab',
            templateUrl: './main-tab2.component.html',
            styles: [".filter-example { display: grid; grid-template-columns: auto 1fr; grid-column-gap: 2em;}"]
        }),
        __metadata("design:paramtypes", [core_2.TranslateService,
            moj_tabs_service_1.MojTabsService,
            grid_example_service_1.GridExampleService,
            http_1.HttpClient,
            moj_grid_service_1.GridService])
    ], MainTab2Component);
    return MainTab2Component;
}());
exports.MainTab2Component = MainTab2Component;
//# sourceMappingURL=main-tab2.component.js.map