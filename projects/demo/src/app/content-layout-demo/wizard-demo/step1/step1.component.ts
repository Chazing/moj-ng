import { Component, OnInit } from '@angular/core';
import { WizardItemComponentBase } from '@moj/moj-ng';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component extends WizardItemComponentBase implements OnInit {
  processTypeList = [{ key: 1, value: 'פתיחת הליך' }, { key: 2, value: "בקשה לצילום מסמכים" }];
  step1Model = {
    processTypeId: 2,
    note: ''
  }
  constructor() {
    super();
    this.wizardItemModel = 'step1Model';
    console.log("Step1Component created");
  }

  ngOnInit() {
      console.log("Step1Component init");
  }
}
