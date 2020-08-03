import { NgModule } from '@angular/core';
import { EditorModule } from 'primeng/editor';
import { MojEditorComponent } from './moj-editor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        EditorModule,
        FormsModule
    ],
    declarations: [
        MojEditorComponent
    ],
    exports: [
        MojEditorComponent,
        EditorModule
    ]
})
export class MojEditorModule { }