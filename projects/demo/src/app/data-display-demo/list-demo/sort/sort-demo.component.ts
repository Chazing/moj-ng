import { Component, OnInit } from "@angular/core";
import { ENUMS, Enums } from "@moj/moj-ng";

@Component({
    selector:'moj-sort-demo',
    templateUrl:'sort-demo.component.html'
})
export class SortDemoComponent implements OnInit{
    dropdownItems;
    data;
    Enums: Enums = ENUMS;

    ngOnInit(){
        this.data = [{id:1, name:'d', date: new Date(2020, 8, 20)},
            {id:2, name:'c', date: new Date(2020, 9, 20)},
            {id:3, name:'b', date: new Date(2020, 8, 21)},
            {id:4, name:'a', date: new Date(2020, 8, 20)}];

        this.dropdownItems = [{id:'id', name:'קוד'},
            {id:'name', name:'שם'},
            {id:'date', name:'תאריך'}];
    }
}