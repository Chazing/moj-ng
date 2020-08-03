import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RadioButtonExampleComponent } from "./radiobutton-example.component";
import { ExampleModule } from "../example-component/example.module";
import { MojInputModule } from '@moj/moj-ng';

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
