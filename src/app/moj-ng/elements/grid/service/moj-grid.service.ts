import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ColDef, GridOptions, PostProcessPopupParams, GridApi } from 'ag-grid-community';
import {
  MojGridDeleteButtonComponent,
  MojGridEditButtonComponent,
  MojGridDuplicateButtonComponent
} from '../buttons/moj-grid-buttons';
import {
  MojLinkColumnComponent,
  MojVColumnComponent,
  MojStateColumnComponent,
  MojIconColumnComponent,
  MojGridActionsPopupButtonComponent
} from '../custom-columns/moj-grid-columns';
import { DatePipe } from '@angular/common';
import { MojRadiobuttonColumnComponent } from '../custom-columns/moj-radiobutton-column/moj-radiobutton-column.component';
import { MojCheckBoxColumnComponent } from '../custom-columns/moj-checkbox-column/moj-checkbox-column.component';
import { MojDocumentFormatColumnComponent } from '../custom-columns/moj-document-format-column/moj-document-format-column.component';
import { ObjectState } from '../../general/general.enum';
import { MojUtilsService } from '../../../shared/utils';
import {
  MojDatePickerColumnComponent,
  MojTextboxColumnComponent,
  MojTextAreaColumnComponent,
  MojDropdownColumnComponent,
  MojMultiSelectColumnComponent,
  MojAutoCompleteColumnComponent
} from '../edit-inline/edit-inline-columns';
import { EditColumnOptions } from '../edit-inline/edit-inline-options.model';
import { ValueSetterParams, ValueGetterParams } from 'ag-grid-community/dist/lib/entities/colDef';
import {
  MojDeleteColDef,
  MojEditColDef,
  MojDuplicateColDef,
  MojActionsPopupColDef,
  MojColDef,
  MojCheckBoxColDef,
  MojCurrencyColDef,
  MojLinkColDef,
  MojIconColDef,
  MojDateColDef,
  MojVColDef,
  MojRadioButtonColDef,
  MojStateColDef,
  MojDocumentFormatColDef,
  setDefaultsToColParams,
  MojHebrewEnglishColDef
} from '../custom-columns/moj-col-defs.model';
import { MojGridPanelComponent } from '../moj-grid-panel';
import { GridState } from '../models/grid-state.model';

@Injectable()
export class GridService {
  constructor(private translate: TranslateService, private utils: MojUtilsService) {}

  getMojGridOptions(isMultiSelect: boolean = false) {
    let mojGridOptions: GridOptions = {};
    mojGridOptions.rowHeight = 33;
    mojGridOptions.enableRtl = true;
    mojGridOptions.enableSorting = true;
    mojGridOptions.pagination = true;
    mojGridOptions.paginationPageSize = 10;
    mojGridOptions.suppressPaginationPanel = true; //we have moj-paging instead
    mojGridOptions.enableColResize = true;
    mojGridOptions.domLayout = 'autoHeight';
    mojGridOptions.rowSelection = 'single';
    mojGridOptions.onGridReady = function(params) {
      params.api.sizeColumnsToFit();
      var selectionColumn = params.columnApi.getAllColumns().filter(x => x.getColDef().checkboxSelection == true);
      if (selectionColumn.length > 0) {
        params.api.forEachNode(node => {
          if (node.data[selectionColumn[0].getColDef().field] == true) {
            params.api.selectNode(node, true);
            console.log(node);
          }
        });
      }
    };
    let tanslateService = this.translate;
    mojGridOptions.localeTextFunc = function(key, defaultValue) {
      var gridKey = 'MojTexts.grid.' + key;
      var value = tanslateService.instant(gridKey);
      return value === gridKey ? defaultValue : value;
    };

    if (isMultiSelect) {
      mojGridOptions.rowSelection = 'multiple';
      mojGridOptions.suppressRowClickSelection = true;
      mojGridOptions.onRowSelected = function(params) {
        //Update selection field to true on selection
        var cols = params.columnApi.getAllColumns();
        if (cols) {
          var field = cols.filter(x => x.getColDef().checkboxSelection == true)[0]
            .getColDef().field;
          var isSelected = (params.node as any).selected;
          if (params.data[field] != isSelected) {
            params.data[field] = isSelected;
            params.api.updateRowData({ update: [params.data] });
          }
        }
      };
    }

    mojGridOptions.rowClassRules = {
      'moj-row-deleted': function(params) {
        return params.data && params.data.state && params.data.state === ObjectState.Deleted;
      }
    };

    mojGridOptions.postProcessPopup = this.postProcessPopup.bind(this);
    mojGridOptions.singleClickEdit = true;

    mojGridOptions.icons = this.getIcons();

    mojGridOptions.defaultColDef={suppressMenu:true, menuTabs:['filterMenuTab','columnsMenuTab']};

    return mojGridOptions;
  }

