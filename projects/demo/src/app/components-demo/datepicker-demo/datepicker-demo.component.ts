import { ENUMS } from './../../enums';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-datepicker-demo',
  templateUrl: './datepicker-demo.component.html',
  styleUrls: ['./datepicker-demo.component.css']
})
export class DatepickerDemoComponent implements OnInit {
  datepickerValue: Date;
  dateTimeValue: Date;
  dateRangeValue: Date[];
  dateValue: Date;
  dateItemTemplate: Date;
  maxDate: Date = new Date(new Date().setMonth(new Date().getMonth() + 3));
  minDate: Date = new Date();
  tooltipTxt: string;
  Enums = ENUMS


  constructor(private translate: TranslateService) { }


  ngOnInit() {
    this.translate.get('Texts.DateTooltip').subscribe(x => this.tooltipTxt = x);
  }

}
