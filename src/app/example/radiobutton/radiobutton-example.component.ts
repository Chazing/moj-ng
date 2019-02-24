import { Component } from "@angular/core";
import { PropertyItem } from "../example-component/model/property.model";
import { EventItem } from "../example-component/model/event.model";

@Component({
    selector: "radiobutton-example",
    templateUrl: "radiobutton-example.component.html"
})
export class RadioButtonExampleComponent {
    value;

    instructions = `רדיו`;

    properties: PropertyItem[] = [
        { name: "items", type: "array", default: "null", description: "מערך של נתונים להצגה" }
    ];

    events: EventItem[] = [
    ];
}