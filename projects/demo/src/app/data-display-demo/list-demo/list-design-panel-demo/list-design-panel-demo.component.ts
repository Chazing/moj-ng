import { Component, OnInit } from '@angular/core';
import { Enums, ENUMS } from '../../../enums';

@Component({
    selector: 'list-design-panel-demo',
    templateUrl: './list-design-panel-demo.component.html'
})
export class ListDesignPanelDemoComponent implements OnInit {
    Enums: Enums = ENUMS;
    rowData = [{ fixed: true }, { fixed: true }, { fixed: true }];
    cols: number = 2;

    changeCols() {
        this.rowData = [{ fixed: true }, { fixed: true }, { fixed: true }, { fixed: true }, { fixed: true }, { fixed: true }, { fixed: true }, { fixed: true }, { fixed: true }, { fixed: true }, { fixed: true }, { fixed: true }];
    }

    constructor() { }

    ngOnInit() {
    }


}
