import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker-example',
  templateUrl: './datepicker-example.component.html'
})
export class DatepickerExampleComponent implements OnInit {
  dateTimeValue: Date;
  dateValue: Date;
  constructor() { }

  ngOnInit() {
  }

}
