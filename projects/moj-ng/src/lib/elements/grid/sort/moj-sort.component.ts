import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MojSortOrder } from './enum/moj-sort.enum';
import { MojSortValue } from './model/sort-value.model';
import { InternalGridService } from '../service/internal-grid.service';

@Component({
    selector: "moj-sort",
    templateUrl: "moj-sort.component.html",
    styleUrls:['moj-sort.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MojSortComponent {
    @Input() dropdownItems:any[];
    @Input() data:any[];//data to sort
    @Input() fieldName: string = 'name';
    @Input() fieldID: string = 'id';
    @Input() isObjectModel: boolean = false;
    @Input() selectedItem:any;
    @Input() sortOrder:MojSortOrder = MojSortOrder.Asc;
    @Input() sortText: string = "MojTexts.sortText";

    mojSortOrder = MojSortOrder;

    @Output()
    onItemChange = new EventEmitter();
    @Output()
    onOrderChange = new EventEmitter<MojSortOrder>();
    @Output()
    onSortChange = new EventEmitter<MojSortValue>();

    constructor(private internalGridService: InternalGridService){}

    getSelectedItem(){
        if(this.isObjectModel && this.selectedItem){
            return this.selectedItem[this.fieldID];
        }
        else{
            return this.selectedItem;
        }
    }

    itemChange(event: any){
        this.sortChange();
        this.onItemChange.emit(this.getSelectedItem());
    }

    sortOrderChange(){
        if(this.sortOrder == MojSortOrder.Asc){
            this.sortOrder = MojSortOrder.Desc;
        }
        else{
            this.sortOrder = MojSortOrder.Asc;
        }
        this.sortChange();
        this.onOrderChange.emit(this.sortOrder);
    }

    sortChange(){
        if(this.data && this.selectedItem){
            this.sort();
            if(this.internalGridService){ //emit event to grid panel
                this.internalGridService.sortChange(
                    {selectedItem:this.getSelectedItem(), 
                    sortOrder:this.sortOrder,
                    data:this.data});
            }
        }
        this.onSortChange.emit( //emit event
            {selectedItem:this.getSelectedItem(), 
            sortOrder:this.sortOrder,
            data:this.data});
    }

    sort(){
        this.data.sort((a, b) => { 
            if(this.fieldID && this.selectedItem[this.fieldID]){
                //to handle undefined look in ag-grid utils
                let textA = a[this.selectedItem[this.fieldID]];
                let textB = b[this.selectedItem[this.fieldID]];

                let aHasValue = textA !== undefined;
                let bHasValue = textB !== undefined;

                if(aHasValue && bHasValue){
                    if(typeof textA == 'string' || typeof textB == 'string'){
                        if (textA < textB) return this.sortOrder == this.mojSortOrder.Asc? -1 : 1;
                        if (textA > textB) return this.sortOrder == this.mojSortOrder.Asc? 1 : -1;
                            return 0;
                        }
                        else{
                            return this.sortOrder == this.mojSortOrder.Asc? textA - textB : textB - textA;
                        }
                }
                else if(!aHasValue && !bHasValue){
                    return 0;
                }
                else if(aHasValue){
                    return this.sortOrder == this.mojSortOrder.Asc? 1 : -1;
                }
                else if(bHasValue){
                    return this.sortOrder == this.mojSortOrder.Asc? -1 : 1;
                }
                
            }
        });
    }
}