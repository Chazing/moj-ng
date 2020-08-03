import { Component, Input, Output, EventEmitter } from "@angular/core";
import { InternalGridService } from "../service/internal-grid.service";

@Component({
    selector: "moj-quick-filter",
    template: `<moj-textbox (input)="onInput($event.target.value)"
                [labelTextKey]="filterText"></moj-textbox>`
})
export class MojQuickFilterComponent {

    @Input() filterText: string = "MojTexts.filterText";

    @Input() filterBy: string;//example:a,b //support only list not grid

    @Output() onFilterChange: EventEmitter<any> = new EventEmitter();

    value:string;

    constructor(private internalGridService: InternalGridService) { }

    onInput(value){
        this.value = value;
        if(this.internalGridService){
            this.internalGridService.quickFilter(value);
            this.onFilterChange.emit(value);
        }
    }
}
