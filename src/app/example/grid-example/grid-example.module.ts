import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GridExampleComponent } from "./grid-example.component";
import { EditDialogExampleComponent } from './edit-dialog-example.component';
import { GridExampleService } from './grid-example.service';
import { EditPopupExampleComponent } from "./edit-popup-example.component";
import { TranslateModule } from "@ngx-translate/core";
import { ExampleModule } from "../example-component/example.module";
import { GridEditInlineExampleComponent } from "./grid-edit-inline-example.component";
import { GridServerSideExample } from "./grid-server-side/grid-server-side-example.component";
import { MojGridModule, MojSharedModule, MojInputModule } from '@moj/moj-ng';

@NgModule({
    imports: [
        CommonModule,
        MojGridModule,
        TranslateModule,
        MojSharedModule,
        MojInputModule,
        ExampleModule
    ],
    exports: [MojGridModule, GridExampleComponent, EditDialogExampleComponent, EditPopupExampleComponent, GridEditInlineExampleComponent],
    declarations: [
        GridExampleComponent, EditDialogExampleComponent, EditPopupExampleComponent, GridEditInlineExampleComponent, GridServerSideExample
    ],
    entryComponents: [EditPopupExampleComponent, EditDialogExampleComponent ],
    providers: [ GridExampleService ]
})
export class GridExampleModule { }
