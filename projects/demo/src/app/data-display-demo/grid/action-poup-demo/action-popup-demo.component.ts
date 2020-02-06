import { Component, OnInit, ViewContainerRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GridService, MojGridPanelComponent, EditOptions } from 'src/app/moj-ng';
import { ColDef } from 'ag-grid-community/dist/lib/entities/colDef';
import { GridOptions } from 'ag-grid-community/dist/lib/entities/gridOptions';
import { Enums, ENUMS } from '../../../enums';

@Component({
  selector: 'action-popup-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'action-popup-demo.component.html'
})
export class ActionPopupDemoComponent implements OnInit {
  Enums:Enums=ENUMS;
  private gridApi1;
  rowData2;
  columns2: ColDef[];
  editOptions: EditOptions = new EditOptions();
  gridOptions: GridOptions;

  actions = [
    { textKey: 'בבקשה', href: '/componentsDemo/autocomplete-demo', cssClass: 'fa fa-check-circle' },
    { textKey: 'צפייה ', href: '/website-example/recaptcha', cssClass: 'zzz' },
  ];

  @ViewChild('areaToReplace', { read: ViewContainerRef, static: true }) areaToReplace: ViewContainerRef;
  @ViewChild('grid1', { static: true}) grid: MojGridPanelComponent;

  constructor(
    private http: HttpClient,
    private gridService: GridService,

  ) {}

  ngOnInit() {
    this.rowData2 =[
        {
            "ID": 1,
            "ProductName": "Chai",
            "SupplierID": 1,
            "CategoryID": 1,
            "QuantityPerUnit": "10 boxes x 20 bags",
            "UnitPrice": 0,
            "UnitsInStock": 39,
            "UnitsOnOrder": 0,
            "ReorderLevel": 10,
            "Discontinued": true,
            "Category": {
                "CategoryID": 1,
                "CategoryName": "Beverages",
                "Description": "Soft drinks, coffees, teas, beers, and ales"
            },
            "FirstOrderedOn": new Date(1996, 8, 20)
        },
        {
            "ID": 2,
            "ProductName": "Chang",
            "SupplierID": 1,
            "CategoryID": 1,
            "QuantityPerUnit": "24 - 12 oz bottles",
            "UnitPrice": -3,
            "UnitsInStock": 17,
            "UnitsOnOrder": 40,
            "ReorderLevel": 25,
            "Discontinued": false,
            "Category": {
                "CategoryID": 1,
                "CategoryName": "Beverages",
                "Description": "Soft drinks, coffees, teas, beers, and ales"
            },
            "FirstOrderedOn": new Date(1996, 7, 12)
        },
        {
            "ID": 3,
            "ProductName": "Aniseed Syrup",
            "SupplierID": 1,
            "CategoryID": 2,
            "QuantityPerUnit": "12 - 550 ml bottles",
            "UnitPrice": 10,
            "UnitsInStock": 13,
            "UnitsOnOrder": 70,
            "ReorderLevel": 25,
            "Discontinued": true,
            "Category": {
                "CategoryID": 2,
                "CategoryName": "Condiments",
                "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
            },
            "FirstOrderedOn": new Date(1996, 8, 26)
        }]
    this.columns2 = [
      this.gridService.getMojColumn('ProductName'),
      this.gridService.getActionsPopupColumn({ items: this.actions }),
    ];
    this.gridOptions = this.gridService.getMojGridOptions();
    this.gridOptions.paginationPageSize = 5;
  }

  getItems = rowData => {
    return [
      { textKey: rowData.ID.toString(), href: '/website-example/autocomplete', cssClass: 'request' },
      { textKey: rowData.ProductName.toString(), href: '/website-example/recaptcha', cssClass: 'zzz' },
      { textKey: rowData.Discontinued.toString(), href: '/website-example/form', cssClass: 'refuse' }
    ];
  };

  

  onGridReady1(params) {
    this.gridApi1 = params.api;
    
  }
  
}
