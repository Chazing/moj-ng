import { NgModule } from "@angular/core";
import { EditorExampleComponent } from "./editor-example.component";
import { FormsModule } from "@angular/forms";
import { MojEditorModule } from '@moj/moj-ng';

@NgModule({
    imports: [
        FormsModule,
        MojEditorModule
        ],
    exports: [EditorExampleComponent],
    declarations: [
        EditorExampleComponent
    ]
})
export class EditorExampleModule { }