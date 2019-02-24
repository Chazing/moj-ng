import { Component, ContentChild, Input, ViewChild, ComponentFactoryResolver, OnDestroy, ViewContainerRef, AfterViewInit, ChangeDetectorRef, Optional, HostListener } from '@angular/core';
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

@Component({
    selector: "moj-grid-panel",
    templateUrl: "moj-grid-panel.html",
    providers: [InternalGridService],
})
export class MojGridPanelComponent implements OnDestroy, AfterViewInit {
    @Input() editOptions: EditOptions = new EditOptions();
    @Input() gridDescription: string = "";
    @Input() gridId;
    @Input() addViewIconInResponsive: boolean = true;
    @Input() enableChangePageSize: boolean = false;
    private _editService: EditServiceBase;
    @Input('editService') set editService(value: EditServiceBase) {
        this._editService = value;
    }
    get editService(): EditServiceBase {
        if (this._editService == undefined)
            this._editService = new EditServiceBase(this.http);
        return this._editService;
    }
    isNew: boolean;
    inEdit: boolean; //add/edit
    editComponentRef; // save ref to destroy
    editComponent: EditComponentBase;
    editedNodeId: string; //index for edited item
    editType = EditType;
    labelId = `gridDescription${identifier++}`;
    @ViewChild("editComponentContainer", { read: ViewContainerRef }) editComponentContainer: ViewContainerRef;
    @ContentChild(AgGridNg2) grid: AgGridNg2
    @ContentChild(MojDragAndDropDirective) mojDragAndDrop: MojDragAndDropDirective;
    //for prevent unsubscribe for multiple subscriptions
    private alive: boolean = true;

    constructor(public internalGridService: InternalGridService, private http: HttpClient, private cdr: ChangeDetectorRef,
        private componentFactoryResolver: ComponentFactoryResolver, private dialogService: MojDialogService, private translate: TranslateService,
        private gridService: GridService, @Optional() private mojFormService: MojFormService) {
        internalGridService.gridActions.deleteClick$.subscribe(
            item => {
                this.delete(item.item, item.nodeId);
            });
        internalGridService.gridActions.editClick$.subscribe(
            item => {
                this.edit(item.item, item.nodeId);
            });
        internalGridService.gridActions.addClick$.subscribe(
            item => {
                this.add();
            });
        internalGridService.gridActions.saveClick$.subscribe(
            item => {
                this.save();
            });
        internalGridService.gridActions.cancelClick$.subscribe(
            item => {
                this.cancel();
            });
        internalGridService.gridActions.duplicateClick$.subscribe(
            item => {
                this.duplicate(item);
            });
        internalGridService.gridActions.quickFilter$.subscribe(
            value => {
                this.quickFilter(value);
            });
    }

    ngAfterContentInit() {
        if (this.mojDragAndDrop) { //for drag file to table
            this.mojDragAndDrop.fileDrop.subscribe((files) => {
                this.onDropFile(files);
            })
        }
    }

