import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'moj-container',
    templateUrl: './moj-container.component.html'
})
export class MojContainerComponent implements OnInit {

    @Input()
    title: string;

    @Input()
    containerType: ContainerType = ContainerType.Primay;

    constructor() { }

    ngOnInit() {
    }

}

export enum ContainerType {
    Primay = "primary",
    Secondary = "secondary"
}