  postProcessPopup(params: PostProcessPopupParams) {
    if (params.type === 'popupCellEditor') {
      params.ePopup.style.width = params.eventSource.style.width;
      this.focusEditor(params);
    }
  }

  focusEditor(params: PostProcessPopupParams) {
    if (params.ePopup.querySelector('input')) {
      params.ePopup.querySelector('input').focus();
    }
    if (params.ePopup.querySelector('textarea')) {
      params.ePopup.querySelector('textarea').focus();
    }
  }

  getIcons() {
    return {
      sortAscending: '<i class="fa fa-long-arrow-alt-down"/>',
      sortDescending: '<i class="fa fa-long-arrow-alt-up"/>'
    };
  }

  getRowData(gridApi: GridApi) {
    if (gridApi) {
      let editedRowData = (<any>gridApi.getModel()).rootNode.allLeafChildren;
      if (editedRowData) {
        editedRowData = editedRowData.map(item => {
          return item.data;
        });
        return editedRowData;
      }
    }
  }

  getDeleteColumn(mojDeleteColDef: MojDeleteColDef = {}): ColDef {
    mojDeleteColDef.isHideOnPrint = true;
    let colDef: ColDef = this.setDefaultsToColDef({
      headerName: mojDeleteColDef.headerName,
      mojColDef: mojDeleteColDef,
      isAction: true
    });
    colDef.cellClass = 'td-action-grid ' + mojDeleteColDef.cssClass;
    colDef.suppressResize = true;
    colDef.suppressSorting = true;
    colDef.width = 30;

    colDef.cellRendererFramework = MojGridDeleteButtonComponent;
    colDef.cellRendererParams = {
      textKey: mojDeleteColDef.toolTipTextKey,
      confirmDeleteText: mojDeleteColDef.confirmDeleteText || 'MojTexts.confirmDelete',
      cssClass: mojDeleteColDef.cssClass //pass for function per row
    };
    return colDef;
  }

  getEditColumn(mojEditColDef: MojEditColDef = {}): ColDef {
    mojEditColDef.isHideOnPrint = true;
    let colDef: ColDef = this.setDefaultsToColDef({
      headerName: mojEditColDef.headerName,
      mojColDef: mojEditColDef,
      isAction: true
    });
    colDef.cellClass = 'td-action-grid ' + mojEditColDef.cssClass;
    colDef.suppressResize = true;
    colDef.suppressSorting = true;
    colDef.width = 30;
    colDef.cellRendererFramework = MojGridEditButtonComponent;
    colDef.cellRendererParams = {
      textKey: mojEditColDef.toolTipTextKey,
      disabled: mojEditColDef.disabled,
      cssClass: mojEditColDef.cssClass //pass for function per row
    };
    return colDef;
  }

  getDuplicateColumn(mojDuplicateColDef: MojDuplicateColDef = {}): ColDef {
    let colDef: ColDef = this.setDefaultsToColDef({
      headerName: mojDuplicateColDef.headerName,
      mojColDef: mojDuplicateColDef,
      isAction: true
    });
    colDef.cellClass = 'td-action-grid ' + mojDuplicateColDef.cssClass;
    colDef.suppressResize = true;
    colDef.suppressSorting = true;
    colDef.width = 30;

    colDef.cellRendererFramework = MojGridDuplicateButtonComponent;
    colDef.cellRendererParams = {
      textKey: mojDuplicateColDef.toolTipTextKey,
      setDuplicatedData: mojDuplicateColDef.setDuplicatedData
    };
    return colDef;
  }

