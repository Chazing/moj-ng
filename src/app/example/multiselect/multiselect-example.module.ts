import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MultiSelectExampleComponent } from "./multiselect-example.component";
import { ExampleModule } from "../example-component/example.module";
import { MojInputModule } from '@moj/moj-ng';

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
