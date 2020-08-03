import { Component, OnInit } from '@angular/core';
import { ColDef, GridOptions, GridApi } from 'ag-grid-community';
import { ENUMS } from '../../../enums';
import { MojDataViewType, GridService } from '@moj/moj-ng';
import { products } from '../products';

@Component({
  selector: 'app-moj-columns-demo',
  templateUrl: './moj-columns-demo.component.html',
  styleUrls: ['./moj-columns-demo.component.css']
})
export class MojColumnsDemoComponent implements OnInit {
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
      this.gridService.getMojCheckBoxColumn("Discontinued"),
      this.gridService.getMojColumn('ProductName'),
      this.gridService.getMojDateColumn("FirstOrderedOn"),
      this.gridService.getVColumn("Discontinued"),
      this.gridService.getMojIconColumn("Discontinued", { icon: { iconClass: 'far fa-smile orange2 font-22' } })
    ];
    this.gridOptions = this.gridService.getMojGridOptions(true);
  }

  onGridReady(params) {
    this.gridApi = params.api;
  }
}