  getActionsPopupColumn(mojActionsPopupColDef: MojActionsPopupColDef = {}): ColDef {
    let colDef: ColDef = this.setDefaultsToColDef({
      headerName: mojActionsPopupColDef.headerName,
      mojColDef: mojActionsPopupColDef,
      isAction: true
    });
    colDef.cellClass = 'td-action-grid td-actions-popup ' + mojActionsPopupColDef.cssClass;
    colDef.suppressResize = true;
    colDef.width = 30;
    colDef.editable = true;
    colDef.cellRenderer = function(params) {
      var value = params.value || params.value == 0 ? params.value : '';
      return (
        "<div class='btn-actions-toggle btn-grid fas fa-pencil-alt' title='" +
        mojActionsPopupColDef.toolTipTextKey +
        "' style='position: relative;'></div>"
      );
    };
    colDef.cellEditorFramework = MojGridActionsPopupButtonComponent;
    colDef.cellEditorParams = {
      items: mojActionsPopupColDef.items
    };
    return colDef;
  }

  getMojColumn(field: string, mojColDef: MojColDef = {}): ColDef {
    let colDef: ColDef = this.setDefaultsToColDef({
      field: field,
      mojColDef: mojColDef
    });
    var utils = this.utils;
    colDef.cellRenderer = function(params) {
      var value = params.value || params.value == 0 ? params.value : '';
      return '<div class="moj-ellipsis" title="' + utils.htmlEscape(value) + '">' + value + '</div>';
    };
    return colDef;
  }

  getMojCheckBoxColumn(field: string, mojCheckBoxColDef: MojCheckBoxColDef = {}): ColDef {
    let colDef: ColDef = this.setDefaultsToColDef({
      field: field,
      mojColDef: mojCheckBoxColDef,
      isAction: true
    });
    colDef.headerCheckboxSelectionFilteredOnly = true;
    colDef.headerCheckboxSelection = true;
    colDef.checkboxSelection = true;
    colDef.width = 30;
    colDef.cellRenderer = function(params) {
      return '<div></div>';
    };
    return colDef;
  }

  getMojCurrencyColumn(field: string, mojCurrencyColDef: MojCurrencyColDef = {}): ColDef {
    let colDef: ColDef = this.setDefaultsToColDef({
      field: field,
      mojColDef: mojCurrencyColDef
    });
    let currencyString = mojCurrencyColDef.currencyString || '₪';

    var formatNumber = function(number) {
      // this puts commas into the number eg 1000 goes to 1,000,
      return Math.floor(number)
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    };

    var currencyFormatter = function(params) {
      return formatNumber(params.value) + ' ' + currencyString;
    };

    colDef.valueFormatter = currencyFormatter;

    colDef.cellRenderer = function(params) {
      return (
        '<div class="moj-ellipsis" title="' +
        params.value +
        ' ' +
        currencyString +
        '">' +
        params.value +
        ' ' +
        currencyString +
        '</div>'
      );
    };
    return colDef;
  }

  getLinkColumn(field: string, mojLinkColDef: MojLinkColDef = {}): ColDef {
    let colDef: ColDef = this.setDefaultsToColDef({
      field: field,
      mojColDef: mojLinkColDef,
      isAction: true
    });
    colDef.cellRendererFramework = MojLinkColumnComponent;
    colDef.cellRendererParams = {
      clickLink: mojLinkColDef.clickLink,
      title: mojLinkColDef.title,
      editGridOnClick: mojLinkColDef.editGridOnClick
    };
    return colDef;
  }

  getMojIconColumn(field: string, mojIconColDef: MojIconColDef): ColDef {
    let colDef: ColDef = this.setDefaultsToColDef({
      mojColDef: mojIconColDef,
      field: field,
      isAction: true,
      noDefaultHeader: true
    });

    // if (!colDef.minWidth && !colDef.width) {
    //   colDef.minWidth = 46;
    // }

    if (!mojIconColDef.iconWithText && !colDef.width) {
      colDef.width = 46;
    }

    // if (!mojIconColDef.iconWithText && !colDef.maxWidth && !colDef.width) {
    //   colDef.maxWidth = 46;
    // }

    colDef.cellRendererFramework = MojIconColumnComponent;
    colDef.cellRendererParams = {
      icon: mojIconColDef.icon,
      iconWithText: mojIconColDef.iconWithText,
      isCenter: mojIconColDef.isCenter
    };

    if (mojIconColDef.isCenter) {
      colDef.headerClass = 'center-header';
    }
    return colDef;
  }

