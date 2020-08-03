import { Injectable } from "@angular/core";
import { GridState } from '@moj/moj-ng';

@Injectable()
export class StoreService {
    private gridExampleState: GridState;

    getGridExampleState() {
        return this.gridExampleState;
    }

    setGridExampleState(gridState: GridState) {
        this.gridExampleState = gridState;
    }
}