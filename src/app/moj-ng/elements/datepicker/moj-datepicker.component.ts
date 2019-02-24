import {
  Component,
  ElementRef,
  Injector,
  Input,
  OnInit,
  Output,
  EventEmitter,
  forwardRef,
  TemplateRef,
  QueryList,
  ContentChildren,
  ViewChild
} from '@angular/core';

import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ElementBase } from '../base/element.base';
import { TranslateService } from '@ngx-translate/core';
import { PrimeTemplate, Calendar } from 'primeng/primeng';

/**
* Usage example
* ```html
* <moj-datepicker [showTime]=true name="dateValue" labelTextKey="Texts.DateField" labelWidthColumns="1" controlWidthColumns="2"
*              [(ngModel)]="dateValue">
* </moj-datepicker>
* ```
* To date comes right to webapi its need to set this configuration
* ```code
* protected void Application_Start()
        {
            config.Formatters.JsonFormatter.SerializerSettings = new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver(),
                DateTimeZoneHandling = DateTimeZoneHandling.Local
            };
*      }
* ```
* <example-url>../screenshots/DatePicker.JPG</example-url>
*/
@Component({
  selector: 'moj-datepicker',
  templateUrl: 'moj-datepicker.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MojDatePickerComponent,
      multi: true
    },
    { provide: ElementBase, useExisting: forwardRef(() => MojDatePickerComponent) }
  ]
})
export class MojDatePickerComponent extends ElementBase<Date> implements OnInit {
  @Input() format: string = 'dd/mm/yy';
  @Input() showTime: boolean = false;
  @Input() minDate: Date = null;
  @Input() maxDate: Date = null;
  @Input() placeholder: string = '';
  @Input() monthNavigator: boolean = true;
  @Input() yearNavigator: boolean = true;
  @Input() yearRange: string;
  @Input() numberOfMonths: number = 1;
  @Input() showButtonBar: boolean = true;
  @Input() selectionMode: string = 'single';
  @Input() timeOnly: boolean;
  @Input() hideOnDateTimeSelect: boolean = false;
  customTemplate: TemplateRef<any>;
  @ContentChildren(PrimeTemplate) templates: QueryList<any>;
  @ViewChild(Calendar) calendar: Calendar;

  localeStrings: any;

  @Input() focusedDate: Date;

  @Output() close = new EventEmitter();

  @Output() valueChange = new EventEmitter();

  constructor(el: ElementRef, _injector: Injector, private translate: TranslateService) {
    super(el, _injector);
  }

  onClose(event: any) {
    this.close.emit(event);
  }

  onValueChange(event: any) {
    this.valueChange.emit(event);
    //hide picker popup when calendar is in 'range' selection mode, and the range is selected (the second value selected)
    if(this.selectionMode=='range'){
      if(this.value instanceof Array && this.value[1]){
        this.calendar.hideOverlay();
      }
    }
  }

  ngOnInit() {
    super.ngOnInit();
    this.setLocaleTexts();
    this.yearRange = this.yearRange != null ? this.yearRange : '1900:' + (new Date().getFullYear() + 1);
  }

  private setLocaleTexts() {
    if (this.translate.currentLang === 'he') {
      this.localeStrings = {
        firstDayOfWeek: 0,
        dayNames: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
        dayNamesShort: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'],
        dayNamesMin: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'],
        monthNames: [
          'ינואר',
          'פברואר',
          'מרץ',
          'אפריל',
          'מאי',
          'יוני',
          'יולי',
          'אוגוסט',
          'ספטמבר',
          'אוקטובר',
          'נובמבר',
          'דצמבר'
        ],
        monthNamesShort: ['ינו', 'פב', 'מר', 'אפ', 'מא', 'ינ', 'יול', 'יונ', 'ספ', 'אוכ', 'נוב', 'דצ'],
        today: this.translate.instant('MojTexts.today'),
        clear: this.translate.instant('MojTexts.clear')
      };
    } else {
      this.localeStrings = {
        firstDayOfWeek: 0,
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        monthNames: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        today: 'Today',
        clear: 'Clear'
      };
    }
  }

  onInput(e) {
    this.setFormatError(e.target.value != '' && e.target.value != null && this.value == null, e.target.value);
  }

  onCalendarBlur(e) {
    this.setFormatError(e.target.value != '' && e.target.value != null && this.value == null, e.target.value);
    this.onBlur(e);
  }

  private setFormatError(isError: boolean, value) {
    let errors = this.control.errors;
    if (errors == null) {
      errors = {};
    }
    delete errors['dateFormat'];
    delete errors['invalidDate'];
    if (isError) {
      var regex = /^([0-9][0-9])(\/)([0-9][0-9])(\/)\d{4}$/g;
      var match = regex.test(value);
      if (match) {
        errors['invalidDate'] = {};
      } else {
        errors['dateFormat'] = {};
      }
    }
    this.control.setErrors(errors);
    if (JSON.stringify(errors) == JSON.stringify({})) this.control.updateValueAndValidity();
  }

  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'custom':
        default:
          this.customTemplate = item.template;
          break;
      }
    });
  }
}