  getMojDateColumn(field: string, mojDateColDef: MojDateColDef = {}): ColDef {
    let colDef: ColDef = this.setDefaultsToColDef({
      field: field,
      mojColDef: mojDateColDef
    });
    colDef.type = 'dateColumn';
    colDef.filter = 'agDateColumnFilter';
    var format = mojDateColDef.format || 'dd/MM/yyyy';
    var compareDate = function(filterLocalDateAtMidnight, cellValue) {
      var cellDate = new Date(cellValue);
      if (cellDate < filterLocalDateAtMidnight) {
        return -1;
      } else if (cellDate > filterLocalDateAtMidnight) {
        return 1;
      } else {
        return 0;
      }
    };
    colDef.filterParams = { comparator: compareDate };
    var simpleDateFormatter = function(date) {
      return date ? new DatePipe('en-US').transform(date, format) : '';
    };
    // we want filter to work on string, not on all date object
    colDef.filterValueGetter = function(params: ValueGetterParams) {
      let date = params.data[this.colDef.field];
      return simpleDateFormatter(date);
    }.bind({ colDef: colDef });
    colDef.cellRenderer = function(params) {
      var formatted = simpleDateFormatter(params.value);
      return '<div class="moj-ellipsis" title="' + formatted + '">' + formatted + '</div>';
    };
    return colDef;
  }

  getVColumn(field: string, mojVColDef: MojVColDef = {}): ColDef {
    let colDef: ColDef = this.setDefaultsToColDef({
      field: field,
      mojColDef: mojVColDef
    });
    colDef.cellRendererFramework = MojVColumnComponent;
    colDef.headerClass = 'center-header';
    return colDef;
  }

  getRadioBttonColumn(field: string, mojRadioButtonColDef: MojRadioButtonColDef = {}): ColDef {
    let colDef: ColDef = this.setDefaultsToColDef({
      field: field,
      mojColDef: mojRadioButtonColDef
    });
    colDef.cellRendererFramework = MojRadiobuttonColumnComponent;
    return colDef;
  }

  getMojCheckBoxSelectColumn(field: string, mojCheckBoxColDef: MojCheckBoxColDef = {}): ColDef {
    let colDef: ColDef = this.setDefaultsToColDef({
      field: field,
      mojColDef: mojCheckBoxColDef,
      isAction: true
    });
    colDef.headerName = '';
    colDef.cellRendererFramework = MojCheckBoxColumnComponent;
    return colDef;
  }

  getStateColumn(mojStateColDef: MojStateColDef = {}): ColDef {
    let colDef: ColDef = this.setDefaultsToColDef({ mojColDef: mojStateColDef });
    colDef.suppressMenu = true;
    colDef.cellRendererFramework = MojStateColumnComponent;
    colDef.width = 35;
    return colDef;
  }

  getMojDocumentFormatColumn(field: string, mojDocumentFormatColDef: MojDocumentFormatColDef = {}): ColDef {
    let colDef: ColDef = this.setDefaultsToColDef({
      mojColDef: mojDocumentFormatColDef,
      isAction: !!mojDocumentFormatColDef.clickLink,
      noDefaultHeader: true,
      field: field
    });
    colDef.width = 60;
    colDef.minWidth = 30;
    colDef.suppressResize = true;
    colDef.suppressSorting = true;
    colDef.cellRendererFramework = MojDocumentFormatColumnComponent;
    colDef.cellRendererParams = {
      clickLink: mojDocumentFormatColDef.clickLink,
      tooltip: mojDocumentFormatColDef.tooltip,
      fileTypes: mojDocumentFormatColDef.fileTypes
    };
    return colDef;
  }

