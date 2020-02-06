import { Injectable } from '@angular/core'
import { GridActions } from './grid-actions.model';

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
}