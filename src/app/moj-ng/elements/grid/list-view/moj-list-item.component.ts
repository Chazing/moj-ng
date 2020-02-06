import { Component, Input, ElementRef } from "@angular/core";
import { MojListItemType } from "./moj-list-view-type.enum";


@Component({
    selector: "moj-list-item",
    templateUrl: "./moj-list-item.component.html",
    styleUrls: ["./moj-list-item.component.scss"]
})
export class MojListItemComponent {

    @Input()
    listItemType: MojListItemType = MojListItemType.Panel;

    @Input()
    cols: number = 1;

    ngOnInit() {
        this.el.nativeElement.parentElement.style.gridTemplateColumns = `repeat(${this.cols}, 1fr)`;
    }

    constructor(private el: ElementRef) {

    }

}