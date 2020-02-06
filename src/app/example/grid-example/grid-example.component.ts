import { Component, OnInit, ViewContainerRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { products } from './products';
import { Product } from './product.model';
import { GridExampleService } from './grid-example.service';
import { EditPopupExampleComponent } from './edit-popup-example.component';
import { EditOptions, EditType } from '../../moj-ng/elements/grid/edit-component/edit-options.model';
import { GridService } from '../../moj-ng/elements/grid/service/moj-grid.service';
import { ColDef, GridOptions, ColGroupDef } from 'ag-grid-community';
import { EditServiceBase } from '../../moj-ng/elements/grid/service/edit-service.base';
import { FileType } from '../../moj-ng/elements/grid/custom-columns/moj-document-format-column/file-type.model';
import { StoreService } from '../common/services/store.service';
import { MojGridPanelComponent } from '../../moj-ng/elements/grid/moj-grid-panel.component';

@Component({
  selector: 'grid-example',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'grid-example.component.html'
})
export class GridExampleComponent implements OnInit {
  private gridApi1;

  rowData1;
  rowData2;
  columns1: ColDef[]; //ColGroupDef[];
  columns2: ColDef[];
  editOptions: EditOptions = new EditOptions();
  editService: EditServiceBase;
  gridOptions: GridOptions;

  actions = [
    { textKey: 'צפייה בבקשה', href: '/website-example/autocomplete', cssClass: 'request' },
    { textKey: 'צפייה בצו', href: '/website-example/recaptcha', cssClass: 'zzz' },
    { textKey: 'הגשת התנגדות', href: '/website-example/form', cssClass: 'refuse' }
  ];

  fileTypes: FileType[] = [
    { extension: 'pdf', iconClass: 'fas fa-trash-alt' },
    { extension: 'folder', iconClass: 'fas fa-folder redd' }
  ];

  @ViewChild('areaToReplace', { read: ViewContainerRef, static: true }) areaToReplace: ViewContainerRef;
  @ViewChild('grid1', { static: true}) grid: MojGridPanelComponent;

  constructor(
    private gridExampleService: GridExampleService,
    private http: HttpClient,
    private gridService: GridService,
    private store: StoreService
  ) {}

  ngOnInit() {
    this.rowData1 = products;
    this.rowData2 = products;

    this.columns1 = [
      this.gridService.getMojCheckBoxColumn("",{ colDef: { width: 1 } },"mycheck"),
      this.gridService.getMojColumn('ID', { colDef: { filter: 'agNumberColumnFilter' } }),
      this.gridService.getMojHebrewEnglishColumn('ProductName', { colDef: { hide: true } }),
      this.gridService.getMojColumn('UnitPrice', {
        colDef: { headerName: 'price', editable: true, onCellValueChanged: this.clickLink }
      }),
      this.gridService.getStateColumn({ isHideOnPrint: true }),
      this.gridService.getMojDateColumn('FirstOrderedOn'),
      this.gridService.getEditColumn({ headerName: 'edit', cssClass: 'orange2', colDef:{field:"editme"} }),
      this.gridService.getLinkColumn('ID', { clickLink: this.clickLink, title: 'aa', editGridOnClick: true }),
      this.gridService.getDeleteColumn({colDef:{field:"deleteme"}}),
      this.gridService.getDuplicateColumn()
    ];

    this.columns2 = [
      this.gridService.getMojDocumentFormatColumn('Format', {
        clickLink: this.clickLink,
        tooltip: 'Texts.aa',
        fileTypes: this.fileTypes
      }),
      this.gridService.getMojHebrewEnglishColumn('ProductName'),
      this.gridService.getLinkColumn('ID', { clickLink: this.clickLink, title: 'aa' }),
      this.gridService.getRadioBttonColumn('Discontinued'),
      this.gridService.getActionsPopupColumn({ items: this.actions }),
      this.gridService.getActionsPopupColumn({ items: this.getItems }),
      this.gridService.getMojIconColumn(null, {
        icon: { iconClass: 'far fa-smile orange2 font-22', tooltip: 'please smile!' }
      }),
      this.gridService.getMojIconColumn(null, {
        icon: { field: 'UnitPrice', iconClass: 'far fa-arrow-alt-circle-down orange1', clickLink: this.clickLink },
        iconWithText: true
      }),
      this.gridService.getMojIconColumn(null, {
        icon: this.getIcon,
        iconWithText: true,
        colDef: { headerName: 'dynamic' }
      })
    ];

    this.editOptions.editComponentType = EditPopupExampleComponent;
    this.editOptions.editDialogTitle = 'עריכת מוצר';
    this.editOptions.editType = EditType.Dialog;
    // this.editOptions.preventScrollInEditPopup = true;
    // this.editOptions.editType = EditType.ReplaceArea;
    // this.editOptions.hideAreaOnEdit = this.areaToReplace;
    this.gridOptions = this.gridService.getMojGridOptions();
    this.gridOptions.paginationPageSize = 5;

    //this.editOptions.editType = EditType.Dialog;

    //this.editOptions.deleteUrl = 'http://localhost:62060/api/Grid/Delete';
    //this.editOptions.saveUrl = 'http://localhost:62060/api/Grid/Post';
    this.editService = this.gridExampleService;
    this.editService.afterDuplicate = this.afterDuplicate.bind(this);
  }

  beforeAdd = () => {
    if (this.rowData1) {
      return false;
    }
  };

  afterDuplicate(data, id) {
    this.grid.edit(data, id);
  }

  getItems = rowData => {
    return [
      { textKey: rowData.ID.toString(), href: '/website-example/autocomplete', cssClass: 'request' },
      { textKey: rowData.ProductName.toString(), href: '/website-example/recaptcha', cssClass: 'zzz' },
      { textKey: rowData.Discontinued.toString(), href: '/website-example/form', cssClass: 'refuse' }
    ];
  };

  clickLink(product: Product) {
    alert('Go to task ' + product.ID);
  }

  onBtExport() {
    var params = {
      skipHeader: false,
      columnGroups: false,
      skipFooters: false,
      skipGroups: false,
      skipPinnedTop: false,
      skipPinnedBottom: false,
      allColumns: false,
      onlySelected: false,
      fileName: 'exportGridExample',
      sheetName: 'sheet1'
    };
    this.gridApi1.exportDataAsExcel();
  }

  onGridReady1(params) {
    this.gridApi1 = params.api;
    this.gridService.getGridState(this.grid, this.store.getGridExampleState());
  }

  printDataToConsole() {
    console.log(this.gridService.getRowData(this.gridApi1));
  }

  getIcon = params => {
    if (params.data.ProductName == "Chef Anton's Gumbo Mix") {
      return {
        iconClass: 'fas fa-trash-alt',
        tooltip: 'one',
        text: 'delete',
        clickLink: function() {
          params.data.Format = 'doc';
          params.api.refreshCells({ rowNodes: [params.node] });
        }
      };
    } else if (params.data.Format == 'doc') {
      return {
        iconClass: 'far fa-arrow-alt-circle-down',
        tooltip: 'Texts.aa',
        field: 'Format'
      };
    } else {
      return {
        iconClass: 'fas fa-pencil-alt',
        field: 'ProductName',
        clickLink: this.clickLink
      };
    }
  };

  setGridState() {
    this.store.setGridExampleState(this.gridService.setGridState(this.grid));
  }
}
