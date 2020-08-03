import { Injectable } from '@angular/core'
import { GridActions } from './grid-actions.model';
import { MojSortValue } from '../sort/model/sort-value.model';

@Injectable()
export class InternalGridService {
    gridActions: GridActions = new GridActions();

    constructor() { }

    addClick() {
        this.gridActions.addClickSource.next();
    }

    deleteClick(item: any, nodeId: string) {
        this.gridActions.deleteClickSource.next({item:item, nodeId:nodeId});
    }

    editClick(item: any, nodeId: string) {
        this.gridActions.editClickSource.next({item:item, nodeId:nodeId});
    }

    saveClick() {
        this.gridActions.saveClickSource.next();
    }

    cancelClick() {
        this.gridActions.cancelClickSource.next();
    }

    duplicateClick(item: any) {
        this.gridActions.duplicateClickSource.next(item);  
    }

    quickFilter(value) {
        this.gridActions.quickFilterSource.next(value);
    }

    dataViewTypeChange(gridType) {
        this.gridActions.dataViewTypeChangeSource.next(gridType);
    }

    sortChange(sortValue:MojSortValue) {
        this.gridActions.sortChangeSource.next(sortValue);
    }

    selectRow() {
        this.gridActions.selectChangeSource.next();
    }
}