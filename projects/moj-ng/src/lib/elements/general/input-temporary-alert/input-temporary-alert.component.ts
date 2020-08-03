import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-temporary-alert',
  templateUrl: './input-temporary-alert.component.html'
})
export class InputTemporaryAlertComponent implements OnInit {
  @Input() forId: string;

  constructor() { }

  ngOnInit() {
  }

}
