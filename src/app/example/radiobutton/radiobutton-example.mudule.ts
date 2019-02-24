import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MojInputModule } from "../../moj-ng/elements/input.module";
import { RadioButtonExampleComponent } from "./radiobutton-example.component";
import { ExampleModule } from "../example-component/example.module";

@NgModule({
    imports: [
        CommonModule,
        MojInputModule,
        ExampleModule,
    ],
    exports: [RadioButtonExampleComponent],
    declarations: [
        RadioButtonExampleComponent
    ]
})
export class RadiobuttonExampleModule { }
