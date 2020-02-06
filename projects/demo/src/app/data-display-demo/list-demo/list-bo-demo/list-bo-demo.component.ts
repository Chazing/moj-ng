import { Component, ViewChild, ViewContainerRef } from "@angular/core";
import { ColDef, GridOptions } from "ag-grid-community";
import { EditOptions, EditServiceBase, MojDataViewType, ButtonToggleItem, GridService, EditType, MojGridPanelComponent } from "@moj/moj-ng";
import { Enums, ENUMS } from "../../../enums";
import { products } from "../../grid/products";
import { EditPopupDemoComponent } from "../../../components-demo/edit-popup-demo/edit-popup-demo.component";

@Component({
  selector: 'list-bo-demo',
  templateUrl: './list-bo-demo.component.html'
})
export class ListBODemoComponent  {

    constructor(private gridService: GridService) {
    }
    Enums: Enums = ENUMS;
    @ViewChild('grid1', { static: true }) grid: MojGridPanelComponent;
    rowData1;
    rowData2;
    columns1: ColDef[];
    editOptions: EditOptions = new EditOptions();
    editService: EditServiceBase;
    gridOptions: GridOptions;
    //TODO
    dataViewType = MojDataViewType;
    @ViewChild('areaToReplace', { read: ViewContainerRef, static: true }) areaToReplace: ViewContainerRef;
    buttonToggleItems: ButtonToggleItem[] = [
        { id: 1, text: "שדגשדג", iconClass: 'far fa-clock' },
        { id: 2, text: "שדג", iconClass: 'far fa-file' }];

    ngOnInit() {
        this.rowData1 = products;
        this.rowData2 = products
        this.columns1 = [
            this.gridService.getMojColumn('ID'),
            this.gridService.getMojColumn('ProductName'),
            this.gridService.getStateColumn(),
            this.gridService.getMojDateColumn('FirstOrderedOn'),
            this.gridService.getEditColumn(),
            this.gridService.getDeleteColumn()
        ];

        this.editOptions.editComponentType = EditPopupDemoComponent;
        this.editOptions.editDialogTitle = 'עריכת מוצר';
        this.editOptions.editType = EditType.Dialog;

        this.gridOptions = this.gridService.getMojGridOptions();
        this.gridOptions.paginationPageSize = 5;
    }
}
