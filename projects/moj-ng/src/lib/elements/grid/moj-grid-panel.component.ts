﻿import { MojUtilsService } from './../../shared/utils';
import {
    Component,
    ContentChild,
    Input,
    ViewChild,
    ComponentFactoryResolver,
    OnDestroy,
    ViewContainerRef,
    AfterViewInit,
    ChangeDetectorRef,
    Optional,
    HostListener,
    EventEmitter
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InternalGridService } from './service/internal-grid.service';
import { EditComponentBase } from './edit-component/edit-component.base';
import { EditOptions, EditType } from './edit-component/edit-options.model';
import { AgGridNg2 } from 'ag-grid-angular';
import { EditServiceBase } from './service/edit-service.base';
import { takeWhile } from 'rxjs/operators';
import { ColDef, Column, RowNode } from 'ag-grid-community';
import { MojDialogService } from '../../messages/moj-dialog.service';
import { MojViewRowDetailsComponent } from './view-row-details/view-row-details.component';
import { TranslateService } from '@ngx-translate/core';
import { ObjectState } from '../general/general.enum';
import { MojDragAndDropDirective } from '../../directives/moj-drag-and-drop';
import { EditComponentWithFileBase } from './edit-component/edit-component-with-file.base';
import { GridService } from './service/moj-grid.service';
import { MojFormService } from '../../directives/moj-form.service';
import { MojLoadingService } from '../moj-loading/moj-loading.service';
import { MojDataViewType } from './models/dataview-type.enum';
import { DataView } from 'primeng/dataview';
import { MojQuickFilterComponent } from './filters/moj-quick-filter';
import { MojSortValue } from './sort/model/sort-value.model';
import { MojDataViewToggleComponent } from './list-view/moj-list-design-toggle.component';
import { ThrowStmt } from '@angular/compiler';


@Component({
    selector: 'moj-grid-panel',
    templateUrl: 'moj-grid-panel.component.html',
    providers: [InternalGridService]
})
export class MojGridPanelComponent implements OnDestroy, AfterViewInit {
    @Input() editOptions: EditOptions = new EditOptions();
    @Input() gridDescription: string = '';
    @Input() gridId;
    @Input() addViewIconInResponsive: boolean = true;
    @Input() supportResponsive: boolean = true;
    @Input() enableChangePageSize: boolean = false;
    @Input() dataViewType: MojDataViewType = MojDataViewType.Grid;
    isOnPageFirstIteration:boolean=true;

    private _editService: EditServiceBase;
    @Input('editService') set editService(value: EditServiceBase) {
        this._editService = value;
    }
    get editService(): EditServiceBase {
        if (this._editService == undefined) this._editService = new EditServiceBase(this.http);
        return this._editService;
    }

    dataViewTypeEnum = MojDataViewType;
    isNew: boolean;
    inEdit: boolean; //add/edit
    editComponentRef; // save ref to destroy
    editComponent: EditComponentBase;
    editedNodeId: string; //index for edited item
    editType = EditType;
    labelId = `gridDescription${identifier++}`;

    @ViewChild('editComponentContainer', { read: ViewContainerRef, static: false }) editComponentContainer: ViewContainerRef;
    @ViewChild('overlayEditDiv', { read: ViewContainerRef, static: false }) overlayEditDiv: ViewContainerRef;
    @ViewChild('panelDiv', { read: ViewContainerRef, static: false }) panelDiv: ViewContainerRef;

    @ContentChild(AgGridNg2, { static: false }) grid: AgGridNg2;
    @ContentChild(AgGridNg2, { read: ViewContainerRef, static: false }) gridEl: ViewContainerRef;
    @ContentChild("listView", { read: DataView, static: false }) dataView: DataView;
    @ContentChild("listView", { read: ViewContainerRef, static: false }) dataViewEl: ViewContainerRef;
    @ContentChild(MojDragAndDropDirective, { static: false }) mojDragAndDrop: MojDragAndDropDirective;
    @ContentChild(MojQuickFilterComponent, { static: false }) mojQuickFilter: MojQuickFilterComponent; //for save grid state
    @ContentChild(MojDataViewToggleComponent, { static: false })viewtoggle: MojDataViewToggleComponent;
    //for prevent unsubscribe for multiple subscriptions
    private alive: boolean = true;

