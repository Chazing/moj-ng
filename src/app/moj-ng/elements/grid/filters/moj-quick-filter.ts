import { Component, Input } from "@angular/core";
import { InternalGridService } from "../service/internal-grid.service";

@Component({
    selector: "moj-quick-filter",
    template: `<moj-textbox [(ngModel)]="value"
                [labelTextKey]="filterText"></moj-textbox>`
})
export class MojQuickFilterComponent {
    _value:string;
    set value(v:string){
        this._value = v;
        if(this.internalGridService){
            this.internalGridService.quickFilter(v);
        }
    }

    get value(){
        return this._value;
    }

    @Input() filterText: string = "MojTexts.filterText";

    constructor(private internalGridService: InternalGridService) { }
}
