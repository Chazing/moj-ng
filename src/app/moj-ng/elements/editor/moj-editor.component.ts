import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ValueAccessorBase } from "../base/value-accessor.base";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector:'moj-editor',
    templateUrl:'./moj-editor.component.html',
    styleUrls:['./moj-editor.component.css'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: MojEditorComponent,
        multi: true
    }]
})//todo send input and outputs to component, set moj defaults, documentation:quill in node modules and angular.json
export class MojEditorComponent extends ValueAccessorBase{
    @Input() style:string;
    @Input() styleClass:string;
    @Input() placeholder:string;
    @Input() readonly:boolean;
    //@Input() formats:string[]=['bold', 'italic', 'color'];

    @Output() onTextChange = new EventEmitter();
    @Output() onSelectionChange = new EventEmitter();
    @Output() onInit = new EventEmitter();

    ontextchange(event){
        this.onTextChange.emit(event);
    }

    onselectionchange(event){
        this.onSelectionChange.emit(event);
    }
}