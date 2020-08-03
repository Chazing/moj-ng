import { Component, OnInit, ViewChildren } from '@angular/core';
import { WizardItemComponentBase } from '@moj/moj-ng';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component extends WizardItemComponentBase implements OnInit {
  exampleForm: FormGroup;
  step3Model = {
    isApproved: null
  }

  constructor(private formBuilder: FormBuilder) {
    super();
    this.wizardItemModel = "step3Model";
  }

  ngOnInit() {
    this.createForm();
    this.exampleForm.patchValue(this.step3Model);
  }

  createForm() {
    this.exampleForm = this.formBuilder.group({
      isApproved: ['', Validators.requiredTrue]
    });
    this.formGroup = this.exampleForm;
  }

  methodBeforeExit(){
    this.step3Model = this.exampleForm.value;
    return true
  }
}
