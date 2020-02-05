import { Component, ViewChild, OnInit, EventEmitter } from "@angular/core";
import { MojDynamicField } from "./dynamic-fields";
import { FormGroup } from "@angular/forms";

export class MojDynamicComponent implements OnInit{
    @ViewChild('innerComponent', { static: true}) innerComponent;//the component with formControlName directive
    field:MojDynamicField;
    group: FormGroup;
    name;

    ngOnInit(){
        this.mapFieldProperties();
    }

    mapFieldProperties(){
        Object.keys(this.field).forEach(key => {
            if(this.innerComponent){
                this.mapInputsAndOutputs(key, this.field[key]);
            }
        })

        //set property eventemitter
        this.field.setProperty = new EventEmitter();
        this.field.setProperty.subscribe(setPropertyEvent => {
            this.field[setPropertyEvent.propertyName] = setPropertyEvent.value;
            this.mapInputsAndOutputs(setPropertyEvent.propertyName, setPropertyEvent.value);
        })
    }

    mapInputsAndOutputs(propertyName:string, value:any){
         //map outputs
         if(this.innerComponent[propertyName] instanceof EventEmitter){
            this.innerComponent[propertyName].subscribe(event => {
                value(event, this.innerComponent);
            })
        }
        //map inputs
        else{
            this.innerComponent[propertyName] = value;
        }
    }
}

@Component({
    selector: "moj-dynamic-label-for",
    template: `<div [formGroup]="group"><moj-label-for #innerComponent [formControlName]="name"></moj-label-for></div>`,
})
export class MojDynamicLabelForComponent extends MojDynamicComponent {

}

@Component({
    selector: "moj-dynamic-textbox",
    template: `<div [formGroup]="group"><moj-textbox #innerComponent [formControlName]="name"></moj-textbox></div>`,
})
export class MojDynamicTextboxComponent extends MojDynamicComponent {

}

@Component({
    selector: "moj-dynamic-textarea",
    template: `<div [formGroup]="group"><moj-textarea #innerComponent [formControlName]="name"></moj-textarea></div>`,
})
export class MojDynamicTextAreaComponent extends MojDynamicComponent {

}

@Component({
    selector: "moj-dynamic-dropdown",
    template: `<div [formGroup]="group"><moj-dropdownlist #innerComponent [formControlName]="name"></moj-dropdownlist></div>`,
})
export class MojDynamicDropdownComponent extends MojDynamicComponent {   
}

@Component({
    selector: "moj-dynamic-autocomplete",
    template: `<div [formGroup]="group"><moj-autocomplete #innerComponent [formControlName]="name"></moj-autocomplete></div>`,
})
export class MojDynamicAutoCompleteComponent extends MojDynamicComponent {

}

@Component({
    selector: "moj-dynamic-multiselect",
    template: `<div [formGroup]="group"><moj-multiselect #innerComponent [formControlName]="name"></moj-multiselect></div>`,
})
export class MojDynamicMultiSelectComponent extends MojDynamicComponent {
}

@Component({
    selector: "moj-dynamic-datepicker",
    template: `<div [formGroup]="group"><moj-datepicker #innerComponent [formControlName]="name"></moj-datepicker></div>`,
})
export class MojDynamicDatePickerComponent extends MojDynamicComponent {

}

@Component({
    selector: "moj-dynamic-checkbox",
    template: `<div [formGroup]="group"><moj-checkbox #innerComponent [formControlName]="name"></moj-checkbox></div>`,
})
export class MojDynamicCheckboxComponent extends MojDynamicComponent {

}
