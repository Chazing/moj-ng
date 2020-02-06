import { Component, OnInit } from '@angular/core';
import { WizardItemComponentBase } from '@moj/moj-ng';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component extends WizardItemComponentBase implements OnInit {
  requestTypeList = [{ key: 1, value: 'בקשה חדשה' }, { key: 2, value: "בקשה חוזרת" }];
  step2Model = {
    requestTypeId: 2,
    note: ''
  }

  constructor() {
    super();
    this.wizardItemModel = 'step2Model';
  }

  ngOnInit() {
  }
}