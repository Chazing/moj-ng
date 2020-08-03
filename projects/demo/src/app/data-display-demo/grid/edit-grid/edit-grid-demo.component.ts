import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { products } from "../products";
import { ColDef, GridOptions } from "ag-grid-community";
import { GridService, EditOptions, EditType, ContainerType } from "@moj/moj-ng";
import { EditGridComponentDemoComponent } from "./edit-grid-component.component";

@Component({
    selector: 'edit-grid-demo',
    templateUrl: 'edit-grid-demo.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditGridDemoComponent implements OnInit {
    rowData;
    columns: ColDef[];
    gridOptions: GridOptions;
    editOptions: EditOptions = new EditOptions();
    containerType = ContainerType;

    constructor(private gridService: GridService) { }

    ngOnInit() {
        this.rowData = products;

        this.columns = [
            this.gridService.getMojColumn('ID'),
            this.gridService.getMojColumn('ProductName'),
            this.gridService.getEditColumn({ cssClass: 'orange2', disabled: true }),
            this.gridService.getDeleteColumn(),
        ];

        this.gridOptions = this.gridService.getMojGridOptions();

        this.editOptions.editComponentType = EditGridComponentDemoComponent;
        this.editOptions.editDialogTitle = 'עריכת מוצר';
        this.editOptions.editType = EditType.ReplaceGrid;
    }
}