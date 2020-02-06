import { Subject } from 'rxjs';

export class GridActions {
    addClickSource = new Subject();
    deleteClickSource = new Subject<any>();
    editClickSource = new Subject<any>();
    saveClickSource = new Subject<any>();
    cancelClickSource = new Subject();
    duplicateClickSource = new Subject();
    quickFilterSource = new Subject();
    dataViewTypeChangeSource = new Subject();

    addClick$ = this.addClickSource.asObservable();
    deleteClick$ = this.deleteClickSource.asObservable();
    editClick$ = this.editClickSource.asObservable();
    saveClick$ = this.saveClickSource.asObservable();
    cancelClick$ = this.cancelClickSource.asObservable();
    duplicateClick$ = this.duplicateClickSource.asObservable();
    quickFilter$ = this.quickFilterSource.asObservable();
    dataViewTypeChangeSource$ = this.dataViewTypeChangeSource.asObservable();
}