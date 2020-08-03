import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'moj-entity-header-body',
  template: `
    <ng-content></ng-content>
  `,
  styles: []
})
export class EntityHeaderBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
