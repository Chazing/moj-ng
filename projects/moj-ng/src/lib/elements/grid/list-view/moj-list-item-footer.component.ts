import { Component, Input } from "@angular/core";

@Component({
    selector: "moj-list-item-footer",
    template: `
    <ng-content></ng-content>`
})
export class MojListItemFooterComponent {

    @Input()
    data: { [key: string]: string, cssClass?: string }[];

}