import { Component, ViewChild, ViewContainerRef } from "@angular/core";
import { ColDef, GridOptions } from "ag-grid-community";
import { EditOptions, EditServiceBase, MojDataViewType, ActionPopUpItem, FileType, ButtonToggleItem, GridService, EditType, MojGridPanelComponent } from "@moj/moj-ng";
import { Enums, ENUMS } from "../../../enums";
import { products } from "../../grid/products";
import { EditPopupDemoComponent } from "../../../components-demo/edit-popup-demo/edit-popup-demo.component";
import { MenuItem } from 'primeng/primeng';



@Component({
    selector: 'list-demo',
    templateUrl: './list-demo.component.html'
})
export class ListDemoComponent {

    constructor(private gridService: GridService) {
    }
    Enums: Enums = ENUMS;
    @ViewChild('grid1', { static: true }) grid: MojGridPanelComponent;
    private gridApi1;
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

    dropdownSortItems = [{id:'ProductName', name:'שם מוצר'}];

    ellipsisItems:MenuItem[] = [{
        label: 'הדפס לקונסול',
        command: (event) => {
            console.log(event.item.data);
        }}]

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
        this.editOptions.editDialogWidth = 500;

        this.gridOptions = this.gridService.getMojGridOptions();
        this.gridOptions.paginationPageSize = 5;
    }


    selectItem(selected: boolean, item) {
        console.log(selected);
        console.log(item);
    }
}




