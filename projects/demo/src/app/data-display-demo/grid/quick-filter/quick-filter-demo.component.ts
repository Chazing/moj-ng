import { ContainerType } from './../../../../../../../src/app/moj-ng/elements/website/moj-container/moj-container.component';
import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { products } from "../products";
import { ColDef, GridOptions } from "ag-grid-community";
import { GridService } from "@moj/moj-ng";

@Component({
    selector: 'quick-filter-demo',
    templateUrl: 'quick-filter-demo.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuickFilterDemoComponent implements OnInit {
    rowData;
    columns: ColDef[];
    gridOptions: GridOptions;
    containerType = ContainerType;

    constructor(private gridService: GridService) { }

    ngOnInit() {
        this.rowData = products;

        this.columns = [
            this.gridService.getMojColumn('ID'),
            this.gridService.getMojColumn('ProductName')
        ];

        this.gridOptions = this.gridService.getMojGridOptions();
    }
}