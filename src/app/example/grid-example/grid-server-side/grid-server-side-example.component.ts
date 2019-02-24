import { Component ,ChangeDetectionStrategy } from "@angular/core";
import { GridOptions, ColDef, GridApi } from "ag-grid-community";
import { products } from "../products";
import { GridService } from "../../../moj-ng/elements/grid/service/moj-grid.service";
import { ServerSideDatasource } from "./server-side-data-source.model";
import { EditOptions } from "../../../moj-ng/elements/grid/edit-component/edit-options.model";
import { EditPopupExampleComponent } from "../edit-popup-example.component";


@Component({
    selector:'grid-server-side-example',
    templateUrl:'grid-server-side-example.component.html',
    changeDetection:  ChangeDetectionStrategy.OnPush
})
export class GridServerSideExample {
    rowData:any;
    gridOptions:GridOptions;
    columns: ColDef[];
    gridApi:GridApi;
    editOptions: EditOptions = new EditOptions();

    constructor(private gridService: GridService) {
    }

    ngOnInit(){
        this.rowData = products;
        this.gridOptions = this.gridService.getMojGridOptions();
        this.columns = [
            this.gridService.getMojColumn("ID"),
            this.gridService.getMojColumn("ProductName"),
            this.gridService.getMojColumn("UnitPrice"),
            this.gridService.getStateColumn(),
            this.gridService.getMojDateColumn("FirstOrderedOn"),
            this.gridService.getEditColumn(),
            this.gridService.getDeleteColumn()
        ];
        this.editOptions.editComponentType = EditPopupExampleComponent;
        this.editOptions.rowModelType = "serverSide"
    }

    onGridReady(params) {
        this.gridApi = params.api;

        let datasource = new ServerSideDatasource();
        params.api.setServerSideDatasource(datasource);
      }
}