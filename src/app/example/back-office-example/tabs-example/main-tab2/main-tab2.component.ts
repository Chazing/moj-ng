import { Component, OnInit, ViewContainerRef, ViewChild, OnDestroy } from '@angular/core';
import { TranslateService } from '../../../../../../node_modules/@ngx-translate/core';
import { MojTab, MojSideMenuItem } from '../../../../moj-ng/elements/tabs/models/moj-tabs.models';
import { MojTabsService } from '../../../../moj-ng/elements/tabs/services/moj-tabs.service';
import { Product } from '../../../grid-example/product.model';
import { EditPopupExampleComponent } from '../../../grid-example/edit-popup-example.component';
import { ColDef, GridOptions } from '../../../../../../node_modules/ag-grid-community';
import { EditOptions } from '../../../../moj-ng/elements/grid/edit-component/edit-options.model';
import { EditServiceBase } from '../../../../moj-ng/elements/grid/service/edit-service.base';
import { HttpClient } from '../../../../../../node_modules/@angular/common/http';
import { GridExampleService } from '../../../grid-example/grid-example.service';
import { FileType } from '../../../../moj-ng/elements/grid/custom-columns/moj-document-format-column/file-type.model';
import { products } from '../../../grid-example/products';
import { GridService } from '../../../../moj-ng/elements/grid/service/moj-grid.service';
import { ActionPopUpItem } from '../../../../moj-ng/elements/actions-popup/action-popup.model';
import { of } from 'rxjs';
import { MojDynamicTextboxComponent, MojDynamicDatePickerComponent, MojDynamicAutoCompleteComponent, MojDynamicCheckboxComponent } from '../../../../moj-ng/elements/dynamic-form/dynamic-components';
import { MojFilter, MojCategoryFilter } from '../../../../moj-ng/elements/filter/moj-filter.model';
import { ButtonToggleItem } from '../../../../moj-ng/elements/buttons/button-toggle/button-toggle.model';
import { MojListItemType } from '../../../../moj-ng/elements/grid/list-view/moj-list-view-type.enum';
import { MojDataViewType } from '../../../../moj-ng/elements/grid/models/dataview-type.enum';

@Component({
    selector: 'moj-bo-example-mainTab',
    templateUrl: './main-tab2.component.html',
    styles: [".filter-example { display: grid; grid-template-columns: auto 1fr; grid-column-gap: 2em;}"]
})
export class MainTab2Component {
    tab: MojTab;
    array = new Array();
    listItemType = MojListItemType;

    filterConfig: MojFilter = {
        categories: [
            new MojCategoryFilter(
                "תיקים", null, [
                    new MojCategoryFilter("תיקי בית משפט מחוזי", [
                        // [{ name: "fld1", type: MojDynamicCheckboxComponent, labelTextKey: "חיפה"}],
                        // [{ name: "fld2", type: MojDynamicCheckboxComponent, labelTextKey: "ירושלים"}]
                    ], [
                            new MojCategoryFilter(
                                "בימ\"ש", [
                                    [{ name: "fld1", type: MojDynamicCheckboxComponent, value: true, labelTextKey: "חיפה" }],
                                    [{ name: "fld2", type: MojDynamicCheckboxComponent, labelTextKey: "ירושלים" }]
                                ]
                            ),
                            new MojCategoryFilter(
                                "תובע מטפל", [
                                    [{ name: "fld3", type: MojDynamicCheckboxComponent, labelTextKey: "אמיר אוחיון" }],
                                    [{ name: "fld4", type: MojDynamicCheckboxComponent, labelTextKey: "אמיר דרורי" }]
                                ]
                            ),
                            new MojCategoryFilter(
                                "טווח תאריכים", [
                                    [{ name: "fld5", type: MojDynamicDatePickerComponent, labelTextKey: "מתאריך", controlWidthColumns: 6 },
                                    { name: "fld6", type: MojDynamicDatePickerComponent, labelTextKey: "עד תאריך", controlWidthColumns: 6 }]
                                ],
                            ),
                            new MojCategoryFilter(
                                "סטטוס", [
                                    [{ name: "fld7", type: MojDynamicCheckboxComponent, labelTextKey: "סגור" }],
                                ]
                            )
                        ]),
                    new MojCategoryFilter("תיקי הכוון והשמה", [], [
                        new MojCategoryFilter(
                            "בימ\"ש", [
                                [{ name: "fld1", type: MojDynamicCheckboxComponent, labelTextKey: "חיפה" }],
                                [{ name: "fld2", type: MojDynamicCheckboxComponent, labelTextKey: "ירושלים"}]
                            ]
                        )
                    ]),
                    new MojCategoryFilter("תיקי טאבו", [], [
                        new MojCategoryFilter(
                            "בימ\"ש", [
                                [{ name: "fld1", type: MojDynamicCheckboxComponent, labelTextKey: "חיפה" }],
                                [{ name: "fld2", type: MojDynamicCheckboxComponent, labelTextKey: "ירושלים" }]
                            ]
                        )
                    ]),
                    new MojCategoryFilter("תיקי תאגידים", [], [
                        new MojCategoryFilter(
                            "בימ\"ש", [
                                [{ name: "fld1", type: MojDynamicCheckboxComponent, labelTextKey: "חיפה" }],
                                [{ name: "fld2", type: MojDynamicCheckboxComponent, labelTextKey: "ירושלים"}]
                            ]
                        )
                    ])
                ])
            ,
            new MojCategoryFilter(
                "נוצר ע\"י",
                [
                    [{ name: "fld8", type: MojDynamicAutoCompleteComponent, labelTextKey: "נוצר ע\"י" }]
                ]
            ),
            new MojCategoryFilter(
                "תאריך יצירה",
                [
                    [{ name: "fld9", type: MojDynamicDatePickerComponent, labelTextKey: "מתאריך", controlWidthColumns: 6 },
                    { name: "fld10", type: MojDynamicDatePickerComponent, labelTextKey: "עד תאריך", controlWidthColumns: 6}]
                ]
            ),
            new MojCategoryFilter(
                "תאריך שינוי",
                [
                    [{ name: "fld13", type: MojDynamicAutoCompleteComponent, labelTextKey: "נוצר ע\"י"}]
                ]
            ),
            new MojCategoryFilter(
                "מעדכן אחרון",
                [
                    [{ name: "fld14", type: MojDynamicTextboxComponent, labelTextKey: "" }]
                ]
            )
        ]
    };

