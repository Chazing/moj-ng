import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { TranslateService } from '../../../../../../node_modules/@ngx-translate/core';
import { MojTab } from '../../../../moj-ng/elements/tabs/models/moj-tabs.models';
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

@Component({
  selector: 'moj-bo-example-mainTab',
  templateUrl: './main-tab2.component.html',
  styleUrls: []
})
export class MainTab2Component  {

    tab: MojTab;

    constructor(private translate: TranslateService, private mojTabsService: MojTabsService, private gridExampleService: GridExampleService, private http: HttpClient, private gridService: GridService) {
        this.initMainTab();
    }
    
    initMainTab() {
      this.tab = new MojTab("/bo-example/root/tab2/hello-tab2", this.translate.get("Menu.mainTab"));
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

    actions:ActionPopUpItem[] = [
        { textKey: "צפייה בבקשה", href: "/website-example/autocomplete", cssClass: "request" },
        { textKey: "צפייה בצו", href: "/website-example/recaptcha", cssClass: "zzz" },
        { textKey: "הגשת התנגדות", href: "/website-example/form", cssClass: "refuse" }];


    fileTypes: FileType[] = [
        { extension: "pdf", iconClass: 'fas fa-trash-alt' },
        { extension: "folder", iconClass: 'fas fa-folder redd' }]

    @ViewChild("areaToReplace", { read: ViewContainerRef }) areaToReplace: ViewContainerRef;


    ngOnInit() {
        this.rowData1 = products;
        this.rowData2 = products;

        this.columns1 = [
            this.gridService.getMojColumn("ID"),
            this.gridService.getMojColumn("ProductName"),
            this.gridService.getMojColumn("UnitPrice", {colDef:{ headerName: "price", editable: true, onCellValueChanged: this.clickLink }}),
            this.gridService.getStateColumn(),
            this.gridService.getMojDateColumn("FirstOrderedOn"),
            this.gridService.getEditColumn(),
            this.gridService.getDeleteColumn()
        ];


        this.columns2 = [
            this.gridService.getMojDocumentFormatColumn("Format", {clickLink: this.clickLink, tooltip: "Texts.aa", fileTypes: this.fileTypes}),
            this.gridService.getLinkColumn("ID", {clickLink: this.clickLink, title: 'aa'}),
            this.gridService.getRadioBttonColumn("Discontinued"),
            this.gridService.getActionsPopupColumn({items: this.actions}),
            this.gridService.getMojIconColumn("Discontinued",{icon: {iconClass:"far fa-smile orange2 font-22",tooltip:"please smile!"}}),
            this.gridService.getMojIconColumn("Discontinued",{icon:{field: "ProductName", iconClass:"far fa-arrow-alt-circle-down orange1", clickLink: this.clickLink}, iconWithText: true}),
            this.gridService.getMojIconColumn("Discontinued",{icon: this.getIcon.bind(this), iconWithText: true, colDef: {headerName:'dynamic'}})
        ];


        this.editOptions.editComponentType = EditPopupExampleComponent;
        this.editOptions.editDialogTitle = "עריכת מוצר";

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
        alert("Go to task " + product.ID);
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
            fileName: "exportGridExample",
            sheetName: "sheet1"
        };
        this.gridApi1.exportDataAsExcel();
    }

    onGridReady1(params) {
        this.gridApi1 = params.api;
    }

    printDataToConsole(){
        console.log(this.gridService.getRowData(this.gridApi1));
    }

    getIcon(params){
        if(params.data.ProductName == "Chef Anton's Gumbo Mix"){
            return {
                iconClass: "fas fa-trash-alt",
                tooltip: "one",
                text:"delete"
            }
        }
        else if(params.data.Format == "doc"){
            return {
                iconClass: "far fa-arrow-alt-circle-down",
                tooltip:"Texts.aa",
                field:"Format"
            };
        }
        else{
            return {
                iconClass:"fas fa-pencil-alt",
                field:"ProductName",
                clickLink:this.clickLink
            }
        }
    }
    
}