    constructor(
        public internalGridService: InternalGridService,
        private http: HttpClient,
        private cdr: ChangeDetectorRef,
        private componentFactoryResolver: ComponentFactoryResolver,
        private dialogService: MojDialogService,
        private translate: TranslateService,
        private gridService: GridService,
        private loadingService: MojLoadingService,
        private utilsService: MojUtilsService,
        @Optional() private mojFormService: MojFormService
    ) {
        internalGridService.gridActions.deleteClick$.subscribe(item => {
            this.delete(item.item, item.nodeId);
        });
        internalGridService.gridActions.editClick$.subscribe(item => {
            this.edit(item.item, item.nodeId);
        });
        internalGridService.gridActions.addClick$.subscribe(item => {
            this.add();
        });
        internalGridService.gridActions.saveClick$.subscribe(item => {
            this.save();
        });
        internalGridService.gridActions.cancelClick$.subscribe(item => {
            this.cancel();
        });
        internalGridService.gridActions.duplicateClick$.subscribe(item => {
            this.duplicate(item);
        });
        internalGridService.gridActions.quickFilter$.subscribe(value => {
            this.quickFilter(value);
        });
        internalGridService.gridActions.dataViewTypeChangeSource$.subscribe((type: MojDataViewType) => {
            this.changeDataViewType(type);
        });
        internalGridService.gridActions.sortChange$.subscribe((sortValue: MojSortValue) => {
            this.sort(sortValue);
        });
    }

