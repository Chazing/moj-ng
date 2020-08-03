import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'moj-wizard-sub-title',
  template: '<ng-content></ng-content>',
  styles: [`:host { display: block;`]
})
export class WizardSubTitleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
