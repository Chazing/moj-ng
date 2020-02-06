import { stringify } from '@angular/compiler/src/util';
import { ENUMS } from './../../enums';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-validations-demo',
  templateUrl: './form-validations-demo.component.html',
  styleUrls: ['./form-validations-demo.component.css']
})
export class FormValidationsDemoComponent implements OnInit {
  enums = ENUMS;
  model = {
    firstName: '',
    lastName: '',
    dateFrom: '',
    dateTo: '',
    age: '',
    country: [1],
    isAgree: false,
    country1: 2,
    countries:[1,2],
    radioOptions:1
  }
  customValidateErrorsMsgs = [{ key: "required", value: "filesAmtCustomRequired" }, { key: "max", value: "filesAmtCustomMax" }, { key: "min", value: "filesAmtCustomMin" }]
  countryLists = [{ id: 1, name: 'ישראל' },
  { id: 2, name: 'אוסטריה' },
  { id: 3, name: 'בלגיה' },
  { id: 4, name: 'טורקיה' },
  { id: 5, name: 'מרוקו' },
  { id: 6, name: 'ספרד' },
  { id: 7, name: 'קנדה' },
  { id: 8, name: 'שווייץ' }]

  constructor() { }

  ngOnInit() {
  }

  submit(form) {
    alert(JSON.stringify(form.value));
  }
}
