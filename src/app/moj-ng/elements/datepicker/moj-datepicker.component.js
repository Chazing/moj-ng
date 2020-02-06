"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var element_base_1 = require("../base/element.base");
var core_2 = require("@ngx-translate/core");
var primeng_1 = require("primeng/primeng");
var dateType_enum_1 = require("./dateType.enum");
var permission_service_1 = require("../../permissions/permission.service");
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
var MojDatePickerComponent = /** @class */ (function (_super) {
    __extends(MojDatePickerComponent, _super);
    function MojDatePickerComponent(el, _injector, translate, permissionService) {
        var _this = _super.call(this, el, _injector, permissionService) || this;
        _this.translate = translate;
        _this.format = 'dd/mm/yy';
        _this.showTime = false;
        _this.minEnableDate = null;
        _this.maxEnableDate = null;
        _this.monthNavigator = true;
        _this.yearNavigator = true;
        _this.numberOfMonths = 1;
        _this.showButtonBar = true;
        _this.selectionMode = 'single';
        _this.hideOnDateTimeSelect = false;
        _this.close = new core_1.EventEmitter();
        _this.valueChange = new core_1.EventEmitter();
        _this.isInputValue = false;
        return _this;
    }
    MojDatePickerComponent_1 = MojDatePickerComponent;
    MojDatePickerComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.setLocaleTexts();
        this.yearRange = this.yearRange != null ? this.yearRange : '1900:' + (new Date().getFullYear() + 1);
        if (this.timeOnly) {
            this.dateType = dateType_enum_1.DateType.timeOnly;
        }
        else if (this.showTime) {
            this.dateType = dateType_enum_1.DateType.dateTime;
        }
        else if (this.selectionMode == "range") {
            this.dateType = dateType_enum_1.DateType.dateRange;
        }
        else
            this.dateType = dateType_enum_1.DateType.date;
        this.validator = validateDateFactory(this.dateType);
    };
    MojDatePickerComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'custom':
                default:
                    _this.customTemplate = item.template;
                    break;
            }
        });
    };
    MojDatePickerComponent.prototype.onClose = function (event) {
        this.close.emit(event);
    };
    MojDatePickerComponent.prototype.onValueChange = function (event) {
        this.isInputValue = false;
        this.valueChange.emit(event);
        //hide picker popup when calendar is in 'range' selection mode, and the range is selected (the second value selected)
        if (this.selectionMode == 'range' && this.hideOnDateTimeSelect) {
            if (this.value instanceof Array && this.value[1]) {
                this.calendar.hideOverlay();
            }
        }
    };
    MojDatePickerComponent.prototype.onCalendarBlur = function (e) {
        if (this.isInputValue && this.value == null) {
            this.value = this.inputValue;
        }
        this.onBlur(e);
    };
    MojDatePickerComponent.prototype.validate = function (c) {
        var ErrorMessage = null;
        if (this.calendar.inputfieldViewChild) {
            var currValue = this.calendar.inputfieldViewChild.nativeElement.value;
            //check format
            ErrorMessage = this.validator(this.calendar);
            //if format ok check input validations
            if (ErrorMessage == null && this.calendar.inputfieldViewChild.nativeElement.value != '') {
                //if range=>split if need and change it to primeng format: [date,date]
                if (this.selectionMode == "range" || currValue.indexOf("-") > 0) {
                    var dates = [];
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
                    ErrorMessage = { 'dateBiggerThan': this.maxEnableDate.toLocaleDateString() }; //תאריך צריך להיות קטן מתאריך{0}
                }
                else if (this.minEnableDate && (this.inputValue instanceof Array && (this.inputValue[0] < this.minEnableDate || this.inputValue[1] && this.inputValue[1] < this.minEnableDate) ||
                    !(this.inputValue instanceof Array) && this.inputValue < this.minEnableDate)) {
                    ErrorMessage = { 'dateSmallerThan': this.minEnableDate.toLocaleDateString() }; //תאריך צריך להיות גדול מתאריך{0}
                }
            }
            return ErrorMessage;
        }
    };
    MojDatePickerComponent.prototype.convertDate = function (ddmmyyyy) {
        var tmp = ddmmyyyy.split('/');
        var mmddyyyy = tmp[1] + '/' + tmp[0] + '/' + tmp[2];
        return mmddyyyy;
    };
    MojDatePickerComponent.prototype.setLocaleTexts = function () {
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
        }
        else {
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
    };
    var MojDatePickerComponent_1;
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MojDatePickerComponent.prototype, "format", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojDatePickerComponent.prototype, "showTime", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Date)
    ], MojDatePickerComponent.prototype, "minEnableDate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Date)
    ], MojDatePickerComponent.prototype, "maxEnableDate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojDatePickerComponent.prototype, "monthNavigator", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojDatePickerComponent.prototype, "yearNavigator", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MojDatePickerComponent.prototype, "yearRange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MojDatePickerComponent.prototype, "numberOfMonths", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojDatePickerComponent.prototype, "showButtonBar", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MojDatePickerComponent.prototype, "selectionMode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojDatePickerComponent.prototype, "timeOnly", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojDatePickerComponent.prototype, "hideOnDateTimeSelect", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Date)
    ], MojDatePickerComponent.prototype, "defaultDate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Date)
    ], MojDatePickerComponent.prototype, "focusedDate", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MojDatePickerComponent.prototype, "close", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MojDatePickerComponent.prototype, "valueChange", void 0);
    __decorate([
        core_1.ContentChildren(primeng_1.PrimeTemplate),
        __metadata("design:type", core_1.QueryList)
    ], MojDatePickerComponent.prototype, "templates", void 0);
    __decorate([
        core_1.ViewChild(primeng_1.Calendar, { static: true }),
        __metadata("design:type", primeng_1.Calendar)
    ], MojDatePickerComponent.prototype, "calendar", void 0);
    MojDatePickerComponent = MojDatePickerComponent_1 = __decorate([
        core_1.Component({
            selector: 'moj-datepicker',
            templateUrl: 'moj-datepicker.component.html',
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: MojDatePickerComponent_1,
                    multi: true
                },
                { provide: element_base_1.ElementBase, useExisting: core_1.forwardRef(function () { return MojDatePickerComponent_1; }) },
                { provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(function () { return MojDatePickerComponent_1; }), multi: true }
            ]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Injector, core_2.TranslateService, permission_service_1.PermissionService])
    ], MojDatePickerComponent);
    return MojDatePickerComponent;
}(element_base_1.ElementBase));
exports.MojDatePickerComponent = MojDatePickerComponent;
function validateDateFactory(dateType) {
    return function (c) {
        var DATE_REGEXP = null;
        if (dateType == dateType_enum_1.DateType.timeOnly) {
            DATE_REGEXP = new RegExp(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/);
        }
        else if (dateType == dateType_enum_1.DateType.dateTime) {
            DATE_REGEXP = new RegExp(/^([1-9]|([012][0-9])|(3[01]))\/([0]{0,1}[1-9]|1[012])\/\d\d\d\d ([01]?[0-9]|2[0-3]):[0-5][0-9]$/g);
        }
        else {
            DATE_REGEXP = new RegExp(/^([1-9]|([012][0-9])|(3[01]))\/([0]{0,1}[1-9]|1[012])\/\d\d\d\d( - ([1-9]|([012][0-9])|(3[01]))\/([0]{0,1}[1-9]|1[012])\/\d\d\d\d){0,1}$/g);
        }
        if (c.inputfieldViewChild.nativeElement.value) {
            var currValue = c.inputfieldViewChild.nativeElement.value;
            if (!DATE_REGEXP.test(currValue)) {
                if (dateType == dateType_enum_1.DateType.timeOnly)
                    return { timeOnlyFormat: {} };
                else if (dateType == dateType_enum_1.DateType.dateTime)
                    return { dateTimeFormat: {} };
                else if (dateType == dateType_enum_1.DateType.dateRange)
                    return { rangeDateFormat: dateType_enum_1.DateType.dateRange };
                else
                    return { dateFormat: {} };
            }
        }
        return null;
    };
}
//# sourceMappingURL=moj-datepicker.component.js.map