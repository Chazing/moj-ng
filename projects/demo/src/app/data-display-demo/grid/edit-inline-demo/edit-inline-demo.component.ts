import { ENUMS } from './../../../enums';
import { Component, OnInit } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
import { EditOptions, GridService, EditType, FilterType, MojDataViewType } from '@moj/moj-ng';
import { products } from '../products';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-inline-demo',
  templateUrl: './edit-inline-demo.component.html',
  styleUrls: ['./edit-inline-demo.component.css']
})
export class EditInlineDemoComponent implements OnInit {
  rowData;
  columns: ColDef[];
  gridOptions: GridOptions;
  editOptions: EditOptions = new EditOptions();
  dataViewType=MojDataViewType;
  enums = ENUMS;

  categories: any[] = [
    { "CategoryID": 1, "CategoryName": "Beverages", "Description": "Soft drinks, coffees, teas, beers, and ales" },
    { "CategoryID": 2, "CategoryName": "Condiments", "Description": "Sweet and savory sauces, relishes, spreads, and seasonings" },
    { "CategoryID": 3, "CategoryName": "Confections", "Description": "Desserts, candies, and sweet breads" },
    { "CategoryID": 4, "CategoryName": "Dairy Products", "Description": "Cheeses" },
    { "CategoryID": 5, "CategoryName": "Grains/Cereals", "Description": "Breads, crackers, pasta, and cereal" },
    { "CategoryID": 6, "CategoryName": "Meat/Poultry", "Description": "Prepared meats" },
    { "CategoryID": 7, "CategoryName": "Produce", "Description": "Dried fruit and bean curd" },
    { "CategoryID": 8, "CategoryName": "Seafood", "Description": "Seaweed and fish" }
  ];

  constructor(private gridService: GridService) {
  }

  ngOnInit() {
    this.rowData = products;
    this.columns = [
      this.gridService.getMojTextBoxColumn("ID", { validators: [Validators.required] }),
      this.gridService.getMojDropdownColumn("Category", { validators: [Validators.required], items: this.categories, fieldName: 'CategoryName' }),
      this.gridService.getMojDatePickerColumn("FirstOrderedOn", { validators: [Validators.required] }, { colDef: { headerName: 'תאריך הזמנה' } }),
      this.gridService.getMojMultiSelectColumn("Categories", { items: this.categories, fieldName: 'CategoryName' }),
      this.gridService.getMojAutoCompleteColumn("Category", { validators: [Validators.required], items: this.categories, fieldName: 'CategoryName', filterType: FilterType.includes }),
    ];

    this.gridOptions = this.gridService.getMojGridOptions();
    this.editOptions.editType = EditType.Inline;
  }
}
