import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MojSharedModule } from "../../moj-ng/shared/moj.shared.module";
import { MojGridModule } from "../../moj-ng/elements/grid/moj-grid.module";
import { ExampleComponent } from "./example.component";

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
