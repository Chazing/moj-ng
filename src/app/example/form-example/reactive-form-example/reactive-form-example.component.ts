import { WizardItemComponentBase } from './../../../moj-ng/elements/wizard/wizard-item/wizard-item-component.base';
import { LabelAlign } from './../../../moj-ng/elements/label/label.enum';
import { ButtonStyle } from './../../../moj-ng/elements/buttons/button-style';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MojValidators } from './../../../moj-ng/validations/customValidators/validators';
// import { MojValidation } from 'src/app/moj-ng/validations/customValidators/required_if.validation';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html'
})
export class ReactiveFormExampleComponent extends WizardItemComponentBase implements OnInit {
  exampleForm: FormGroup;
  name;
  buttonStyle = ButtonStyle;
  labelAlign = LabelAlign;
  reactiveModel: any = {}
  dropDownListItems: any = [
    { id: 1, name: "pdf" },
    { id: 2, name: "tiff" },
    { id: 3, name: "jpg" }
  ];
  constructor(private formBuilder: FormBuilder) {
    super();
    this.wizardItemModel = 'reactiveModel'
  }

  ngOnInit() {
    this.createForm();
    this.exampleForm.patchValue(this.reactiveModel);
  }

  createForm() {
    this.exampleForm = this.formBuilder.group({
        name: ['', Validators.required],
      type: '',
      startDate: '',
      endDate: '',
      dropDownValue: ['', Validators.max(1)],
      checkBoxValue: '',
      multiselectValues: ''
      // details: this.formBuilder.array([]),
    });
    this.formGroup = this.exampleForm;
  }

  save() {
    this.reactiveModel = this.exampleForm.value;
    alert('saved');
  }

  methodBeforeExit(){
    this.reactiveModel = this.exampleForm.value;
    return true
  }
}
