import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MojInputModule } from "../../moj-ng/elements/input.module";
import { MultiSelectExampleComponent } from "./multiselect-example.component";
import { ExampleModule } from "../example-component/example.module";

@NgModule({
	imports: [
		CommonModule,
        MojInputModule,
        ExampleModule,
    ],
    exports: [MultiSelectExampleComponent],
	declarations: [
        MultiSelectExampleComponent
	]
})
export class MultiSelectExampleModule {}
