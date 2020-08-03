import { NgModule } from "@angular/core"
import { AutoCompleteModule, CalendarModule, DropdownModule, MultiSelectModule } from "primeng/primeng";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { GridExampleService } from './grid-example/grid-example.service';
import { MojSharedModule } from '@moj/moj-ng';



@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        MojSharedModule,
        MultiSelectModule
    ],
    declarations: [],
    exports: [
        FormsModule, CommonModule
    ],
    providers: [GridExampleService],
})
export class ExampleModule {
}