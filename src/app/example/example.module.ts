import { NgModule } from "@angular/core"

import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MojSharedModule } from "../moj-ng/shared/moj.shared.module";
import { GridExampleService } from './grid-example/grid-example.service';


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        MojSharedModule
    ],
    declarations: [],
    exports: [
        FormsModule, CommonModule
    ],
    providers: [GridExampleService],
})
export class ExampleModule {
}