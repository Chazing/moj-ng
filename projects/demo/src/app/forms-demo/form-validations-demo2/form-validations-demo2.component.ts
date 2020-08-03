import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ContainerType, MojValidators } from '@moj/moj-ng';
import { Enums, ENUMS } from '../../enums';

@Component({
  selector: 'app-form-validations-demo2',
  templateUrl: './form-validations-demo2.component.html',
  styleUrls: ['./form-validations-demo2.component.css']
})
export class FormValidationsDemo2Component implements OnInit {
  Enums : Enums = ENUMS;
  exampleForm: FormGroup;
  countryList = [{ id: 1, name: 'ישראל' },
  { id: 2, name: 'אוסטריה' },
  { id: 3, name: 'בלגיה' },
  { id: 4, name: 'טורקיה' },
  { id: 5, name: 'מרוקו' },
  { id: 6, name: 'ספרד' },
  { id: 7, name: 'קנדה' },
  { id: 8, name: 'שווייץ' }]
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.exampleForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateFrom: '',
      dateTo: ['', MojValidators.greaterThen('dateFrom')],
      age: ['', Validators.max(120)],
      country: 1,
      isAgree: false
    });
  }
}
