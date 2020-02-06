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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./../../shared/utils");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var internal_grid_service_1 = require("./service/internal-grid.service");
var edit_options_model_1 = require("./edit-component/edit-options.model");
var ag_grid_angular_1 = require("ag-grid-angular");
var edit_service_base_1 = require("./service/edit-service.base");
var operators_1 = require("rxjs/operators");
var moj_dialog_service_1 = require("../../messages/moj-dialog.service");
var view_row_details_component_1 = require("./view-row-details/view-row-details.component");
var core_2 = require("@ngx-translate/core");
var general_enum_1 = require("../general/general.enum");
var moj_drag_and_drop_1 = require("../../directives/moj-drag-and-drop");
var moj_grid_service_1 = require("./service/moj-grid.service");
var moj_form_service_1 = require("../../directives/moj-form.service");
var moj_loading_service_1 = require("../moj-loading/moj-loading.service");
var dataview_type_enum_1 = require("./models/dataview-type.enum");
var dataview_1 = require("primeng/dataview");
var moj_quick_filter_1 = require("./filters/moj-quick-filter");
var MojGridPanelComponent = /** @class */ (function () {
    function MojGridPanelComponent(internalGridService, http, cdr, componentFactoryResolver, dialogService, translate, gridService, loadingService, utilsService, mojFormService) {
        var _this = this;
        this.internalGridService = internalGridService;
        this.http = http;
        this.cdr = cdr;
        this.componentFactoryResolver = componentFactoryResolver;
        this.dialogService = dialogService;
        this.translate = translate;
        this.gridService = gridService;
        this.loadingService = loadingService;
        this.utilsService = utilsService;
        this.mojFormService = mojFormService;
        this.editOptions = new edit_options_model_1.EditOptions();
        this.gridDescription = '';
        this.addViewIconInResponsive = true;
        this.supportResponsive = true;
        this.enableChangePageSize = false;
        this.dataViewType = dataview_type_enum_1.MojDataViewType.Grid;
        this.dataViewTypeEnum = dataview_type_enum_1.MojDataViewType;
        this.editType = edit_options_model_1.EditType;
        this.labelId = "gridDescription" + identifier++;
        //for prevent unsubscribe for multiple subscriptions
        this.alive = true;
        internalGridService.gridActions.deleteClick$.subscribe(function (item) {
            _this.delete(item.item, item.nodeId);
        });
        internalGridService.gridActions.editClick$.subscribe(function (item) {
            _this.edit(item.item, item.nodeId);
        });
        internalGridService.gridActions.addClick$.subscribe(function (item) {
            _this.add();
        });
        internalGridService.gridActions.saveClick$.subscribe(function (item) {
            _this.save();
        });
        internalGridService.gridActions.cancelClick$.subscribe(function (item) {
            _this.cancel();
        });
        internalGridService.gridActions.duplicateClick$.subscribe(function (item) {
            _this.duplicate(item);
        });
        internalGridService.gridActions.quickFilter$.subscribe(function (value) {
            _this.quickFilter(value);
        });
        internalGridService.gridActions.dataViewTypeChangeSource$.subscribe(function (type) {
            _this.changeDataViewType(type);
        });
    }
    Object.defineProperty(MojGridPanelComponent.prototype, "editService", {
        get: function () {
            if (this._editService == undefined)
                this._editService = new edit_service_base_1.EditServiceBase(this.http);
            return this._editService;
        },
        set: function (value) {
            this._editService = value;
        },
        enumerable: true,
        configurable: true
    });
    MojGridPanelComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.mojDragAndDrop) {
            //for drag file to table
            this.mojDragAndDrop.fileDrop.subscribe(function (files) {
                _this.onDropFile(files);
            });
        }
    };
    MojGridPanelComponent.prototype.createEditComponent = function () {
        var _this = this;
        if (this.editOptions.editComponentType) {
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.editOptions.editComponentType);
            if (this.editOptions.editType != edit_options_model_1.EditType.ReplaceArea) {
                this.editComponentContainer.clear();
                this.editComponentRef = this.editComponentContainer.createComponent(componentFactory);
            }
            else {
                this.editComponentRef = this.editOptions.hideAreaOnEdit.createComponent(componentFactory);
            }
            if (this.editComponentRef) {
                this.editComponent = this.editComponentRef.instance;
                this.editComponent.internalGridService = this.internalGridService;
                if (this.editOptions.data) {
                    this.editComponent.data = this.editOptions.data;
                }
                //this fix bug that edit component sometimes not shown
                setTimeout(function () {
                    if (!_this.editComponentRef.hostView.destroyed)
                        _this.editComponentRef.changeDetectorRef.detectChanges();
                }, 1000);
            }
        }
    };
    MojGridPanelComponent.prototype.add = function () {
        if (this.editOptions.editType == edit_options_model_1.EditType.Inline) {
            var data = this.editOptions.initInlineItem();
            this.addToDataSource(data);
            return;
        }
        this.isNew = true;
        this.inEdit = true;
        if (this.mojFormService) {
            this.mojFormService.setGridEditState(true);
        }
        if (this.editOptions.editType == edit_options_model_1.EditType.ReplaceArea) {
            this.editOptions.hideAreaOnEdit.element.nativeElement.style.display = 'none';
        }
        this.createEditComponent();
        this.editComponent.initItem(null);
    };
    MojGridPanelComponent.prototype.edit = function (rowData, nodeId) {
        this.isNew = false;
        this.inEdit = true;
        this.editedNodeId = nodeId;
        if (this.mojFormService) {
            this.mojFormService.setGridEditState(true);
        }
        if (this.editOptions.editType == edit_options_model_1.EditType.ReplaceArea) {
            this.editOptions.hideAreaOnEdit.element.nativeElement.style.display = 'none';
        }
        this.createEditComponent();
        this.editComponent.initItem(rowData);
    };
    MojGridPanelComponent.prototype.delete = function (rowData, nodeId) {
        var _this = this;
        this.loadingService.show(this.panelDiv);
        this.cdr.detectChanges();
        var deleteQuery;
        if (this.editOptions.deleteUrl) {
            deleteQuery = this.editService.deleteByUrl(this.editOptions.deleteUrl, rowData['ID']);
        }
        else {
            deleteQuery = this.editService.delete(rowData);
        }
        deleteQuery.subscribe(function (result) {
            if (result) {
                if (_this.dataViewType == dataview_type_enum_1.MojDataViewType.Grid) {
                    _this.deleteFromAgGrid(nodeId, rowData);
                }
                else {
                    _this.deleteFromDataView(nodeId, rowData);
                }
            }
            _this.editService.afterDelete(rowData);
            _this.loadingService.hide();
            _this.cdr.detectChanges();
        }, function (error) {
            _this.loadingService.hide();
            _this.cdr.detectChanges();
        });
    };
    MojGridPanelComponent.prototype.deleteFromAgGrid = function (nodeId, rowData) {
        var node = this.grid.api.getRowNode(nodeId);
        if (this.editOptions.showDeletedRow && rowData.state != general_enum_1.ObjectState.Added) {
            // don't remove when old row and showDeletedRow = true
            var deletedData = __assign({}, rowData); //dont change origin row data, for enable cancel gris changes
            deletedData.state = general_enum_1.ObjectState.Deleted;
            if (this.grid.gridOptions.rowModelType != 'serverSide') {
                //grid server side cannot update api
                node.setData(deletedData);
                this.gridService.throwRowDataUpdatedEvent(this.grid.api, this.grid.columnApi);
            }
        }
        else {
            if (this.grid.gridOptions.rowModelType != 'serverSide') {
                //grid server side cannot update api
                this.grid.api.updateRowData({ remove: [rowData] });
            }
        }
    };
    MojGridPanelComponent.prototype.deleteFromDataView = function (nodeId, rowData) {
        var index = this.dataView.value.findIndex(function (x) { return x.nodeId == nodeId; });
        if (this.editOptions.showDeletedRow && rowData.state != general_enum_1.ObjectState.Added) {
            // don't remove when old row and showDeletedRow = true
            var deletedData = __assign({}, rowData); //dont change origin row data, for enable cancel gris changes
            deletedData.state = general_enum_1.ObjectState.Deleted;
            this.dataView.value[index] = deletedData;
        }
        else {
            this.dataView.value.splice(index, 1);
        }
    };
    MojGridPanelComponent.prototype.cancel = function () {
        this.inEdit = false;
        this.returnToGrid();
    };
    MojGridPanelComponent.prototype.returnToGrid = function () {
        if (this.editOptions.editType == edit_options_model_1.EditType.ReplaceArea) {
            if (this.editOptions.hideAreaOnEdit) {
                this.editOptions.hideAreaOnEdit.element.nativeElement.style.display = 'inline';
                this.editOptions.hideAreaOnEdit.remove();
            }
        }
        if (this.mojFormService) {
            this.mojFormService.setGridEditState(false);
        }
        //Fix bug for return to grid not occurs sometimes
        this.changeColumnsVisibilityForResponsive();
        this.cdr.detectChanges();
    };
    MojGridPanelComponent.prototype.addToDataSource = function (item) {
        item.state = general_enum_1.ObjectState.Added;
        if (this.dataViewType == dataview_type_enum_1.MojDataViewType.Grid) {
            if (this.grid.gridOptions.rowModelType != 'serverSide') {
                //grid server side cannot update api
                var rowNodeTransaction = this.grid.api.updateRowData({ add: [item] });
                if (rowNodeTransaction.add.length > 0) {
                    return rowNodeTransaction.add[0].id;
                }
            }
        }
        else {
            this.dataView.value.push(item);
        }
    };
    MojGridPanelComponent.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var editedItem, rowData, saveQuery;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        editedItem = this.editComponent.editedItem;
                        if (this.dataViewType == dataview_type_enum_1.MojDataViewType.Grid)
                            rowData = this.gridService.getRowData(this.grid.api);
                        else
                            rowData = this.dataView.value;
                        if (!this.editComponent.ngForm.valid) return [3 /*break*/, 2];
                        this.loadingService.show(this.overlayEditDiv);
                        this.cdr.detectChanges();
                        return [4 /*yield*/, this.editService.beforeSave(rowData, editedItem)];
                    case 1:
                        if ((_a.sent()) == false) {
                            return [2 /*return*/];
                        }
                        saveQuery = void 0;
                        if (this.editOptions.saveUrl) {
                            saveQuery = this.editService.saveByUrl(this.editOptions.saveUrl, editedItem, this.editOptions.saveUrlWithCredentials);
                        }
                        else {
                            saveQuery = this.editService.save(editedItem, this.isNew);
                        }
                        saveQuery.subscribe(function (data) {
                            if (data) {
                                if (_this.isNew) {
                                    _this.addToDataSource(data);
                                }
                                else {
                                    //edit new row - remain new status
                                    data.state = editedItem.state == general_enum_1.ObjectState.Added ? general_enum_1.ObjectState.Added : general_enum_1.ObjectState.Edited;
                                    if (_this.dataViewType == dataview_type_enum_1.MojDataViewType.Grid) {
                                        if (_this.grid.gridOptions.rowModelType != 'serverSide') {
                                            //grid server side cannot update api
                                            var node = _this.grid.api.getRowNode(_this.editedNodeId);
                                            node.setData(data);
                                            _this.gridService.throwRowDataUpdatedEvent(_this.grid.api, _this.grid.columnApi);
                                        }
                                    }
                                    else {
                                        var index = _this.dataView.value.findIndex(function (x) { return x.nodeId == _this.editedNodeId; });
                                        _this.dataView.value[index] = data;
                                    }
                                }
                                _this.inEdit = false;
                                _this.returnToGrid();
                                _this.editService.afterSave(data);
                            }
                            _this.loadingService.hide();
                            _this.cdr.detectChanges();
                        }, function (error) {
                            _this.loadingService.hide();
                            _this.cdr.detectChanges();
                        });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MojGridPanelComponent.prototype.duplicate = function (data) {
        var nodeId;
        nodeId = this.addToDataSource(data);
        this.editService.afterDuplicate(data, nodeId);
    };
    MojGridPanelComponent.prototype.quickFilter = function (value) {
        this.grid.api.setQuickFilter(value);
    };
    MojGridPanelComponent.prototype.onDropFile = function (files) {
        //on drop files to table, open add and set the files to editComponent
        if (files && files.length > 0) {
            this.add();
            this.editComponent.filesToAdd = files;
        }
    };
    MojGridPanelComponent.prototype.ngAfterViewInit = function () {
        this.changeDataViewType(this.dataViewType);
        if (this.grid) {
            this.setGridDescribedby();
            this.gridEventsSubscription();
        }
        if (this.dataView) {
            var cloned = this.dataView.value.map(function (obj, index) { return (__assign({}, obj, { nodeId: index })); });
            this.dataView.value = cloned;
        }
    };
    MojGridPanelComponent.prototype.gridEventsSubscription = function () {
        var _this = this;
        //use takeWhile(() => this.alive) for prevent unsubscribe
        this.grid.cellFocused.pipe(operators_1.takeWhile(function () { return _this.alive; })).subscribe(function (params) {
            _this.bindActionCellsClickEvent(params);
        });
        this.grid.gridSizeChanged.pipe(operators_1.takeWhile(function () { return _this.alive; })).subscribe(function (params) {
            _this.addKeyboardNavigationToHeader(params);
        });
        this.grid.gridReady.pipe(operators_1.takeWhile(function () { return _this.alive; })).subscribe(function (params) {
            _this.changeColumnsVisibilityForResponsive();
        });
        //put the component in the grid context, then we can access to component members in callbacks
        //see in ag-grid documentation: https://www.ag-grid.com/javascript-grid-context/
        this.grid.gridOptions.context = this;
        this.grid.cellClicked.pipe(operators_1.takeWhile(function () { return _this.alive; })).subscribe(function (params) {
            _this.openViewDetilsDialog(params);
        });
    };
    MojGridPanelComponent.prototype.openViewDetilsDialog = function (params) {
        if (params.colDef.refData != null && params.colDef.refData.isViewDetails) {
            var data = {
                columns: params.columnApi.getAllColumns(),
                data: params.data
            };
            var dialogHeaderTitle = params.context.translate.instant('MojTexts.rowDetails');
            params.context.dialogService.openDialog(dialogHeaderTitle, view_row_details_component_1.MojViewRowDetailsComponent, 300, null, data);
        }
    };
    MojGridPanelComponent.prototype.bindActionCellsClickEvent = function (params) {
        if (this.isActionColumn(params.column)) {
            var columnElement = document.querySelector("div[col-id='" + params.column.colId + "'].ag-cell-focus");
            if (columnElement) {
                columnElement.removeEventListener('keydown', this.handelColumnKeydown);
                columnElement.addEventListener('keydown', this.handelColumnKeydown);
            }
        }
    };
    MojGridPanelComponent.prototype.setGridDescribedby = function () {
        //because the grid is not html table, there is no summary, but aria-describedby
        this.grid.api.gridPanel.eBody.parentElement.setAttribute('aria-describedby', this.labelId);
    };
    MojGridPanelComponent.prototype.handelColumnKeydown = function (e) {
        if (e.key === 'Enter') {
            var elementToClick;
            elementToClick =
                e.currentTarget.querySelector('button') ||
                    e.currentTarget.querySelector('a') ||
                    e.currentTarget.querySelector('input');
            if (elementToClick)
                elementToClick.click();
        }
    };
    MojGridPanelComponent.prototype.isActionColumn = function (column) {
        return column && column.colDef.refData && column.colDef.refData.isAction == 'true';
    };
    MojGridPanelComponent.prototype.isHiddenColumn = function (column) {
        //fix bug of dinamic hiddencols
        var hiddenColumn = null;
        var columnState = this.grid.columnApi.getColumnState();
        if (columnState) {
            hiddenColumn = columnState.filter(function (v) { return v.hide && v.colId == column.colId; });
        }
        return !(hiddenColumn == null || hiddenColumn.length == 0) || column && column.colDef.refData && column.colDef.refData.isHiddenColumn == 'true';
    };
    MojGridPanelComponent.prototype.addKeyboardNavigationToHeader = function (params) {
        var columns = params.columnApi.getAllDisplayedColumns();
        var tabIndex = 0;
        var sortOptions = ['asc', 'desc', 'none'];
        var _loop_1 = function (index) {
            headerElement = document.querySelector("div[col-id='" + columns[index].colId + "'] div.ag-header-cell-label");
            if (headerElement != null) {
                // for each column set a tabindex, otherwise it wont be able to get focus
                headerElement.setAttribute('tabindex', tabIndex.toString());
                headerElement.addEventListener('keydown', function (e) {
                    if (e.key === 'Enter') {
                        // on enter sort the column
                        // you'll probably want to cycle through asc/desc/none here for each enter pressed
                        var currentSort = params.api.getSortModel().filter(function (x) { return x.colId == columns[index].colId; });
                        var currentSortMode = currentSort.length > 0 ? currentSort[0].sort : '';
                        var sortOptionIndex = sortOptions.indexOf(currentSortMode);
                        sortOptionIndex = sortOptionIndex == sortOptions.length - 1 ? 0 : ++sortOptionIndex;
                        var sort = [{ colId: columns[index].colId, sort: sortOptions[sortOptionIndex] }];
                        params.api.setSortModel(sort);
                    }
                });
            }
        };
        var headerElement;
        for (var index = 0; index < columns.length; index++) {
            _loop_1(index);
        }
    };
    MojGridPanelComponent.prototype.addRemoveViewDetailsCol = function (columns, toRemove) {
        if (toRemove === void 0) { toRemove = false; }
        var isExistsViewDetails = columns.filter(function (x) {
            if (x.getColDef().refData == null)
                return false;
            else if (x.getColDef().refData.isViewDetails)
                return true;
        });
        if (!toRemove && this.addViewIconInResponsive) {
            if (isExistsViewDetails.length == 0) {
                var newCol = {};
                newCol.cellRenderer = function (params) {
                    return '<i class="fas fa-eye" title="לצפיה בפרטי הרשומה"></i>';
                };
                newCol.width = 40;
                newCol.minWidth = 40;
                newCol.maxWidth = 40;
                newCol.headerName = '';
                newCol.colId = 'ViewDetails';
                newCol.refData = { isViewDetails: 'true' };
                this.grid.columnDefs.unshift(newCol);
                this.grid.api.setColumnDefs(this.grid.columnDefs);
                this.grid.columnApi.moveColumn('ViewDetails', 0);
            }
            else {
                this.grid.columnApi.setColumnVisible(isExistsViewDetails[0].getColId(), true);
            }
            this.grid.api.sizeColumnsToFit();
        }
        else if (toRemove && isExistsViewDetails.length > 0) {
            this.grid.columnApi.setColumnVisible(isExistsViewDetails[0].getColId(), false);
            this.grid.api.sizeColumnsToFit();
        }
    };
    MojGridPanelComponent.prototype.onResize = function (event) {
        if (this.grid)
            this.changeColumnsVisibilityForResponsive(event.target.innerWidth);
    };
    MojGridPanelComponent.prototype.changeColumnsVisibilityForResponsive = function (deviceWidth) {
        var _this = this;
        if (this.grid) {
            var params = this.grid;
            var isMobile = this.utilsService.isMobile();
            var allColumns = params.columnApi.getAllColumns();
            if (allColumns && allColumns.length) {
                // show/hide columns based on current grid width
                if (isMobile && this.supportResponsive) {
                    for (var i = 0; i < allColumns.length; i++) {
                        var column = allColumns[i];
                        //in responsive mode- display only the two first columns and action columns
                        if (i > 1 && !this.isActionColumn(column))
                            params.columnApi.setColumnVisible(column.getColId(), false);
                        else if (!this.isHiddenColumn(column)) {
                            params.columnApi.setColumnVisible(column.getColId(), true);
                            if (i == 0 && allColumns.length > 2) {
                                this.addRemoveViewDetailsCol(allColumns);
                            }
                        }
                    }
                }
                else {
                    allColumns
                        .filter(function (v) { return !_this.isHiddenColumn(v); })
                        .forEach(function (element) {
                        params.columnApi.setColumnVisible(element.getColId(), true);
                    });
                    this.addRemoveViewDetailsCol(allColumns, true);
                }
                params.api.sizeColumnsToFit();
            }
        }
    };
    MojGridPanelComponent.prototype.changeDataViewType = function (type) {
        if (type == undefined) {
            if (this.gridEl && !this.dataViewEl)
                type = dataview_type_enum_1.MojDataViewType.Grid;
            if (this.dataViewEl && !this.gridEl)
                type = dataview_type_enum_1.MojDataViewType.List;
        }
        this.dataViewType = type;
        if (this.gridEl) {
            this.gridEl.element.nativeElement.style.display = this.dataViewType == dataview_type_enum_1.MojDataViewType.Grid ? "block" : "none";
            this.grid.api.sizeColumnsToFit();
        }
        if (this.dataViewEl)
            this.dataViewEl.element.nativeElement.style.display = this.dataViewType == dataview_type_enum_1.MojDataViewType.List ? "block" : "none";
    };
    MojGridPanelComponent.prototype.ngOnDestroy = function () {
        if (this.editComponentRef) {
            this.editComponentRef.destroy();
        }
        this.alive = false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", edit_options_model_1.EditOptions)
    ], MojGridPanelComponent.prototype, "editOptions", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MojGridPanelComponent.prototype, "gridDescription", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MojGridPanelComponent.prototype, "gridId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojGridPanelComponent.prototype, "addViewIconInResponsive", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojGridPanelComponent.prototype, "supportResponsive", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojGridPanelComponent.prototype, "enableChangePageSize", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MojGridPanelComponent.prototype, "dataViewType", void 0);
    __decorate([
        core_1.Input('editService'),
        __metadata("design:type", edit_service_base_1.EditServiceBase),
        __metadata("design:paramtypes", [edit_service_base_1.EditServiceBase])
    ], MojGridPanelComponent.prototype, "editService", null);
    __decorate([
        core_1.ViewChild('editComponentContainer', { read: core_1.ViewContainerRef, static: false }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], MojGridPanelComponent.prototype, "editComponentContainer", void 0);
    __decorate([
        core_1.ViewChild('overlayEditDiv', { read: core_1.ViewContainerRef, static: false }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], MojGridPanelComponent.prototype, "overlayEditDiv", void 0);
    __decorate([
        core_1.ViewChild('panelDiv', { read: core_1.ViewContainerRef, static: false }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], MojGridPanelComponent.prototype, "panelDiv", void 0);
    __decorate([
        core_1.ContentChild(ag_grid_angular_1.AgGridNg2, { static: true }),
        __metadata("design:type", ag_grid_angular_1.AgGridNg2)
    ], MojGridPanelComponent.prototype, "grid", void 0);
    __decorate([
        core_1.ContentChild(ag_grid_angular_1.AgGridNg2, { read: core_1.ViewContainerRef, static: true }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], MojGridPanelComponent.prototype, "gridEl", void 0);
    __decorate([
        core_1.ContentChild("listView", { read: dataview_1.DataView, static: true }),
        __metadata("design:type", dataview_1.DataView)
    ], MojGridPanelComponent.prototype, "dataView", void 0);
    __decorate([
        core_1.ContentChild("listView", { read: core_1.ViewContainerRef, static: true }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], MojGridPanelComponent.prototype, "dataViewEl", void 0);
    __decorate([
        core_1.ContentChild(moj_drag_and_drop_1.MojDragAndDropDirective, { static: true }),
        __metadata("design:type", moj_drag_and_drop_1.MojDragAndDropDirective)
    ], MojGridPanelComponent.prototype, "mojDragAndDrop", void 0);
    __decorate([
        core_1.ContentChild(moj_quick_filter_1.MojQuickFilterComponent, { static: true }),
        __metadata("design:type", moj_quick_filter_1.MojQuickFilterComponent)
    ], MojGridPanelComponent.prototype, "mojQuickFilter", void 0);
    __decorate([
        core_1.HostListener('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MojGridPanelComponent.prototype, "onResize", null);
    MojGridPanelComponent = __decorate([
        core_1.Component({
            selector: 'moj-grid-panel',
            templateUrl: 'moj-grid-panel.component.html',
            providers: [internal_grid_service_1.InternalGridService]
        }),
        __param(9, core_1.Optional()),
        __metadata("design:paramtypes", [internal_grid_service_1.InternalGridService,
            http_1.HttpClient,
            core_1.ChangeDetectorRef,
            core_1.ComponentFactoryResolver,
            moj_dialog_service_1.MojDialogService,
            core_2.TranslateService,
            moj_grid_service_1.GridService,
            moj_loading_service_1.MojLoadingService,
            utils_1.MojUtilsService,
            moj_form_service_1.MojFormService])
    ], MojGridPanelComponent);
    return MojGridPanelComponent;
}());
exports.MojGridPanelComponent = MojGridPanelComponent;
var identifier = 0;
//# sourceMappingURL=moj-grid-panel.component.js.map