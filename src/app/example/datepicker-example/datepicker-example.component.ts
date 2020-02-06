import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker-example',
  templateUrl: './datepicker-example.component.html'
})
export class DatepickerExampleComponent implements OnInit {
  dateTimeValue: Date;
  dateValue: Date;
  timeValue:Date;
  public maxDate:Date=new Date(new Date().setMonth(new Date().getMonth() + 3));
    public minDate:Date= new Date();
  constructor() { }

  ngOnInit() {
  }

}
