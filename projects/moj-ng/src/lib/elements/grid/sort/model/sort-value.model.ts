import { MojSortOrder } from '../enum/moj-sort.enum';

export class MojSortValue {
    selectedItem?:number | {};
    sortOrder?:MojSortOrder;
    data?:any[];
}