  getMojHebrewEnglishColumn(field: string, mojHebrewEnglishColDef: MojHebrewEnglishColDef = {}): ColDef {
    let colDef: ColDef = this.setDefaultsToColDef({
      field: field,
      mojColDef: mojHebrewEnglishColDef
    });
    var hebReg = new RegExp(/[\u0590-\u05FF]/);
    var anotherHebReg = new RegExp(/[\u0600-\u06FF\u0750-\u077F]/);
    var utils = this.utils;
    colDef.cellRenderer = function(params) {
      var value = params.value || params.value == 0 ? params.value : '';
      var directionClass: string;
      if (hebReg.test(value) || anotherHebReg.test(value)) {
        directionClass = 'right-to-left';
      } else {
        directionClass = 'left-to-right';
      }
      return `<div class="moj-ellipsis ${directionClass}" title="'${utils.htmlEscape(value)}'">${value}</div>`;
    };
    return colDef;
  }

  private setDefaultsToColDef(setDefaultsToColParams: setDefaultsToColParams = {}): ColDef {
    let colDef: ColDef = setDefaultsToColParams.mojColDef.colDef;
    if (!colDef) {
      colDef = {};
    }
    if (setDefaultsToColParams.field) {
      colDef.field = setDefaultsToColParams.field;
    }
    let headerName = colDef.headerName || setDefaultsToColParams.headerName || colDef.field;
    if (headerName) {
      let res = this.translate.instant('Texts.' + headerName);
      colDef.headerName = res.indexOf('Texts.') == 0 ? res.substr(6) : res;
    } else if (setDefaultsToColParams.noDefaultHeader) {
      colDef.headerName = '';
    }
    colDef.refData = {};
    if (setDefaultsToColParams.isAction) colDef.refData.isAction = 'true';
    if (colDef.hide) {
      //for prevent hidden column show after gridsizechange
      colDef.refData.isHiddenColumn = 'true';
    }
    if (setDefaultsToColParams.mojColDef.isHideOnPrint) {
      //for hide column on print
      colDef.refData.isHideOnPrint = 'true';
    }
    return colDef;
  }

  setEditableColumn(colDef: ColDef, editComponentType, editColumnOptions: EditColumnOptions) {
    colDef.editable = true;
    colDef.cellEditorFramework = editComponentType;
    colDef.cellEditorParams = editColumnOptions;

    //after change set state edited
    colDef.valueSetter = function(params: ValueSetterParams) {
      if (params.oldValue !== params.newValue) {
        params.node.data[(<any>params.column).colDef.field] = params.newValue; //set new value
        if (params.data.state != ObjectState.Added) {
          params.data.state = ObjectState.Edited;
        }
        // get grid to refresh the cell
        return true;
      } else {
        // no change, so no refresh needed
        return false;
      }
    };
    return colDef;
  }

  getMojDatePickerColumn(
    field: string,
    editColumnOptions: EditColumnOptions = null,
    mojDateColDef: MojDateColDef = {}
  ): ColDef {
    let colDef: ColDef = this.getMojDateColumn(field, mojDateColDef);
    colDef = this.setEditableColumn(colDef, MojDatePickerColumnComponent, editColumnOptions);
    return colDef;
  }

  getMojTextBoxColumn(field: string, editColumnOptions: EditColumnOptions = null, mojColDef: MojColDef = {}): ColDef {
    let colDef: ColDef = this.getMojColumn(field, mojColDef);
    colDef = this.setEditableColumn(colDef, MojTextboxColumnComponent, editColumnOptions);
    return colDef;
  }

  getMojTextAreaColumn(field: string, editColumnOptions: EditColumnOptions = null, mojColDef: MojColDef = {}): ColDef {
    let colDef: ColDef = this.getMojColumn(field, mojColDef);
    colDef = this.setEditableColumn(colDef, MojTextAreaColumnComponent, editColumnOptions);
    return colDef;
  }

