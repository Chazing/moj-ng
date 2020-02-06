"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@ngx-translate/core");
var ag_grid_community_1 = require("ag-grid-community");
var moj_grid_buttons_1 = require("../buttons/moj-grid-buttons");
var moj_grid_columns_1 = require("../custom-columns/moj-grid-columns");
var common_1 = require("@angular/common");
var moj_radiobutton_column_component_1 = require("../custom-columns/moj-radiobutton-column/moj-radiobutton-column.component");
var moj_checkbox_column_component_1 = require("../custom-columns/moj-checkbox-column/moj-checkbox-column.component");
var moj_document_format_column_component_1 = require("../custom-columns/moj-document-format-column/moj-document-format-column.component");
var general_enum_1 = require("../../general/general.enum");
var utils_1 = require("../../../shared/utils");
var edit_inline_columns_1 = require("../edit-inline/edit-inline-columns");
var language_1 = require("../../website/language");
var permission_service_1 = require("../../../permissions/permission.service");
var GridService = /** @class */ (function () {
    function GridService(translate, utils, permissionService) {
        this.translate = translate;
        this.utils = utils;
        this.permissionService = permissionService;
    }
    GridService.prototype.getMojGridOptions = function (isMultiSelect) {
        if (isMultiSelect === void 0) { isMultiSelect = false; }
        var mojGridOptions = {};
        mojGridOptions.rowHeight = 33;
        mojGridOptions.enableRtl = this.utils.currentLang.dir === language_1.MojDirection.rtl ? true : false;
        mojGridOptions.enableSorting = true;
        mojGridOptions.pagination = true;
        mojGridOptions.paginationPageSize = 10;
        mojGridOptions.suppressPaginationPanel = true; //we have moj-paging instead
        mojGridOptions.enableColResize = true;
        mojGridOptions.domLayout = 'autoHeight';
        mojGridOptions.rowSelection = 'single';
        mojGridOptions.onGridReady = function (params) {
            params.api.sizeColumnsToFit();
            this.setRowSelectionByData(params);
        }.bind(this);
        mojGridOptions.onRowDataChanged = function (params) {
            this.setRowSelectionByData(params);
        }.bind(this);
        var tanslateService = this.translate;
        mojGridOptions.localeTextFunc = function (key, defaultValue) {
            var gridKey = 'MojTexts.grid.' + key;
            var value = tanslateService.instant(gridKey);
            return value === gridKey ? defaultValue : value;
        };
        if (isMultiSelect) {
            mojGridOptions.rowSelection = 'multiple';
            mojGridOptions.suppressRowClickSelection = true;
            mojGridOptions.onRowSelected = function (params) {
                //Update selection field to true on selection
                var cols = params.columnApi.getAllColumns();
                if (cols) {
                    var field = cols.filter(function (x) { return x.getColDef().checkboxSelection == true; })[0]
                        .getColDef().field;
                    var isSelected = params.node.selected;
                    if (params.data[field] != isSelected) {
                        params.data[field] = isSelected;
                        params.api.updateRowData({ update: [params.data] });
                    }
                }
            };
        }
        mojGridOptions.rowClassRules = {
            'moj-row-deleted': function (params) {
                return params.data && params.data.state && params.data.state === general_enum_1.ObjectState.Deleted;
            },
            'moj-row-clickable': function (params) {
                return params.api.gridOptionsWrapper.gridOptions.onRowClicked; //only if exists onRowClicked
            }
        };
        mojGridOptions.postProcessPopup = this.postProcessPopup.bind(this);
        mojGridOptions.singleClickEdit = true;
        mojGridOptions.icons = this.getIcons();
        mojGridOptions.defaultColDef = { suppressMenu: true, menuTabs: ['filterMenuTab', 'columnsMenuTab'] };
        return mojGridOptions;
    };
    GridService.prototype.setRowSelectionByData = function (params) {
        var cols = params.columnApi.getAllColumns();
        if (cols) {
            var selectionColumn = cols.filter(function (x) { return x.getColDef().checkboxSelection == true; });
            if (selectionColumn.length > 0) {
                params.api.forEachNode(function (node) {
                    if (node.data[selectionColumn[0].getColDef().field] == true) {
                        params.api.selectNode(node, true);
                        console.log(node);
                    }
                });
            }
        }
    };
    GridService.prototype.postProcessPopup = function (params) {
        if (params.type === 'popupCellEditor') {
            params.ePopup.style.width = params.eventSource.style.width;
            this.focusEditor(params);
        }
    };
    GridService.prototype.focusEditor = function (params) {
        if (params.ePopup.querySelector('input')) {
            params.ePopup.querySelector('input').focus();
        }
        if (params.ePopup.querySelector('textarea')) {
            params.ePopup.querySelector('textarea').focus();
        }
    };
    GridService.prototype.getIcons = function () {
        return {
            sortAscending: '<i class="fa fa-long-arrow-alt-down"/>',
            sortDescending: '<i class="fa fa-long-arrow-alt-up"/>'
        };
    };
    GridService.prototype.getRowData = function (gridApi) {
        if (gridApi) {
            var editedRowData = gridApi.getModel().rootNode.allLeafChildren;
            if (editedRowData) {
                editedRowData = editedRowData.map(function (item) {
                    return item.data;
                });
                return editedRowData;
            }
        }
    };
    GridService.prototype.getDeleteColumn = function (mojDeleteColDef) {
        if (mojDeleteColDef === void 0) { mojDeleteColDef = {}; }
        mojDeleteColDef.isHideOnPrint = true;
        var colDef = this.setDefaultsToColDef({
            headerName: mojDeleteColDef.headerName,
            mojColDef: mojDeleteColDef,
            isAction: true
        });
        colDef.cellClass = 'td-action-grid ' + mojDeleteColDef.cssClass;
        colDef.suppressResize = true;
        colDef.suppressSorting = true;
        colDef.width = 30;
        colDef.cellRendererFramework = moj_grid_buttons_1.MojGridDeleteButtonComponent;
        colDef.cellRendererParams = {
            textKey: mojDeleteColDef.toolTipTextKey,
            confirmDeleteText: mojDeleteColDef.confirmDeleteText || 'MojTexts.confirmDelete',
            //disabled: colPermissions.disabled,
            cssClass: mojDeleteColDef.cssClass //pass for function per row
        };
        return colDef;
    };
    GridService.prototype.getEditColumn = function (mojEditColDef) {
        if (mojEditColDef === void 0) { mojEditColDef = {}; }
        mojEditColDef.isHideOnPrint = true;
        var colDef = this.setDefaultsToColDef({
            headerName: mojEditColDef.headerName,
            mojColDef: mojEditColDef,
            isAction: true
        });
        colDef.cellClass = 'td-action-grid ' + mojEditColDef.cssClass;
        colDef.suppressResize = true;
        colDef.suppressSorting = true;
        colDef.width = 30;
        colDef.cellRendererFramework = moj_grid_buttons_1.MojGridEditButtonComponent;
        colDef.cellRendererParams = {
            textKey: mojEditColDef.toolTipTextKey,
            // disabled: colPermissions.disabled,
            cssClass: mojEditColDef.cssClass //pass for function per row
        };
        return colDef;
    };
    GridService.prototype.getDuplicateColumn = function (mojDuplicateColDef) {
        if (mojDuplicateColDef === void 0) { mojDuplicateColDef = {}; }
        mojDuplicateColDef.isHideOnPrint = true;
        var colDef = this.setDefaultsToColDef({
            headerName: mojDuplicateColDef.headerName,
            mojColDef: mojDuplicateColDef,
            isAction: true
        });
        colDef.cellClass = 'td-action-grid ' + mojDuplicateColDef.cssClass;
        colDef.suppressResize = true;
        colDef.suppressSorting = true;
        colDef.width = 30;
        colDef.cellRendererFramework = moj_grid_buttons_1.MojGridDuplicateButtonComponent;
        colDef.cellRendererParams = {
            textKey: mojDuplicateColDef.toolTipTextKey,
            setDuplicatedData: mojDuplicateColDef.setDuplicatedData,
        };
        return colDef;
    };
    GridService.prototype.getActionsPopupColumn = function (mojActionsPopupColDef) {
        if (mojActionsPopupColDef === void 0) { mojActionsPopupColDef = {}; }
        var colDef = this.setDefaultsToColDef({
            headerName: mojActionsPopupColDef.headerName,
            mojColDef: mojActionsPopupColDef,
            isAction: true
        });
        colDef.cellClass = 'td-action-grid td-actions-popup ' + mojActionsPopupColDef.cssClass;
        colDef.suppressResize = true;
        colDef.width = 30;
        colDef.editable = true;
        colDef.cellRenderer = function (params) {
            var value = params.value || params.value == 0 ? params.value : '';
            return ("<div class='btn-actions-toggle btn-grid fas fa-pencil-alt' title='" +
                mojActionsPopupColDef.toolTipTextKey +
                "' style='position: relative;'></div>");
        };
        colDef.cellEditorFramework = moj_grid_columns_1.MojGridActionsPopupButtonComponent;
        colDef.cellEditorParams = {
            items: mojActionsPopupColDef.items
        };
        return colDef;
    };
    GridService.prototype.getMojColumn = function (field, mojColDef) {
        if (mojColDef === void 0) { mojColDef = {}; }
        var colDef = this.setDefaultsToColDef({
            field: field,
            mojColDef: mojColDef
        });
        var utils = this.utils;
        var dir = this.utils.currentLang.dir === language_1.MojDirection.rtl ? "rtl" : "ltr";
        colDef.cellRenderer = function (params) {
            var value = params.value || params.value == 0 ? params.value : '';
            if (params.colDef.refData.isLangSensitive)
                dir = /^[a-z\A-Z]/.test(value) ? "ltr" : "rtl";
            return '<div class="moj-ellipsis" dir="' + utils.htmlEscape(dir) + '"  title="' + utils.htmlEscape(value) + '">' + value + '</div>';
        };
        return colDef;
    };
    GridService.prototype.getMojCheckBoxColumn = function (field, mojCheckBoxColDef, name) {
        if (mojCheckBoxColDef === void 0) { mojCheckBoxColDef = { headerSelection: true }; }
        var colDef = this.setDefaultsToColDef({
            field: field,
            mojColDef: mojCheckBoxColDef,
            isAction: true
        });
        colDef.headerCheckboxSelectionFilteredOnly = true;
        colDef.headerCheckboxSelection = mojCheckBoxColDef.headerSelection;
        colDef.checkboxSelection = true;
        if (!colDef.width) {
            colDef.width = 30;
        }
        colDef.cellRenderer = function (params) {
            return '<div ></div>';
        };
        return colDef;
    };
    GridService.prototype.getMojCurrencyColumn = function (field, mojCurrencyColDef) {
        if (mojCurrencyColDef === void 0) { mojCurrencyColDef = {}; }
        var colDef = this.setDefaultsToColDef({
            field: field,
            mojColDef: mojCurrencyColDef
        });
        var currencyString = mojCurrencyColDef.currencyString || '₪';
        var formatNumber = function (number) {
            // this puts commas into the number eg 1000 goes to 1,000,
            return Math.floor(number)
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        };
        var currencyFormatter = function (params) {
            return formatNumber(params.value) + ' ' + currencyString;
        };
        colDef.valueFormatter = currencyFormatter;
        colDef.cellRenderer = function (params) {
            return ('<div class="moj-ellipsis" title="' +
                params.value +
                ' ' +
                currencyString +
                '">' +
                params.value +
                ' ' +
                currencyString +
                '</div>');
        };
        return colDef;
    };
    GridService.prototype.getLinkColumn = function (field, mojLinkColDef) {
        if (mojLinkColDef === void 0) { mojLinkColDef = {}; }
        var colDef = this.setDefaultsToColDef({
            field: field,
            mojColDef: mojLinkColDef,
            isAction: true
        });
        colDef.cellRendererFramework = moj_grid_columns_1.MojLinkColumnComponent;
        colDef.cellRendererParams = {
            clickLink: mojLinkColDef.clickLink,
            title: mojLinkColDef.title,
            editGridOnClick: mojLinkColDef.editGridOnClick
        };
        return colDef;
    };
    GridService.prototype.getMojIconColumn = function (field, mojIconColDef) {
        var colDef = this.setDefaultsToColDef({
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
        colDef.cellRendererFramework = moj_grid_columns_1.MojIconColumnComponent;
        colDef.cellRendererParams = {
            icon: mojIconColDef.icon,
            iconWithText: mojIconColDef.iconWithText,
            isCenter: mojIconColDef.isCenter
        };
        if (mojIconColDef.isCenter) {
            colDef.headerClass = 'center-header';
        }
        return colDef;
    };
    GridService.prototype.getMojDateColumn = function (field, mojDateColDef) {
        if (mojDateColDef === void 0) { mojDateColDef = {}; }
        var colDef = this.setDefaultsToColDef({
            field: field,
            mojColDef: mojDateColDef
        });
        colDef.type = 'dateColumn';
        colDef.filter = 'agDateColumnFilter';
        var format = mojDateColDef.format || 'dd/MM/yyyy';
        var compareDate = function (filterLocalDateAtMidnight, cellValue) {
            var cellDate = new Date(cellValue);
            if (cellDate < filterLocalDateAtMidnight) {
                return -1;
            }
            else if (cellDate > filterLocalDateAtMidnight) {
                return 1;
            }
            else {
                return 0;
            }
        };
        colDef.filterParams = { comparator: compareDate };
        var simpleDateFormatter = function (date) {
            return date ? new common_1.DatePipe('en-US').transform(date, format) : '';
        };
        // we want filter to work on string, not on all date object
        colDef.filterValueGetter = function (params) {
            var date = params.data[this.colDef.field];
            return simpleDateFormatter(date);
        }.bind({ colDef: colDef });
        colDef.cellRenderer = function (params) {
            var formatted = simpleDateFormatter(params.value);
            return '<div class="moj-ellipsis" title="' + formatted + '">' + formatted + '</div>';
        };
        return colDef;
    };
    GridService.prototype.getVColumn = function (field, mojVColDef) {
        if (mojVColDef === void 0) { mojVColDef = {}; }
        var colDef = this.setDefaultsToColDef({
            field: field,
            mojColDef: mojVColDef
        });
        colDef.cellRendererFramework = moj_grid_columns_1.MojVColumnComponent;
        colDef.headerClass = 'center-header';
        return colDef;
    };
    GridService.prototype.getRadioBttonColumn = function (field, mojRadioButtonColDef) {
        if (mojRadioButtonColDef === void 0) { mojRadioButtonColDef = {}; }
        var colDef = this.setDefaultsToColDef({
            field: field,
            mojColDef: mojRadioButtonColDef
        });
        colDef.cellRendererFramework = moj_radiobutton_column_component_1.MojRadiobuttonColumnComponent;
        return colDef;
    };
    GridService.prototype.getMojCheckBoxSelectColumn = function (field, mojCheckBoxColDef) {
        if (mojCheckBoxColDef === void 0) { mojCheckBoxColDef = {}; }
        var colDef = this.setDefaultsToColDef({
            field: field,
            mojColDef: mojCheckBoxColDef,
            isAction: true
        });
        colDef.headerName = '';
        colDef.cellRendererFramework = moj_checkbox_column_component_1.MojCheckBoxColumnComponent;
        return colDef;
    };
    GridService.prototype.getStateColumn = function (mojStateColDef) {
        if (mojStateColDef === void 0) { mojStateColDef = {}; }
        var colDef = this.setDefaultsToColDef({ mojColDef: mojStateColDef });
        colDef.suppressMenu = true;
        colDef.cellRendererFramework = moj_grid_columns_1.MojStateColumnComponent;
        colDef.width = 35;
        return colDef;
    };
    GridService.prototype.getMojDocumentFormatColumn = function (field, mojDocumentFormatColDef) {
        if (mojDocumentFormatColDef === void 0) { mojDocumentFormatColDef = {}; }
        var colDef = this.setDefaultsToColDef({
            mojColDef: mojDocumentFormatColDef,
            isAction: !!mojDocumentFormatColDef.clickLink,
            noDefaultHeader: true,
            field: field
        });
        if (!colDef.width) {
            colDef.width = 60;
        }
        colDef.minWidth = 30;
        colDef.suppressResize = true;
        colDef.suppressSorting = true;
        colDef.cellRendererFramework = moj_document_format_column_component_1.MojDocumentFormatColumnComponent;
        colDef.cellRendererParams = {
            clickLink: mojDocumentFormatColDef.clickLink,
            tooltip: mojDocumentFormatColDef.tooltip,
            fileTypes: mojDocumentFormatColDef.fileTypes
        };
        return colDef;
    };
    GridService.prototype.getMojNumberColumn = function (field, mojNumberColDef) {
        if (mojNumberColDef === void 0) { mojNumberColDef = {}; }
        var colDef = this.setDefaultsToColDef({
            field: field,
            mojColDef: mojNumberColDef
        });
        colDef.cellRenderer = function (params) {
            var formatter = Math.floor(params.value)
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            return '<div class="moj-ellipsis" title="' + formatter + '">' + formatter + '</div>';
        };
        return colDef;
    };
    GridService.prototype.getMojHebrewEnglishColumn = function (field, mojHebrewEnglishColDef) {
        if (mojHebrewEnglishColDef === void 0) { mojHebrewEnglishColDef = {}; }
        var colDef = this.setDefaultsToColDef({
            field: field,
            mojColDef: mojHebrewEnglishColDef
        });
        var hebReg = new RegExp(/[\u0590-\u05FF]/);
        var anotherHebReg = new RegExp(/[\u0600-\u06FF\u0750-\u077F]/);
        var utils = this.utils;
        colDef.cellRenderer = function (params) {
            var value = params.value || params.value == 0 ? params.value : '';
            var directionClass;
            if (hebReg.test(value) || anotherHebReg.test(value)) {
                directionClass = 'right-to-left';
            }
            else {
                directionClass = 'left-to-right';
            }
            return "<div class=\"moj-ellipsis " + directionClass + "\" title=\"'" + utils.htmlEscape(value) + "'\">" + value + "</div>";
        };
        return colDef;
    };
    GridService.prototype.setDefaultsToColDef = function (setDefaultsToColParams) {
        if (setDefaultsToColParams === void 0) { setDefaultsToColParams = {}; }
        var colDef = setDefaultsToColParams.mojColDef.colDef;
        if (!colDef) {
            colDef = {};
        }
        if (setDefaultsToColParams.field) {
            colDef.field = setDefaultsToColParams.field;
        }
        var headerName = colDef.headerName || setDefaultsToColParams.headerName || colDef.field;
        if (headerName) {
            var res = this.translate.instant('Texts.' + headerName);
            colDef.headerName = res.indexOf('Texts.') == 0 ? res.substr(6) : res;
        }
        else if (setDefaultsToColParams.noDefaultHeader) {
            colDef.headerName = '';
        }
        colDef.refData = {};
        if (setDefaultsToColParams.isAction)
            colDef.refData.isAction = 'true';
        if (colDef.hide) {
            //for prevent hidden column show after gridsizechange
            colDef.refData.isHiddenColumn = 'true';
        }
        if (setDefaultsToColParams.mojColDef.isHideOnPrint) {
            //for hide column on print
            colDef.refData.isHideOnPrint = 'true';
        }
        if (setDefaultsToColParams.mojColDef.isLangSensitive) {
            //for langSensitive ltr
            colDef.refData.isLangSensitive = 'true';
        }
        return colDef;
    };
    GridService.prototype.throwRowDataUpdatedEvent = function (gridApi, columnApi) {
        var rowDataUpdatedEvent = {
            type: ag_grid_community_1.Events.EVENT_ROW_DATA_UPDATED,
            api: gridApi,
            columnApi: columnApi
        };
        gridApi.eventService.dispatchEvent(rowDataUpdatedEvent);
    };
    GridService.prototype.setEditableColumn = function (colDef, editComponentType, editColumnOptions) {
        colDef.editable = true;
        colDef.cellEditorFramework = editComponentType;
        colDef.cellEditorParams = editColumnOptions;
        //after change set state edited
        colDef.valueSetter = function (params) {
            if (params.oldValue !== params.newValue) {
                var data = __assign({}, params.node.data);
                data[params.column.colDef.field] = params.newValue;
                data.state = data.state == general_enum_1.ObjectState.Added ? general_enum_1.ObjectState.Added : general_enum_1.ObjectState.Edited;
                params.node.setData(data);
                this.throwRowDataUpdatedEvent(params.api, params.columnApi);
                // get grid to refresh the cell
                return true;
            }
            else {
                // no change, so no refresh needed
                return false;
            }
        }.bind(this);
        return colDef;
    };
    GridService.prototype.getMojDatePickerColumn = function (field, editColumnOptions, mojDateColDef) {
        if (editColumnOptions === void 0) { editColumnOptions = null; }
        if (mojDateColDef === void 0) { mojDateColDef = {}; }
        var colDef = this.getMojDateColumn(field, mojDateColDef);
        colDef = this.setEditableColumn(colDef, edit_inline_columns_1.MojDatePickerColumnComponent, editColumnOptions);
        return colDef;
    };
    GridService.prototype.getMojTextBoxColumn = function (field, editColumnOptions, mojColDef) {
        if (editColumnOptions === void 0) { editColumnOptions = null; }
        if (mojColDef === void 0) { mojColDef = {}; }
        var colDef = this.getMojColumn(field, mojColDef);
        colDef = this.setEditableColumn(colDef, edit_inline_columns_1.MojTextboxColumnComponent, editColumnOptions);
        return colDef;
    };
    GridService.prototype.getMojTextAreaColumn = function (field, editColumnOptions, mojColDef) {
        if (editColumnOptions === void 0) { editColumnOptions = null; }
        if (mojColDef === void 0) { mojColDef = {}; }
        var colDef = this.getMojColumn(field, mojColDef);
        colDef = this.setEditableColumn(colDef, edit_inline_columns_1.MojTextAreaColumnComponent, editColumnOptions);
        return colDef;
    };
    GridService.prototype.getMojDropdownColumn = function (field, editColumnOptions, mojColDef) {
        if (editColumnOptions === void 0) { editColumnOptions = null; }
        if (mojColDef === void 0) { mojColDef = {}; }
        var colDef = this.setDefaultsToColDef({
            field: field,
            mojColDef: mojColDef
        });
        //sort by fieldName
        colDef.comparator = function (valueA, valueB) {
            return ('' + valueA[this.fieldName]).localeCompare(valueB[this.fieldName]);
        }.bind({ fieldName: editColumnOptions.fieldName });
        colDef.cellRenderer = function (params) {
            var value = '';
            if (params.value) {
                var fieldName = params.column.colDef.cellEditorParams.fieldName;
                if (fieldName && params.value.hasOwnProperty(fieldName)) {
                    value = params.value[fieldName];
                }
                else {
                    value = params.value;
                }
            }
            return '<div class="moj-ellipsis" title="' + value + '">' + value + '</div>';
        };
        colDef = this.setEditableColumn(colDef, edit_inline_columns_1.MojDropdownColumnComponent, editColumnOptions);
        return colDef;
    };
    GridService.prototype.getMojMultiSelectColumn = function (field, editColumnOptions, mojColDef) {
        if (editColumnOptions === void 0) { editColumnOptions = null; }
        if (mojColDef === void 0) { mojColDef = {}; }
        var colDef = this.setDefaultsToColDef({
            field: field,
            mojColDef: mojColDef
        });
        //sort by fieldName
        colDef.comparator = function (valueA, valueB) {
            var a = valueA && valueA[0] && this.fieldName ? valueA[0][this.fieldName] : '';
            var b = valueB && valueB[0] && this.fieldName ? valueB[0][this.fieldName] : '';
            return ('' + a).localeCompare(b);
        }.bind({ fieldName: (editColumnOptions && editColumnOptions.fieldName) || field });
        colDef.cellRenderer = function (params) {
            var value = '';
            if (params.value && params.column.colDef.cellEditorParams.fieldName) {
                value = this.utils.getStringFromObjectArray(params.column.colDef.cellEditorParams.fieldName, params.value);
            }
            return '<div class="moj-ellipsis" title="' + value + '">' + value + '</div>';
        }.bind(this);
        colDef = this.setEditableColumn(colDef, edit_inline_columns_1.MojMultiSelectColumnComponent, editColumnOptions);
        return colDef;
    };
    GridService.prototype.getMojAutoCompleteColumn = function (field, editColumnOptions, MojColDef) {
        if (editColumnOptions === void 0) { editColumnOptions = null; }
        if (MojColDef === void 0) { MojColDef = {}; }
        var colDef = this.setDefaultsToColDef({
            field: field,
            mojColDef: MojColDef
        });
        //sort by fieldName
        colDef.comparator = function (valueA, valueB) {
            var a;
            var b;
            if (this.multiple) {
                a = valueA && valueA[0] && this.fieldName ? valueA[0][this.fieldName] : '';
                b = valueB && valueB[0] && this.fieldName ? valueB[0][this.fieldName] : '';
            }
            else {
                a = valueA[this.fieldName];
                b = valueB[this.fieldName];
            }
            return ('' + a).localeCompare(b);
        }.bind({ fieldName: editColumnOptions.fieldName, multiple: editColumnOptions.multiple });
        colDef.cellRenderer = function (params) {
            var value = '';
            if (params.value) {
                var fieldName = params.column.colDef.cellEditorParams.fieldName;
                if (params.column.colDef.cellEditorParams.multiple) {
                    value = this.utils.getStringFromObjectArray(fieldName, params.value);
                }
                else {
                    if (fieldName && params.value.hasOwnProperty(fieldName)) {
                        //array of objects
                        value = params.value[params.column.colDef.cellEditorParams.fieldName];
                    }
                    else {
                        //array of string
                        value = params.value;
                    }
                }
            }
            return '<div class="moj-ellipsis" title="' + value + '">' + value + '</div>';
        }.bind(this);
        colDef = this.setEditableColumn(colDef, edit_inline_columns_1.MojAutoCompleteColumnComponent, editColumnOptions);
        return colDef;
    };
    GridService.prototype.getPermissions = function (mojColDef, name) {
        var permissionResult = { disabled: false, hide: false };
        if (mojColDef && mojColDef.colDef && mojColDef.colDef.field || name != null) {
            var identifier = mojColDef.colDef.field;
            if (name != null) {
                identifier = name;
            }
            var result = this.permissionService.getControllerPermission(identifier);
            if (result) {
                if (mojColDef.disabled == undefined || !mojColDef.disabled)
                    permissionResult.disabled = !result.enable;
                if (mojColDef.colDef && mojColDef.colDef.hide == undefined || !mojColDef.colDef.hide)
                    permissionResult.hide = !result.visible;
            }
        }
        return permissionResult;
    };
    GridService.prototype.setGridState = function (grid) {
        var gridState = {};
        if (grid && grid.inEdit && grid.editComponent) {
            gridState.editedItem = grid.editComponent.editedItem;
            gridState.nodeId = grid.editedNodeId;
            gridState.isNew = grid.isNew;
        }
        //if quick filter
        if (grid && grid.mojQuickFilter && grid.mojQuickFilter.value) {
            gridState.quickFilterText = grid.mojQuickFilter.value;
        }
        return gridState;
    };
    GridService.prototype.getGridState = function (grid, gridState) {
        //if grid in edit
        if (grid && gridState && gridState.editedItem) {
            if (gridState.isNew) {
                grid.add();
                if (grid.editComponent) {
                    grid.editComponent.editedItem = gridState.editedItem;
                }
            }
            else {
                grid.edit(gridState.editedItem, gridState.nodeId);
            }
        }
        //if quick filter
        if (grid && gridState && gridState.quickFilterText && grid.mojQuickFilter) {
            grid.mojQuickFilter.value = gridState.quickFilterText;
            grid.quickFilter(gridState.quickFilterText);
        }
    };
    GridService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_2.TranslateService, utils_1.MojUtilsService, permission_service_1.PermissionService])
    ], GridService);
    return GridService;
}());
exports.GridService = GridService;
//# sourceMappingURL=moj-grid.service.js.map