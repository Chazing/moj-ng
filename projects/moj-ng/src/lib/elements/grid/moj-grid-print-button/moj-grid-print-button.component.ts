import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { GridApi } from 'ag-grid-community';
import { AgGridNg2 } from 'ag-grid-angular';
import { ButtonStyle } from '../../buttons/button-style';
import { Alignment } from '../../general/general.enum';

/**
Usage example
```html
<moj-grid-print-button [grid]="grid"></moj-grid-print-button>
<ag-grid-angular #grid class="ag-theme-balham" [gridOptions]=gridOptions [rowData]="rowData1" [columnDefs]="columns1">
</ag-grid-angular>
```
for hide some columns on print

```typescript
this.gridService.getStateColumn({isHideOnPrint:true})
```
 */
@Component({
  selector: 'moj-grid-print-button',
  templateUrl: './moj-grid-print-button.component.html',
  styleUrls: ['./moj-grid-print-button.component.css']
})
export class MojGridPrintButtonComponent {
  normalGridWidth;
  normalGridHeight;
  normalPageSize;
  gridQuerySelector;
  buttonStyle = ButtonStyle;
  alignment = Alignment;
  @Input() isAutoWidth:boolean=false;

  @Input()
  grid: AgGridNg2;
  
  constructor() { }

  onClick(event) {
    this.printGrid()
  }

  printGrid() {
    this.keepNormalGridSize();
    this.setPrinterFriendly();
    print();
    this.setNormal();
  }

  // keep grid's normal height and width to restore after printing
  private keepNormalGridSize() {
    this.normalGridWidth = (this.grid as any)._nativeElement.style.width;
    this.normalGridHeight = (this.grid as any)._nativeElement.style.height;
    this.normalPageSize = this.grid.api.paginationGetPageSize();
  }
  
  // adjust the grid to print size and set it to print mode
  private setPrinterFriendly() {
    this.grid.api.setDomLayout("print");
    (this.grid as any)._nativeElement.style.width = "";
    (this.grid as any)._nativeElement.style.height = "";
    (this.grid as any)._nativeElement.classList.add("printableArea");
    this.grid.api.paginationSetPageSize(5000);
    var columnToHideOnPrint = this.grid.columnApi.getAllColumns().filter(x => x.getColDef().refData.isHideOnPrint).map(x => x.getColId());
    this.grid.columnApi.setColumnsVisible(columnToHideOnPrint, false);
    this.grid.api.sizeColumnsToFit();
  }

  // restore the grid original size and set it back to normal mode
  private setNormal() {
    this.grid.api.setDomLayout("autoHeight");
    (this.grid as any)._nativeElement.style.width = this.normalGridWidth;
    (this.grid as any)._nativeElement.style.height = this.normalGridHeight;
    this.grid.api.paginationSetPageSize(this.normalPageSize);
    (this.grid as any)._nativeElement.classList.remove("printableArea");
    var columnToHideOnPrint = this.grid.columnApi.getAllColumns().filter(x => x.getColDef().refData.isHideOnPrint).map(x => x.getColId());
    this.grid.columnApi.setColumnsVisible(columnToHideOnPrint, true);
  }
}
