import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

export class EditServiceBase {

    constructor( protected http: HttpClient) { }
    

    beforeSave(rowData:any,editedItem: any): boolean {// grid for submit
        return true;
    }

    save(editedItem: any, isNew: boolean): Observable<any> {// grid for submit
        return of(editedItem);
    }

    saveByUrl(saveURL: string, rowData: any, withCredentials: boolean = false) {
        return this.http.post(saveURL, rowData, { withCredentials: withCredentials });
    }

    afterSave(savedItem: any): void {// grid for submit
    }

    delete(editedItem: any): Observable<any> {// grid for submit
        return of(true);
    }

    deleteByUrl(deleteURL: string, id: number) {
        return this.http.delete(deleteURL + '/' + id);
    }

    afterDelete(deletedItem: any): void {// grid for submit
    }

    afterDuplicate(duplicatedItem:any, nodeId:string){
    }
}