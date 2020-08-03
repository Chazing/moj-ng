import { Observable, of } from 'rxjs';
import { Step4Component } from './step4/step4.component';
import { Step2Component } from './step2/step2.component';
import { Step1Component } from './step1/step1.component';
import { Component, OnInit } from '@angular/core';
import { WizardItem, WizardItemModel, ButtonStyle, OnMovedEventParams } from '@moj/moj-ng';
import { Step3Component } from './step3/step3.component';
import { Guideline } from '@moj/moj-ng';

@Component({
  selector: 'app-wizard-demo',
  templateUrl: './wizard-demo.component.html',
  styleUrls: ['./wizard-demo.component.css']
})
export class WizardDemoComponent implements OnInit {
  items: WizardItem[];
  buttonStyle = ButtonStyle;

  guidelines:Guideline[] = [
    {guidelineTitle:'תדריכים להגשת בקשות', guidelineMessage:'איתור גוש וחלקה לפי כתובת, ניתן לבצע באתר האינטרנט של המרכז'},
  ];
  constructor() { }

  ngOnInit() {
    this.items = [{
      label: 'מגיש הבקשה הכוללת', component: Step1Component
      //wizardSubItems: [{ label: 'דין קדימה', component: AutocompleteExampleComponent },
      //    { label: 'דין קדימה', component: AutocompleteExampleComponent, isForMetro: true,  },
      //{ label: 'דין קדימה', component: MultiSelectExampleComponent }]
    },
    {
      label: 'פרטי הבקשה', component: Step2Component
    },
    {
      label: 'העלאת טפסים', component: Step3Component
    },
    {
      label: 'מאשרים ומסיימים', component: Step4Component
    }]
  }

  submit(wizardItemModels: WizardItemModel[]) {
    alert(`wizardItemModels: ${JSON.stringify(wizardItemModels)}`);
  }

  returnClick($event) {
    alert(event);
  }

    beforeMove(params: OnMovedEventParams): Observable<boolean> {
        return of(true);
    }
}