  getMojDropdownColumn(field: string, editColumnOptions: EditColumnOptions = null, mojColDef: MojColDef = {}): ColDef {
    let colDef: ColDef = this.setDefaultsToColDef({
      field: field,
      mojColDef: mojColDef
    });
    //sort by fieldName
    colDef.comparator = function(valueA, valueB) {
      return ('' + valueA[this.fieldName]).localeCompare(valueB[this.fieldName]);
    }.bind({ fieldName: editColumnOptions.fieldName });

    colDef.cellRenderer = function(params) {
      let value: string = '';
      if (params.value) {
        let fieldName = params.column.colDef.cellEditorParams.fieldName;
        if (fieldName && params.value.hasOwnProperty(fieldName)) {
          value = params.value[fieldName];
        } else {
          value = params.value;
        }
      }
      return '<div class="moj-ellipsis" title="' + value + '">' + value + '</div>';
    };

    colDef = this.setEditableColumn(colDef, MojDropdownColumnComponent, editColumnOptions);

    return colDef;
  }

  getMojMultiSelectColumn(
    field: string,
    editColumnOptions: EditColumnOptions = null,
    mojColDef: MojColDef = {}
  ): ColDef {
    let colDef: ColDef = this.setDefaultsToColDef({
      field: field,
      mojColDef: mojColDef
    });
    //sort by fieldName
    colDef.comparator = function(valueA, valueB) {
      let a = valueA && valueA[0] && this.fieldName ? valueA[0][this.fieldName] : '';
      let b = valueB && valueB[0] && this.fieldName ? valueB[0][this.fieldName] : '';
      return ('' + a).localeCompare(b);
    }.bind({ fieldName: editColumnOptions.fieldName });

    colDef.cellRenderer = function(params) {
      let value: string = '';
      if (params.value && params.column.colDef.cellEditorParams.fieldName) {
        value = this.utils.getStringFromObjectArray(params.column.colDef.cellEditorParams.fieldName, params.value);
      }
      return '<div class="moj-ellipsis" title="' + value + '">' + value + '</div>';
    }.bind(this);

    colDef = this.setEditableColumn(colDef, MojMultiSelectColumnComponent, editColumnOptions);

    return colDef;
  }

  getMojAutoCompleteColumn(
    field: string,
    editColumnOptions: EditColumnOptions = null,
    MojColDef: MojColDef = {}
  ): ColDef {
    let colDef: ColDef = this.setDefaultsToColDef({
      field: field,
      mojColDef: MojColDef
    });
    //sort by fieldName
    colDef.comparator = function(valueA, valueB) {
      let a;
      let b;
      if (this.multiple) {
        a = valueA && valueA[0] && this.fieldName ? valueA[0][this.fieldName] : '';
        b = valueB && valueB[0] && this.fieldName ? valueB[0][this.fieldName] : '';
      } else {
        a = valueA[this.fieldName];
        b = valueB[this.fieldName];
      }

      return ('' + a).localeCompare(b);
    }.bind({ fieldName: editColumnOptions.fieldName, multiple: editColumnOptions.multiple });

    colDef.cellRenderer = function(params) {
      let value: string = '';
      if (params.value) {
        let fieldName = params.column.colDef.cellEditorParams.fieldName;
        if (params.column.colDef.cellEditorParams.multiple) {
          value = this.utils.getStringFromObjectArray(fieldName, params.value);
        } else {
          if (fieldName && params.value.hasOwnProperty(fieldName)) {
            //array of objects
            value = params.value[params.column.colDef.cellEditorParams.fieldName];
          } else {
            //array of string
            value = params.value;
          }
        }
      }
      return '<div class="moj-ellipsis" title="' + value + '">' + value + '</div>';
    }.bind(this);

    colDef = this.setEditableColumn(colDef, MojAutoCompleteColumnComponent, editColumnOptions);

    return colDef;
  }

  setGridState(grid:MojGridPanelComponent):GridState{
    let gridState:GridState = {};
    if(grid && grid.inEdit && grid.editComponent){
      gridState.editedItem = grid.editComponent.editedItem;
      gridState.nodeId = grid.editedNodeId;
      gridState.isNew = grid.isNew;
    }
    return gridState;
  }

  getGridState(grid, gridState:GridState){
      if(grid && gridState && gridState.editedItem){
        if(gridState.isNew){
          grid.add();
          if(grid.editComponent){
            grid.editComponent.editedItem = gridState.editedItem;
          }
        }
        else{
          grid.edit(gridState.editedItem, gridState.nodeId)
        }
      }
  }
}
