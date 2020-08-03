import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'moj-entity-header-edit',
  template: `
    <ng-content></ng-content>
  `,
  styles: []
})
export class EntityHeaderEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
