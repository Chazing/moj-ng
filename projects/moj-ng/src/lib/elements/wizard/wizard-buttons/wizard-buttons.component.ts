import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'moj-wizard-buttons',
  template: '<ng-content></ng-content>', 
  styles: [`:host { margin: 0 1em; grid-area: buttons;`]
})
export class WizardButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
