import { Component, OnInit } from "@angular/core";

@Component({
    selector:'moj-sort-example',
    templateUrl:'sort-example.component.html'
})
export class SortExampleComponent implements OnInit{
    dropdownItems;
    data;

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