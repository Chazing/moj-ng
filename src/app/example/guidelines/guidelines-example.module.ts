import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GuidelinesExampleComponent } from "./guidelines-example.component";
import { MojGuidelinesModule } from '@moj/moj-ng';
import { MojSharedModule } from 'projects/moj-ng';

@NgModule({
	imports: [
        CommonModule,
        MojSharedModule,
        MojGuidelinesModule
    ],
    exports: [GuidelinesExampleComponent],
	declarations: [
        GuidelinesExampleComponent
	]
})
export class GuidelinesExampleModule {}
