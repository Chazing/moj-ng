import { Component } from "@angular/core";
import { InternalGridService } from "../service/internal-grid.service";
import { MojDataViewType } from "../models/dataview-type.enum";
import { ButtonToggleItem } from "../../buttons/button-toggle/button-toggle.model";

@Component({
    selector: "moj-dataview-toggle",
    template: `
    <moj-button-toggle
        [items]="buttonToggleItems"
        (onChange)="onToggleChange($event)"
        [(ngModel)]="dataViewType">
    </moj-button-toggle>
    `,
    styles: [":host { padding: 0 1em;}"]
})
export class MojDataViewToggleComponent {
    dataViewType: MojDataViewType;

    buttonToggleItems: ButtonToggleItem[] = [
        { id: MojDataViewType.Grid, iconClass: "fal fa-th" },
        { id: MojDataViewType.List, iconClass: "far fa-bars" },
    ]

    onToggleChange(value) {
        this.internalGridService.dataViewTypeChange(value);
    }

    constructor(private internalGridService: InternalGridService) { }

}