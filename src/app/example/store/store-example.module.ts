import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreExampleComponent } from "./store-example.component";
import { MojSharedModule } from '@moj/moj-ng';

@NgModule({
    imports: [
        CommonModule,
        MojSharedModule
    ],
    exports: [StoreExampleComponent],
    declarations: [
        StoreExampleComponent
    ]
})
export class StoreExampleModule { }
