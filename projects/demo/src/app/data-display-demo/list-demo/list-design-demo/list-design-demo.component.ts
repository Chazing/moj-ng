import { Component, OnInit } from '@angular/core';
import { TitleType, MojListItemType, MojDataViewType, FontWeight, MojColor } from '@moj/moj-ng';
import { Enums, ENUMS } from "../../../enums";

@Component({
    selector: 'list-design-demo',
    templateUrl: './list-design-demo.component.html',
    styleUrls: ['./list-design-demo.component.scss']
})
export class ListDesignDemoComponent implements OnInit {

    Enums: Enums = ENUMS;
    rowData = [{}, {}, {}];
    cols: number = 3;

    changeCols() {
        this.rowData = [{}, {}, {}, {}, {}, {}];
    }

    headerData = new Array({ key: "מספר בקשה/סימן", value: "256845", cssClass: "my-class" }, 
        { key: "לקוח מוביל", value: "G. DAES ASD" },
        { key: "מיופה כוח", value: "דר יצחק הס ושותפיו" }
    );

    constructor() { }

    ngOnInit() {
    }

}
