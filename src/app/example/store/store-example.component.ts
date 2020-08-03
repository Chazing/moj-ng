import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ExampleStore, ExampleData } from "./example-store.service";

@Component({
    selector: 'store-example',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'store-example.component.html'
})
export class StoreExampleComponent {
    key: string = "[Example]";
    exampleData: ExampleData = {};

    constructor(private exampleStore: ExampleStore) {
        this.exampleStore.updateState(this.exampleData);
        this.exampleData.arrayData = [1, 2, 3];
    }

    updateStore() {
        debugger
        let object1 = { data1: [3, 3], data2: 4 };
        let object2 = { data1: [1], data2: 1 };
        this.exampleStore.updateState({ objectData: { object1: object1, object2: object2 } });
        this.exampleStore.updateState({ objectData: { object1: object1, object2: object2} });
    }

    printToConsole() {
        console.log(this.exampleStore.getValue());
    }
}