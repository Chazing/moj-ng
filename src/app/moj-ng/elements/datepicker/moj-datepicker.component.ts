﻿import {
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
    ViewChild,

} from '@angular/core';

import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';

import { ElementBase } from '../base/element.base';
import { TranslateService } from '@ngx-translate/core';
import { PrimeTemplate, Calendar } from 'primeng/primeng';
import { DateType } from './dateType.enum';
import { PermissionService } from '../../permissions/permission.service';

/**
* Usage example
* ```html
* <moj-datepicker [showTime]=true name="dateValue" labelTextKey="Texts.DateField" controlWidthColumns="2"
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
* To json date (string) parse to javascript date for all request, need to set it in moj configuration isParseDate = true
* it will be done automatically in the interceptor
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
        { provide: ElementBase, useExisting: forwardRef(() => MojDatePickerComponent) },
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => MojDatePickerComponent), multi: true }
    ]
})
export class MojDatePickerComponent extends ElementBase<Date> implements OnInit {
    @Input() format: string = 'dd/mm/yy';
    @Input() showTime: boolean = false;
    @Input() minEnableDate: Date = null;
    @Input() maxEnableDate: Date = null;
    @Input() monthNavigator: boolean = true;
    @Input() yearNavigator: boolean = true;
    @Input() yearRange: string;
    @Input() numberOfMonths: number = 1;
    @Input() showButtonBar: boolean = true;
    @Input() selectionMode: string = 'single';
    @Input() timeOnly: boolean;
    @Input() hideOnDateTimeSelect: boolean = false;
    @Input() defaultDate: Date;
    @Input() focusedDate: Date;
    @Output() close = new EventEmitter();
    @Output() valueChange = new EventEmitter();
    @ContentChildren(PrimeTemplate) templates: QueryList<any>;
    @ViewChild(Calendar, { static: true }) calendar: Calendar;

    customTemplate: TemplateRef<any>;
    localeStrings: any;
    isInputValue: boolean = false;
    inputValue: any;
    dateType: DateType;
    validator: Function;

    constructor(el: ElementRef, _injector: Injector, private translate: TranslateService, permissionService: PermissionService) {
        super(el, _injector, permissionService);
    }

    ngOnInit() {
        super.ngOnInit();
        this.setLocaleTexts();
        this.yearRange = this.yearRange != null ? this.yearRange : '1900:' + (new Date().getFullYear() + 1);
        if (this.timeOnly) {
            this.dateType = DateType.timeOnly;
        }
        else if (this.showTime) {
            this.dateType = DateType.dateTime;
        }
        else if (this.selectionMode == "range") {
            this.dateType = DateType.dateRange;
        }
        else
            this.dateType = DateType.date;

        this.validator = validateDateFactory(this.dateType);
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

    onClose(event: any) {
        this.close.emit(event);
    }

    onValueChange(event: any) {
        this.isInputValue = false;
        this.valueChange.emit(event);
        //hide picker popup when calendar is in 'range' selection mode, and the range is selected (the second value selected)
        if (this.selectionMode == 'range' && this.hideOnDateTimeSelect) {
            if (this.value instanceof Array && this.value[1]) {
                this.calendar.hideOverlay();
            }
        }
    }

    onCalendarBlur(e) {
        if (this.isInputValue && this.value == null) {
            this.value = this.inputValue;
        }
        this.onBlur(e);
    }

    validate(c: FormControl) {

        let ErrorMessage = null;


        if (this.calendar.inputfieldViewChild) {
            let currValue = this.calendar.inputfieldViewChild.nativeElement.value;
            //check format
            ErrorMessage = this.validator(this.calendar);


            //if format ok check input validations
            if (ErrorMessage == null && this.calendar.inputfieldViewChild.nativeElement.value != '') {
                //if range=>split if need and change it to primeng format: [date,date]
                if (this.selectionMode == "range" || currValue.indexOf("-") > 0) {
                    let dates = [];
                    dates = currValue.trim().split('-');
                    this.inputValue = [new Date(this.convertDate(dates[0])), dates[1] ? new Date(this.convertDate(dates[1])) : null];
                    if (this.inputValue[1] && this.inputValue[0] > this.inputValue[1]) { //טווח לא תקין
                        ErrorMessage = { invalidRangeDate: {} };
                        return ErrorMessage;

                    }
                }
                else
                    this.inputValue = new Date(this.convertDate(currValue.trim()));

                //max min validations:
                if (this.maxEnableDate && (this.inputValue instanceof Array && (this.inputValue[0] > this.maxEnableDate || this.inputValue[1] > this.maxEnableDate) ||
                    !(this.inputValue instanceof Array) && this.inputValue > this.maxEnableDate)) {
                    ErrorMessage = { 'dateBiggerThan': this.maxEnableDate.toLocaleDateString() };//תאריך צריך להיות קטן מתאריך{0}
                }

                else if (this.minEnableDate && (this.inputValue instanceof Array && (this.inputValue[0] < this.minEnableDate || this.inputValue[1] && this.inputValue[1] < this.minEnableDate) ||
                    !(this.inputValue instanceof Array) && this.inputValue < this.minEnableDate)) {
                    ErrorMessage = { 'dateSmallerThan': this.minEnableDate.toLocaleDateString() } //תאריך צריך להיות גדול מתאריך{0}
                }

            }
            return ErrorMessage;

        }
    }

    convertDate(ddmmyyyy) {
        let tmp = ddmmyyyy.split('/');
        let mmddyyyy = tmp[1] + '/' + tmp[0] + '/' + tmp[2];
        return mmddyyyy;
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
}

function validateDateFactory(dateType: DateType) {
    return (c: Calendar) => {
        let DATE_REGEXP = null;
        if (dateType == DateType.timeOnly) {
            DATE_REGEXP = new RegExp(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)
        }
        else if (dateType == DateType.dateTime) {
            DATE_REGEXP = new RegExp(/^([1-9]|([012][0-9])|(3[01]))\/([0]{0,1}[1-9]|1[012])\/\d\d\d\d ([01]?[0-9]|2[0-3]):[0-5][0-9]$/g);
        }
        else {
            DATE_REGEXP = new RegExp(/^([1-9]|([012][0-9])|(3[01]))\/([0]{0,1}[1-9]|1[012])\/\d\d\d\d( - ([1-9]|([012][0-9])|(3[01]))\/([0]{0,1}[1-9]|1[012])\/\d\d\d\d){0,1}$/g);
        }
        if (c.inputfieldViewChild.nativeElement.value) {
            let currValue = c.inputfieldViewChild.nativeElement.value;
            if (!DATE_REGEXP.test(currValue)) {
                if (dateType == DateType.timeOnly)
                    return { timeOnlyFormat: {} };
                else if (dateType == DateType.dateTime)
                    return { dateTimeFormat: {} };

                else if (dateType == DateType.dateRange)
                    return { rangeDateFormat: DateType.dateRange };
                else
                    return { dateFormat: {} };
            }
        }
        return null;
    }
}