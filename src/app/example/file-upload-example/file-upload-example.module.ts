import { NgModule } from "@angular/core";

import { MojSharedModule } from "../../moj-ng/shared/moj.shared.module";
import { FileUploadExampleComponent } from "./file-upload-example.component";
import { MojFileUploadModule } from "../../moj-ng/elements/file-upload/moj-file-upload.module";
import { MojInputModule } from "../../moj-ng/elements/input.module";
import { MojGridModule } from "../../moj-ng/elements/grid/moj-grid.module";
import { NewFileComponent } from "./new-file.component";


@NgModule({
    imports: [
        MojInputModule, MojSharedModule, MojFileUploadModule, MojGridModule
    ],
    exports: [FileUploadExampleComponent],
    declarations: [
        FileUploadExampleComponent, NewFileComponent
    ],
    entryComponents: [NewFileComponent]
})
export class FileUploadExampleModule { }