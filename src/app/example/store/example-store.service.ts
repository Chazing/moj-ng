import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Store } from '@moj/moj-ng';

export class ExampleData {
    arrayData?:number[];
    numberData?:number;
    stringData?:string;
    objectData?:{
        object1:{
            data1:number[];
            data2:number;
        }
        object2:{
            data1:number[];
            data2:number;
        }
    }
}

@Injectable({
    providedIn: 'root'
})
export class ExampleStore extends Store<ExampleData> {
    key: "[ExampleData]";

    constructor() {
        super("[ExampleData]", new ExampleData());
    }

    getExampleData(): ExampleData {
        return this.getValue();
    }

    getExampleState(): Observable<ExampleData> {
        return this.select();
    }

    updateExampleData(exampleData: ExampleData) {
        this.updateState(exampleData);
    }
}