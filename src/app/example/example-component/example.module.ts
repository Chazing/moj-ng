import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExampleComponent } from "./example.component";
import { MojSharedModule, MojGridModule } from '@moj/moj-ng';

@NgModule({
	imports: [
		CommonModule,
        MojSharedModule, MojGridModule,
    ],
    exports: [
        ExampleComponent
    ],
	declarations: [
        ExampleComponent
	]
})
export class ExampleModule {}
