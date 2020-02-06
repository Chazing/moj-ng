import { MojDataViewType } from './../../../../../../../src/app/moj-ng/elements/grid/models/dataview-type.enum';
import { ENUMS } from './../../../enums';
import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { products } from "../products";
import { ColDef, GridOptions, GridApi } from "ag-grid-community";
import { GridService } from "@moj/moj-ng";

@Component({
    selector: 'ag-grid-demo',
    templateUrl: 'ag-grid-demo.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AGGridDemoComponent implements OnInit {
    rowData;
    columns: ColDef[];
    gridOptions: GridOptions;
    gridApi: GridApi;
    enums = ENUMS;
    dataViewType = MojDataViewType;

    constructor(private gridService: GridService) { }

    ngOnInit() {
        this.rowData = products;
        this.columns = [
          this.gridService.getMojColumn('ID'),
          this.gridService.getMojColumn('ProductName')
        ];
        this.gridOptions = this.gridService.getMojGridOptions();
    }

    onGridReady(params) {
        this.gridApi = params.api;
        let unitPriceColumn = this.gridService.getMojColumn('UnitPrice');
        this.columns.push(unitPriceColumn);
        this.gridApi.setColumnDefs(this.columns);
    }
    printDataToConsole() {
        console.log(this.gridService.getRowData(this.gridApi));
    }
}