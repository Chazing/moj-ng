import { LabelAlign } from './../../../moj-ng/elements/label/label.enum';
import { ButtonStyle } from './../../../moj-ng/elements/buttons/button-style';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html'
})
export class ReactiveFormExampleComponent implements OnInit {
  exampleForm: FormGroup;
  name;
  buttonStyle = ButtonStyle;
  labelAlign = LabelAlign;
  dropDownListItems: any = [
    { id: 1, name: "pdf" },
    { id: 2, name: "tiff" },
    { id: 3, name: "jpg" }
  ];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(); 
  }

  createForm() {
    this.exampleForm = this.formBuilder.group({
      name: ['', Validators.required],
      type: '',
      startDate: '',
      endDate: '',
      dropDownValue: ['', Validators.max(1)],
      checkBoxValue: '',
      multiselectValues:''
      // details: this.formBuilder.array([]),
    });
  }

  save() {
    alert('saved');
  }
}
