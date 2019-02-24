import { Component, Input } from "@angular/core";
import { PropertyItem } from "./model/property.model";
import { EventItem } from "./model/event.model";

@Component({
    selector: "moj-example",
    templateUrl: "example.component.html"
})
export class ExampleComponent {

    @Input() title: string;
    @Input() primengLink: string;
    @Input() instructions: string;
    @Input() properties: PropertyItem[];
    @Input() events: EventItem[];
}