import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'moj-entity-header-header',
  template: `
    <ng-content></ng-content>
  `,
  styles: []
})
export class EntityHeaderHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