    createEditComponent() {
        if (this.editOptions.editComponentType) {
            let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.editOptions.editComponentType);


            if (this.editOptions.editType != EditType.ReplaceArea) {
                this.editComponentContainer.clear();
                this.editComponentRef = this.editComponentContainer.createComponent(componentFactory);
            }
            else {
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
                    if (!this.editComponentRef.hostView.destroyed)
                        this.editComponentRef.changeDetectorRef.detectChanges();
                }, 1000);
            }
        }
    }

    add() {
        if (this.editOptions.editType == EditType.Inline) {
            let data = this.editOptions.initInlineItem();
            if(this.editOptions.rowModelType == 'clientSide'){ //grid server side cannot update api
                this.addToGrid(data);
            }
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
        let deleteQuery;
        if (this.editOptions.deleteUrl) {
            deleteQuery = this.editService.deleteByUrl(this.editOptions.deleteUrl, rowData["ID"]);
        }
        else {
            deleteQuery = this.editService.delete(rowData);
        }

        deleteQuery.subscribe(result => {
            if (result) {
                let node: RowNode = this.grid.api.getRowNode(nodeId);
                if (this.editOptions.showDeletedRow && rowData.state != ObjectState.Added) {// don't remove when old row and showDeletedRow = true
                    rowData.state = ObjectState.Deleted;
                    if(this.editOptions.rowModelType == 'clientSide'){ //grid server side cannot update api
                        node.setData(rowData);
                    }
                }
                else {
                    if(this.editOptions.rowModelType == 'clientSide'){ //grid server side cannot update api
                        this.grid.api.removeItems([node]);
                    }
                }
            }
            this.editService.afterDelete(rowData);
        });
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
        this.cdr.detectChanges();
    }

    addToGrid(item): string {
        item.state = ObjectState.Added;
        let rowNodeTransaction = this.grid.api.updateRowData({ add: [item] });
        if (rowNodeTransaction.add.length > 0) {
            return rowNodeTransaction.add[0].id;
        }
    }

    save() {
        let editedItem = this.editComponent.editedItem;
        if (this.editComponent.ngForm.valid) {
            if (this.editService.beforeSave(this.gridService.getRowData(this.grid.api), editedItem) == false) {
                return;
            }
            let saveQuery;
            if (this.editOptions.saveUrl) {
                saveQuery = this.editService.saveByUrl(this.editOptions.saveUrl, editedItem, this.editOptions.saveUrlWithCredentials);
            }
            else {
                saveQuery = this.editService.save(editedItem, this.isNew);
            }

            saveQuery.subscribe(data => {
                if (data) {
                    if (this.isNew) {
                        if(this.editOptions.rowModelType == 'clientSide'){ //grid server side cannot update api
                            this.addToGrid(data);
                        }
                    } else {
                        //edit new row - remain new status
                        data.state = editedItem.state == ObjectState.Added ? ObjectState.Added : ObjectState.Edited;
                        if(this.editOptions.rowModelType == 'clientSide'){ //grid server side cannot update api
                            let node: RowNode = this.grid.api.getRowNode(this.editedNodeId);
                            node.setData(data);
                        }
                    }
                    this.inEdit = false;
                    this.returnToGrid();
                    this.editService.afterSave(data);
                }
            });
        }
    }

    duplicate(data) {
        let nodeId
        if(this.editOptions.rowModelType == 'clientSide'){ //grid server side cannot update api
            nodeId = this.addToGrid(data);
        }
        this.editService.afterDuplicate(data, nodeId);
    }

    quickFilter(value) {
        this.grid.api.setQuickFilter(value);
    }

    onDropFile(files) { //on drop files to table, open add and set the files to editComponent
        if (files && files.length > 0) {
            this.add();
            (<EditComponentWithFileBase>this.editComponent).filesToAdd = files;
        }
    }

    ngAfterViewInit(): void {
        this.setGridDescribedby();
        this.gridEventsSubscription();
    }

    private gridEventsSubscription() {
        //use takeWhile(() => this.alive) for prevent unsubscribe
        this.grid.cellFocused.pipe(takeWhile(() => this.alive)).subscribe(params => {
            this.bindActionCellsClickEvent(params);
        });
        this.grid.gridSizeChanged.pipe(takeWhile(() => this.alive)).subscribe(params => {
            this.addKeyboardNavigationToheader(params);
        })
        this.grid.gridReady.pipe(takeWhile(() => this.alive)).subscribe(params => {
            this.changeColumnsVisibilityForResponsive();
        })
        //put the component in the grid context, then we can access to component members in callbacks
        //see in ag-grid documentation: https://www.ag-grid.com/javascript-grid-context/
        this.grid.gridOptions.context = this;
        this.grid.cellClicked.pipe(takeWhile(() => this.alive)).subscribe((params) => {
            this.openViewDetilsDialog(params);
        });
    }

    private openViewDetilsDialog(params: any) {
        if (params.colDef.refData != null && params.colDef.refData.isViewDetails) {
            var data = {
                columns: params.columnApi.getAllColumns(),
                data: params.data
            };
            var dialogHeaderTitle = (<MojGridPanelComponent>params.context).translate.instant("MojTexts.rowDetails");
            (<MojGridPanelComponent>params.context).dialogService.openDialog(dialogHeaderTitle, MojViewRowDetailsComponent, 300, null, data);
        }
    }

    private bindActionCellsClickEvent(params: any) {
        if (this.isActionColumn(params.column)) {
            var columnElement = document.querySelector("div[col-id='" + params.column.colId + "'].ag-cell-focus");
            columnElement.removeEventListener('keydown', this.handelColumnKeydown);
            columnElement.addEventListener('keydown', this.handelColumnKeydown);
        }
    }

    private setGridDescribedby() {
        //because the grid is not html table, there is no summary, but aria-describedby
        (<any>this.grid.api).gridPanel.eBody.parentElement.setAttribute('aria-describedby', this.labelId);
    }

    private handelColumnKeydown(e: any) {
        if (e.key === 'Enter') {
            var elementToClick;
            elementToClick = e.currentTarget.querySelector('button') || e.currentTarget.querySelector('a') || e.currentTarget.querySelector('input');
            if (elementToClick)
                elementToClick.click()
        }
    }

    private isActionColumn(column): boolean {
        return column && column.colDef.refData && column.colDef.refData.isAction == "true";
    }

    private isHiddenColumn(column): boolean {
        return column && column.colDef.refData && column.colDef.refData.isHiddenColumn == "true";
    }

    private addKeyboardNavigationToheader(params: any) {
        var columns = params.columnApi.getAllDisplayedColumns();
        var tabIndex: number = 0;
        var sortOptions: string[] = ["asc", "desc", "none"];
        for (let index = 0; index < columns.length; index++) {
            var headerElement = document.querySelector("div[col-id='" + columns[index].colId + "'] div.ag-header-cell-label");
            if (headerElement != null) {
                // for each column set a tabindex, otherwise it wont be able to get focus
                headerElement.setAttribute("tabindex", (tabIndex).toString());
                headerElement.addEventListener('keydown', function (e: any) {
                    if (e.key === 'Enter') {
                        // on enter sort the column
                        // you'll probably want to cycle through asc/desc/none here for each enter pressed
                        var currentSort = params.api.getSortModel().filter(x => x.colId == columns[index].colId);
                        var currentSortMode = currentSort.length > 0 ? currentSort[0].sort : '';
                        var sortOptionIndex = sortOptions.indexOf(currentSortMode);
                        sortOptionIndex = sortOptionIndex == sortOptions.length - 1 ? 0 : ++sortOptionIndex;
                        var sort = [
                            { colId: columns[index].colId, sort: sortOptions[sortOptionIndex] }
                        ];
                        params.api.setSortModel(sort);
                    }
                });
            }
        }

    }

    private addRemoveViewDetailsCol(columns: Column[], toRemove: boolean = false) {
        var isExistsViewDetails = columns.filter(x => {
            if (x.getColDef().refData == null)
                return false;
            else if (x.getColDef().refData.isViewDetails)
                return true;
        });
        if (!toRemove && this.addViewIconInResponsive) {
            if (isExistsViewDetails.length == 0) {
                var newCol: ColDef = {};
                newCol.cellRenderer = function (params) {
                    return '<i class="fas fa-eye" title="לצפיה בפרטי הרשומה"></i>';
                }
                newCol.width = 40;
                newCol.minWidth = 40;
                newCol.maxWidth = 40;
                newCol.headerName = "";
                newCol.colId = "ViewDetails";
                newCol.refData = { isViewDetails: "true" };
                this.grid.columnDefs.unshift(newCol);
                this.grid.api.setColumnDefs(this.grid.columnDefs);
                this.grid.columnApi.moveColumn("ViewDetails", 0);
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
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.changeColumnsVisibilityForResponsive(event.target.innerWidth);
    }

    changeColumnsVisibilityForResponsive(deviceWidth?: number) {
        var params = this.grid;
        deviceWidth = deviceWidth ? deviceWidth : document.getElementById('grid-wrapper').offsetWidth;
        var allColumns = params.columnApi.getAllColumns();
        if (allColumns && allColumns.length) {
            // show/hide columns based on current grid width
            if (deviceWidth < 767) {
                for (var i = 0; i < allColumns.length; i++) {
                    let column = allColumns[i];
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
                allColumns.filter(v => !this.isHiddenColumn(v)).forEach(element => {
                    params.columnApi.setColumnVisible(element.getColId(), true);
                });
                this.addRemoveViewDetailsCol(allColumns, true);
            }
            params.api.sizeColumnsToFit();
        }
    }

    ngOnDestroy() {
        if (this.editComponentRef) {
            this.editComponentRef.destroy();
        }
        this.alive = false;
    }
}

let identifier = 0;
