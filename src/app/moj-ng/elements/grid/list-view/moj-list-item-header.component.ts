import { Component, Input } from "@angular/core";

@Component({
    selector: "moj-list-item-header",
    template: `
    <div *ngFor="let item of data" class="moj-list-item-key">
        {{item.key | translate}}: 
        <span class="moj-list-item-value">{{item.value}}</span>
    </div>
    <ng-content></ng-content>`
})
export class MojListItemHeaderComponent {

    @Input()
    data: { [key: string]: string, cssClass?: string }[];

}