import { Injectable, EventEmitter } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MojDynamicField } from "./dynamic-fields";

@Injectable({
    providedIn: 'root'
})
export class MojDynamicFormService {
    
    addControls(formGroup:FormGroup, fields:MojDynamicField[][]) {

        fields.forEach(fields_ => {
            fields_.forEach(field => {
                this.addControl(formGroup, field);
            });
          });
    }

    addControl(formGroup:FormGroup, field:MojDynamicField){
        let formControl:FormControl = new FormControl('',field.validators);

        //set value
        if(field.value){
            formControl.setValue(field.value);
        }

        //set value eventemitter
        field.setValue = new EventEmitter();
        field.setValue.subscribe(event => {
            formControl.setValue(event);
        })

        //set validators eventemitter
        field.setValidators = new EventEmitter();
        field.setValidators.subscribe(event => {
            formControl.setValidators(event);
        })

        formGroup.addControl(field.name ,formControl);
    }

    removeControl(formGroup:FormGroup, controlName:string){
        formGroup.removeControl(controlName);
    }

    getFieldByName(fields:MojDynamicField[][], name:string):MojDynamicField{
        let field:MojDynamicField;
        fields.forEach(fields_ => {
            fields_.forEach(field_ => {
              if(field_.name == name){
                  field = field_;
              }
            })
          });
          return field;
    }
}