    filterMyData(filterData: any) {
        console.log(filterData);
    }

    constructor(
        private translate: TranslateService,
        private mojTabsService: MojTabsService,
        private gridExampleService: GridExampleService,
        private http: HttpClient,
        private gridService: GridService
    ) {
        this.initMainTab();
        for (let index = 0; index < 999999; index++) {
            this.array.push({ aa: 'aa', bb: 'bb', cc: 'cc', dd: 'dd' });
        }
    }

    initMainTab() {
        let sideMenuItems: MojSideMenuItem[] = [
            { url: 'sub1', title$: of('טאב משני 1') },
            { url: 'sub2', title$: of('טאב משני 2') },
            { url: 'sub3', title$: of('טאב משני 3') }
        ];
        this.tab = new MojTab('/bo-example/root/tab2/hello-tab2', of('טאב 2'));
        this.tab.sideMenuItems = sideMenuItems;
        this.tab.headerData = new Array({ key: "Texts.ProductName", value: "ירושלים", cssClass: "my-class" }, { key: "Texts.ProductName", value: "שלום כהן" });
        this.tab = this.mojTabsService.addOrGetTab(this.tab);
    }

    //****************************************************************************** */
    private gridApi1;

    rowData1;
    rowData2;
    columns1: ColDef[];
    columns2: ColDef[];
    editOptions: EditOptions = new EditOptions();
    editService: EditServiceBase;
    gridOptions: GridOptions;
    dataViewType = MojDataViewType;

    listData = [
        { id: 1, icon: "fal fa-file-word", name: "אמיר אוחיון - פתוח - 22", desc: "" },
        { id: 2, icon: "fal fa-file-pdf", name: "אמירן סהר חברה בע\"מ", desc: "" }
    ];

    actions: ActionPopUpItem[] = [
        { textKey: 'צפייה בבקשה', href: '/website-example/autocomplete', cssClass: 'request' },
        { textKey: 'צפייה בצו', href: '/website-example/recaptcha', cssClass: 'zzz' },
        { textKey: 'הגשת התנגדות', href: '/website-example/form', cssClass: 'refuse' }
    ];

    fileTypes: FileType[] = [
        { extension: 'pdf', iconClass: 'fas fa-trash-alt' },
        { extension: 'folder', iconClass: 'fas fa-folder redd' }
    ];

    buttonToggleItems:ButtonToggleItem[] = [
        //{id:1, text:this.translateService.instant("FileFields.discussions"),cssClasses:'file_toggle_btn'},
        //{id:2, text:this.translateService.instant("Texts.documents"),cssClasses:'file_toggle_btn'}, 
        {id:1, text:"שדגשדג",iconClass:'far fa-clock'},
        {id:2, text:"שדג",iconClass:'far fa-file'}];

    @ViewChild('areaToReplace', { read: ViewContainerRef, static: true }) areaToReplace: ViewContainerRef;

    ngOnInit() {

        this.rowData1 = products;
        this.rowData2 = products;

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

        this.editOptions.editComponentType = EditPopupExampleComponent;
        this.editOptions.editDialogTitle = 'עריכת מוצר';

        // this.editOptions.editType = EditType.ReplaceArea;
        // this.editOptions.hideAreaOnEdit = this.areaToReplace;
        this.gridOptions = this.gridService.getMojGridOptions();
        this.gridOptions.paginationPageSize = 5;
        //this.editOptions.editType = EditType.Dialog;

        //this.editOptions.deleteUrl = 'http://localhost:62060/api/Grid/Delete';
        //this.editOptions.saveUrl = 'http://localhost:62060/api/Grid/Post';
        this.editService = this.gridExampleService;
    }

    clickLink(product: Product) {
        alert('Go to task ' + product.ID);
    }

    onBtExport() {
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
    }

    onGridReady1(params) {
        this.gridApi1 = params.api;
    }

    printDataToConsole() {
        console.log(this.gridService.getRowData(this.gridApi1));
    }

    getIcon(params) {
        if (params.data.ProductName == "Chef Anton's Gumbo Mix") {
            return {
                iconClass: 'fas fa-trash-alt',
                tooltip: 'one',
                text: 'delete'
            };
        } else if (params.data.Format == 'doc') {
            return {
                iconClass: 'far fa-arrow-alt-circle-down',
                tooltip: 'Texts.aa',
                field: 'Format'
            };
        } else {
            return {
                iconClass: 'fas fa-pencil-alt',
                field: 'ProductName',
                clickLink: this.clickLink
            };
        }
    }
}
