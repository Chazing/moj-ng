import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'moj-wizard-aside',
  template: '<ng-content></ng-content>'
})
export class WizardAsideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
