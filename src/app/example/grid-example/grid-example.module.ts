import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MojGridModule } from "../../moj-ng/elements/grid/moj-grid.module";
import { GridExampleComponent } from "./grid-example.component";
import { EditDialogExampleComponent } from './edit-dialog-example.component';
import { GridExampleService } from './grid-example.service';
import { EditPopupExampleComponent } from "./edit-popup-example.component";
import { TranslateModule } from "@ngx-translate/core";
import { MojSharedModule } from "../../moj-ng/shared/moj.shared.module";
import { MojInputModule } from "../../moj-ng/elements/input.module";
import { ExampleModule } from "../example-component/example.module";
import { GridEditInlineExampleComponent } from "./grid-edit-inline-example.component";
import { GridServerSideExample } from "./grid-server-side/grid-server-side-example.component";


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