    ngAfterContentInit() {
        if(this.viewtoggle)
        {
           this.viewtoggle.dataViewType = this.dataViewType;
            setTimeout(() => {
                this.changeDataViewType(this.dataViewType);
           }, 50);
        }
        if (this.mojDragAndDrop) {
            //for drag file to table
            this.mojDragAndDrop.fileDrop.subscribe(files => {
                this.onDropFile(files);
            });

        }

        if (this.dataView) {
            this.dataView.onPage = new EventEmitter<any>();
            this.dataView.onPage.subscribe(event => this.onPage(event));
            this.onPage({first:1,rows:this.dataView.rows})

            //translate empty message
            if (this.dataView.emptyMessage == 'No records found') {
                this.dataView.emptyMessage = 'MojTexts.grid.noRowsToShow'
            }
            if (this.dataView.emptyMessage) {
                this.dataView.emptyMessage = this.translate.instant(this.dataView.emptyMessage);
            }
        }
       
        if(this.mojQuickFilter && this.mojQuickFilter.filterBy && this.dataView){
            this.dataView.filterBy = this.mojQuickFilter.filterBy;
        }
    }
    onPage = (event) => {      
        if(event==null)
        {
            event={first:this.dataView.first,rows:this.dataView.rows};
        }
        
        let rowsInPageText = " " + this.translate.instant("MojTexts.grid.rowsInPage") + " ";
        let pageText = this.translate.instant("MojTexts.grid.page") + " ";
        let ofText = " " + this.translate.instant("MojTexts.grid.of") + " ";
        let resultsText = " " + this.translate.instant("MojTexts.grid.results") + " ";
        let displayOfText = this.translate.instant("MojTexts.grid.displayOf") + " ";
        let toText = " " + this.translate.instant("MojTexts.grid.to") + " ";
        if(event.first==1)
        {
            event.first=0;
        }
        let torows=(event.first + event.rows)
        if(this.dataView.totalRecords<torows)
           torows=this.dataView.totalRecords;
        let currentPageReportTemplate = " " + pageText + ' {currentPage}' + ofText + '{totalPages} | '
         +displayOfText + (torows > 0 ? event.first+1:0) + toText + torows + rowsInPageText + ofText + this.dataView.totalRecords + resultsText;
        this.dataView.currentPageReportTemplate = currentPageReportTemplate;

        
        //for list data by subsciption 
        if(this.dataView.totalRecords==0 && this.isOnPageFirstIteration==true)
        {
            this.isOnPageFirstIteration=false;
            setTimeout(() => {
                this.onPage(null);
            }, 4000);
        }

    }
    createEditComponent() {
        if (this.editOptions.editComponentType) {
            let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.editOptions.editComponentType);

            if (this.editOptions.editType != EditType.ReplaceArea) {
                this.editComponentContainer.clear();
                this.editComponentRef = this.editComponentContainer.createComponent(componentFactory);
            } else {
                this.editComponentRef = this.editOptions.hideAreaOnEdit.createComponent(componentFactory);
            }
            if (this.editComponentRef) {
                this.editComponent = <EditComponentBase>this.editComponentRef.instance;
                this.editComponent.internalGridService = this.internalGridService;
                if (this.editOptions.data) {
                    this.editComponent.data = this.editOptions.data;
                }
                //this fix bug that edit component sometimes not shown
                setTimeout(() => {
                    if (!this.editComponentRef.hostView.destroyed) this.editComponentRef.changeDetectorRef.detectChanges();
                }, 1000);
            }
        }
    }

    add() {
        if (this.editOptions.editType == EditType.Inline) {
            let data = this.editOptions.initInlineItem();
            this.addToDataSource(data);
            return;
        }
        this.isNew = true;
        this.inEdit = true;
        if (this.mojFormService) {
            this.mojFormService.setGridEditState(true);
        }
        if (this.editOptions.editType == EditType.ReplaceArea) {
            this.editOptions.hideAreaOnEdit.element.nativeElement.style.display = 'none';
        }
        this.createEditComponent();
        this.editComponent.initItem(null);
    }

    edit(rowData, nodeId) {
        this.isNew = false;
        this.inEdit = true;
        this.editedNodeId = nodeId;
        if (this.mojFormService) {
            this.mojFormService.setGridEditState(true);
        }
        if (this.editOptions.editType == EditType.ReplaceArea) {
            this.editOptions.hideAreaOnEdit.element.nativeElement.style.display = 'none';
        }
        this.createEditComponent();
        this.editComponent.initItem(rowData);
    }

    delete(rowData, nodeId) {
        this.loadingService.show(this.panelDiv);
        this.cdr.detectChanges();
        let deleteQuery;
        if (this.editOptions.deleteUrl) {
            deleteQuery = this.editService.deleteByUrl(this.editOptions.deleteUrl, rowData['ID']);
        } else {
            deleteQuery = this.editService.delete(rowData);
        }

        deleteQuery.subscribe(result => {
            if (result) {
                if (this.dataViewType == MojDataViewType.Grid) {
                    this.deleteFromAgGrid(nodeId, rowData);
                }
                else {
                    this.deleteFromDataView(nodeId, rowData);
                }
            }
            this.editService.afterDelete(rowData);
            this.loadingService.hide();
            this.cdr.detectChanges();
        }, error => {
            this.loadingService.hide();
            this.cdr.detectChanges();
        });
    }

    private deleteFromAgGrid(nodeId, rowData) {
        let node: RowNode = this.grid.api.getRowNode(nodeId);
        if (this.editOptions.showDeletedRow && rowData.state != ObjectState.Added) {
            // don't remove when old row and showDeletedRow = true
            let deletedData = { ...rowData }; //dont change origin row data, for enable cancel gris changes
            deletedData.state = ObjectState.Deleted;
            if (this.grid.gridOptions.rowModelType != 'serverSide') {
                //grid server side cannot update api
                node.setData(deletedData);
                this.gridService.throwRowDataUpdatedEvent(this.grid.api, this.grid.columnApi);
            }
        } else {
            if (this.grid.gridOptions.rowModelType != 'serverSide') {
                //grid server side cannot update api
                this.grid.api.updateRowData({ remove: [rowData] });
            }
        }
    }

    private deleteFromDataView(nodeId, rowData) {
        var index = this.dataView.value.findIndex(x => x.nodeId == nodeId);
        if (this.editOptions.showDeletedRow && rowData.state != ObjectState.Added) {
            // don't remove when old row and showDeletedRow = true
            let deletedData = { ...rowData }; //dont change origin row data, for enable cancel gris changes
            deletedData.state = ObjectState.Deleted;
            this.dataView.value[index] = deletedData;
        } else {
            this.dataView.value.splice(index, 1);
        }
    }

    cancel() {
        this.inEdit = false;
        this.returnToGrid();
    }

    returnToGrid() {
        if (this.editOptions.editType == EditType.ReplaceArea) {
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
    }

    addToDataSource(item): string {
        item.state = ObjectState.Added;
        if (this.dataViewType == MojDataViewType.Grid) {
            if (this.grid.gridOptions.rowModelType != 'serverSide') {
                //grid server side cannot update api
                let rowNodeTransaction = this.grid.api.updateRowData({ add: [item] });
                if (rowNodeTransaction.add.length > 0) {
                    return rowNodeTransaction.add[0].id;
                }
            }
        }
        else {
            this.dataView.value.push(item);
        }
    }

    async save() {
        let editedItem = this.editComponent.editedItem;
        let rowData;
        if (this.dataViewType == MojDataViewType.Grid)
            rowData = this.gridService.getRowData(this.grid.api)
        else
            rowData = this.dataView.value;
        if (this.editComponent.ngForm.valid) {
            this.loadingService.show(this.overlayEditDiv);
            this.cdr.detectChanges();

            if (await this.editService.beforeSave(rowData, editedItem) == false) {
                return;
            }
            let saveQuery;
            if (this.editOptions.saveUrl) {
                saveQuery = this.editService.saveByUrl(
                    this.editOptions.saveUrl,
                    editedItem,
                    this.editOptions.saveUrlWithCredentials
                );
            } else {
                saveQuery = this.editService.save(editedItem, this.isNew);
            }

            saveQuery.subscribe(data => {
                if (data) {
                    if (this.isNew) {
                        this.addToDataSource(data);
                    } else {
                        //edit new row - remain new status
                        data.state = editedItem.state == ObjectState.Added ? ObjectState.Added : ObjectState.Edited;
                        if (this.dataViewType == MojDataViewType.Grid) {
                            if (this.grid.gridOptions.rowModelType != 'serverSide') {
                                //grid server side cannot update api
                                let node: RowNode = this.grid.api.getRowNode(this.editedNodeId);
                                node.setData(data);
                                this.gridService.throwRowDataUpdatedEvent(this.grid.api, this.grid.columnApi);
                            }
                        }
                        else {
                            var index = this.dataView.value.findIndex(x => x.nodeId == this.editedNodeId);
                            this.dataView.value[index] = data;
                        }
                    }
                    this.inEdit = false;
                    this.returnToGrid();
                    this.editService.afterSave(data);
                }
                this.loadingService.hide();
                this.cdr.detectChanges();
            }, error => {
                this.loadingService.hide();
                this.cdr.detectChanges();
            });
        }
    }

    duplicate(data) {
        let nodeId;
        nodeId = this.addToDataSource(data);
        this.editService.afterDuplicate(data, nodeId);
    }

    quickFilter(value) {
        if(this.grid){
            this.grid.api.setQuickFilter(value);
        }
        if(this.dataView && this.dataView.filterBy){
            this.dataView.filter(value,"contains");
        }
    }

    sort(sortValue:MojSortValue){
        if(sortValue.data && this.dataView){
            this.dataView.value = sortValue.data;
        }
    }

    onDropFile(files) {
        //on drop files to table, open add and set the files to editComponent
        if (files && files.length > 0) {
            this.add();
            (<EditComponentWithFileBase>this.editComponent).filesToAdd = files;
        }
    }

    ngAfterViewInit(): void {



        if (this.grid) {
            this.setGridDescribedby();
            this.gridEventsSubscription();
        }
        if (this.dataView && this.dataView.value) {
            let cloned = this.dataView.value.map((obj, index) => ({ ...obj, nodeId: index }));
            this.dataView.value = cloned;
        }
    }

    private gridEventsSubscription() {
        //use takeWhile(() => this.alive) for prevent unsubscribe
        this.grid.cellFocused.pipe(takeWhile(() => this.alive)).subscribe(params => {
            this.bindActionCellsClickEvent(params);
        });
        this.grid.gridSizeChanged.pipe(takeWhile(() => this.alive)).subscribe(params => {
            this.addKeyboardNavigationToHeader(params);
        });
        this.grid.gridReady.pipe(takeWhile(() => this.alive)).subscribe(params => {
            this.changeColumnsVisibilityForResponsive();
        });
        //put the component in the grid context, then we can access to component members in callbacks
        //see in ag-grid documentation: https://www.ag-grid.com/javascript-grid-context/
        this.grid.gridOptions.context = this;
        this.grid.cellClicked.pipe(takeWhile(() => this.alive)).subscribe(params => {
            this.openViewDetilsDialog(params);
        });
    }

    private openViewDetilsDialog(params: any) {
        if (params.colDef.refData != null && params.colDef.refData.isViewDetails) {
            var data = {
                columns: params.columnApi.getAllColumns(),
                data: params.data
            };
            var dialogHeaderTitle = (<MojGridPanelComponent>params.context).translate.instant('MojTexts.rowDetails');
            (<MojGridPanelComponent>params.context).dialogService.openDialog(
                dialogHeaderTitle,
                MojViewRowDetailsComponent,
                300,
                null,
                data
            );
        }
    }

    private bindActionCellsClickEvent(params: any) {
        if (this.isActionColumn(params.column)) {
            var columnElement = document.querySelector("div[col-id='" + params.column.colId + "'].ag-cell-focus");
            if (columnElement) {
                columnElement.removeEventListener('keydown', this.handelColumnKeydown);
                columnElement.addEventListener('keydown', this.handelColumnKeydown);
            }
        }
    }

    private setGridDescribedby() {
        //because the grid is not html table, there is no summary, but aria-describedby
        (<any>this.grid.api).gridPanel.eBody.parentElement.setAttribute('aria-describedby', this.labelId);
    }

    private handelColumnKeydown(e: any) {
        if (e.key === 'Enter') {
            var elementToClick;
            elementToClick =
                e.currentTarget.querySelector('button') ||
                e.currentTarget.querySelector('a') ||
                e.currentTarget.querySelector('input');
            if (elementToClick) elementToClick.click();
        }
    }

    private isActionColumn(column): boolean {
        return column && column.colDef.refData && column.colDef.refData.isAction == 'true';
    }

    private isHiddenColumn(column): boolean {
        //fix bug of dinamic hiddencols
        let hiddenColumn = null;
        let columnState = this.grid.columnApi.getColumnState()
        if (columnState) {
            hiddenColumn = columnState.filter(v => v.hide && v.colId == column.colId);
        }

        return !(hiddenColumn == null || hiddenColumn.length == 0) || column && column.colDef.refData && column.colDef.refData.isHiddenColumn == 'true';


    }

    private addKeyboardNavigationToHeader(params: any) {
        var columns = params.columnApi.getAllDisplayedColumns();
        var tabIndex: number = 0;
        var sortOptions: string[] = ['asc', 'desc', 'none'];
        for (let index = 0; index < columns.length; index++) {
            var headerElement = document.querySelector("div[col-id='" + columns[index].colId + "'] div.ag-header-cell-label");
            if (headerElement != null) {
                // for each column set a tabindex, otherwise it wont be able to get focus
                headerElement.setAttribute('tabindex', tabIndex.toString());
                headerElement.addEventListener('keydown', function (e: any) {
                    if (e.key === 'Enter') {
                        // on enter sort the column
                        // you'll probably want to cycle through asc/desc/none here for each enter pressed
                        var currentSort = params.api.getSortModel().filter(x => x.colId == columns[index].colId);
                        var currentSortMode = currentSort.length > 0 ? currentSort[0].sort : '';
                        var sortOptionIndex = sortOptions.indexOf(currentSortMode);
                        sortOptionIndex = sortOptionIndex == sortOptions.length - 1 ? 0 : ++sortOptionIndex;
                        var sort = [{ colId: columns[index].colId, sort: sortOptions[sortOptionIndex] }];
                        params.api.setSortModel(sort);
                    }
                });
            }
        }
    }

    private addRemoveViewDetailsCol(columns: Column[], toRemove: boolean = false) {
        var isExistsViewDetails = columns.filter(x => {
            if (x.getColDef().refData == null) return false;
            else if (x.getColDef().refData.isViewDetails) return true;
        });
        if (!toRemove && this.addViewIconInResponsive) {
            if (isExistsViewDetails.length == 0) {
                var newCol: ColDef = {};
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
            } else {
                this.grid.columnApi.setColumnVisible(isExistsViewDetails[0].getColId(), true);
            }
            this.grid.api.sizeColumnsToFit();
        } else if (toRemove && isExistsViewDetails.length > 0) {
            this.grid.columnApi.setColumnVisible(isExistsViewDetails[0].getColId(), false);
            this.grid.api.sizeColumnsToFit();
        }
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (this.grid)
            this.changeColumnsVisibilityForResponsive(event.target.innerWidth);
    }

    changeColumnsVisibilityForResponsive(deviceWidth?: number) {
        if (this.grid) {
            var params = this.grid;
            let isMobile = this.utilsService.isMobile();
            var allColumns = params.columnApi.getAllColumns();
            if (allColumns && allColumns.length) {
                // show/hide columns based on current grid width
                if (isMobile && this.supportResponsive) {
                    for (var i = 0; i < allColumns.length; i++) {
                        let column = allColumns[i];
                        //in responsive mode- display only the two first columns and action columns
                        if (i > 1 && !this.isActionColumn(column)) params.columnApi.setColumnVisible(column.getColId(), false);
                        else if (!this.isHiddenColumn(column)) {
                            params.columnApi.setColumnVisible(column.getColId(), true);
                            if (i == 0 && allColumns.length > 2) {
                                this.addRemoveViewDetailsCol(allColumns);
                            }
                        }
                    }
                } else {
                    allColumns
                        .filter(v => !this.isHiddenColumn(v))
                        .forEach(element => {
                            params.columnApi.setColumnVisible(element.getColId(), true);
                        });
                    this.addRemoveViewDetailsCol(allColumns, true);
                }
                params.api.sizeColumnsToFit();
            }
        }
    }

    private changeDataViewType(type: MojDataViewType) {
        if (type == undefined) {
            if (this.gridEl && !this.dataViewEl) type = MojDataViewType.Grid;
            if (this.dataViewEl && !this.gridEl) type = MojDataViewType.List;
        }
        this.dataViewType = type;
        if (this.gridEl) {
            this.gridEl.element.nativeElement.style.display = this.dataViewType == MojDataViewType.Grid ? "block" : "none";
            this.grid.api.sizeColumnsToFit();
        }
        if (this.dataViewEl)
            this.dataViewEl.element.nativeElement.style.display = this.dataViewType == MojDataViewType.List ? "block" : "none";
    }

    ngOnDestroy() {
        if (this.editComponentRef) {
            this.editComponentRef.destroy();
        }
        this.alive = false;
    }
}

let identifier = 0;
