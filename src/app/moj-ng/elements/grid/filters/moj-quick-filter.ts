import { Component, Input } from "@angular/core";
import { InternalGridService } from "../service/internal-grid.service";

@Component({
    selector: "moj-quick-filter",
    template: `<moj-textbox [(ngModel)]="value"
                [isLabelAboveControl]="true"
                [labelTextKey]="filterText"
                [isLabelAutowidth]="true"></moj-textbox>`
})
export class MojQuickFilterComponent {
    set value(v:string){
            if(this.internalGridService){
                this.internalGridService.quickFilter(v);
            }
        }

    @Input() filterText: string = "MojTexts.filterText";

    constructor(private internalGridService: InternalGridService) { }
}
