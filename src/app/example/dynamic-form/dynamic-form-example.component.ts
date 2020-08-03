import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MojDynamicFormService, MojDynamicField, MojDynamicDatepickerField, MojDynamicTextboxField, MojDynamicTextboxComponent, MojDynamicDropdownField, MojDynamicDropdownComponent, MojDynamicAutocompleteField, MojDynamicAutoCompleteComponent, MojDynamicDatePickerComponent, MojDynamicLabelField, MojDynamicLabelForComponent } from '@moj/moj-ng';

@Component({
    selector: 'dynamic-form-example',
    templateUrl: './dynamic-form-example.component.html'
})
export class DynamicFormExampleComponent implements OnInit {

    fields:MojDynamicField[][];
    exampleDynamicForm: FormGroup = new FormGroup({});

    constructor(private mojDynamicFormService:MojDynamicFormService) { }

    ngOnInit() {
        this.initFields();
        this.mojDynamicFormService.addControls(this.exampleDynamicForm, this.fields)
    }

    onCountry1Change=(event)=>{
        if(!event || !event.value){ return }
        //if value = 1 then set countryDate to be disabled
        let countryDateField:MojDynamicDatepickerField = this.mojDynamicFormService.getFieldByName(this.fields,"countryDate");
        countryDateField.setProperty.emit({propertyName:'disabled', value:event.value.key == 1 ? true : false});       
    }

    onCountry2Selected=(event)=>{
        //add control and remove control
        let titleField =  <MojDynamicTextboxField>{
            type:MojDynamicTextboxComponent,
            name: 'title',
            labelTextKey: 'כותרת',
            controlWidthColumns:4,
            maxlength:40
        }
        this.mojDynamicFormService.addControl(this.exampleDynamicForm, titleField);
        this.fields[1].push(titleField);
        this.mojDynamicFormService.removeControl(this.exampleDynamicForm, 'countryDate');
        this.fields[0].splice(2);
    }

    initFields(){
        let items = [
            { value: "ישראל", key: 1 },
            { value: "אלבניה", key: 2 },
            { value: "אמריקה", key: 3 },
            { value: "אוסטריה", key: 4 },
            { value: "רוסיה", key: 5 }
        ]
        this.fields =  [
            [
                <MojDynamicDropdownField>{
                    type:MojDynamicDropdownComponent,
                    name: 'country1',
                    labelTextKey: 'ארץ 1',
                    validators: Validators.required,
                    items:items,
                    fieldName :'value',
                    fieldID: 'key',
                    controlWidthColumns:2,
                    onChange:this.onCountry1Change
                },
                <MojDynamicAutocompleteField>{
                    type:MojDynamicAutoCompleteComponent,
                    name: 'country2',
                    labelTextKey: 'ארץ 2',
                    validators: Validators.required,
                    items:items,
                    fieldName :'value',
                    fieldID: 'key',
                    dropdown: true,
                    controlWidthColumns:2,
                    onSelect:this.onCountry2Selected
                },
                <MojDynamicDatepickerField>{
                    type:MojDynamicDatePickerComponent,
                    name: 'countryDate',
                    labelTextKey: 'תאריך',
                    validators: Validators.required,
                    value: new Date(),
                    controlWidthColumns:2
                },
            ],           
            [
                <MojDynamicLabelField>{
                    type:MojDynamicLabelForComponent,
                    name: 'creationDate',
                    labelTextKey: 'תאריך יצירה',
                    value: new Date(),
                    contentWidthColumns:4
                }
            ]
        ];
    }
}
