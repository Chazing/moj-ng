import { NgModule } from "@angular/core";
import { FileUploadExampleComponent } from "./file-upload-example.component";
import { NewFileComponent } from "./new-file.component";
import { MojInputModule, MojSharedModule, MojFileUploadModule, MojGridModule } from '@moj/moj-ng';


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