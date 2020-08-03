import { Component } from '@angular/core';
import { products } from '../products';
import { MojDataViewType, Enums, ENUMS } from 'projects/moj-ng';

@Component({
    selector: 'list-filter-demo',
    templateUrl: './list-filter-demo.component.html'
})
export class ListFilterDemoComponent {
    rowData = products;
    dataViewType = MojDataViewType;
    Enums: Enums = ENUMS;
}