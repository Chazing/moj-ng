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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var moj_config_service_1 = require("./../../shared/moj-config.service");
var moj_recaptcha_service_1 = require("./../website/moj-recaptcha/moj-recaptcha.service");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var core_2 = require("@ngx-translate/core");
var primeng_1 = require("primeng/primeng");
var dropdown_base_1 = require("../base/dropdown.base");
var autocomplete_enum_1 = require("./autocomplete.enum");
var element_base_1 = require("../base/element.base");
var permission_service_1 = require("../../permissions/permission.service");
/**
  * Usage example
  * ```html
  * <moj-autocomplete name="autocompleteValue"
                          labelTextKey="Texts.Choose"
                          controlWidthColumns="2"
                          [items]="listItems"
                          [fieldName]="'ProductName'"
                          fieldID="ID"
                          [(ngModel)]="autocompleteValue">
        </moj-autocomplete>
  * ```
  * for custom list with template:
  * ```html
  * <moj-autocomplete name="autocompleteValue" labelTextKey="Texts.Choose" controlWidthColumns="2" [items]="listItems"
            [fieldName]="'Value'" [fieldID]="'Key'" required [(ngModel)]="autocompleteValue">
            <ng-template let-item pTemplate="custom">
                    <div class="some-class">{{item.Value}}</div>
            </ng-template>
        </moj-autocomplete>
  * ```
  * <example-url>../screenshots/autocomplete.JPG</example-url>
  * <example-url>../screenshots/autocompleteDropdown.JPG</example-url>
  * <example-url>../screenshots/autocompleteMultiple.JPG</example-url>
 */
var MojAutoCompleteComponent = /** @class */ (function (_super) {
    __extends(MojAutoCompleteComponent, _super);
    function MojAutoCompleteComponent(el, _injector, translateService, http, permissionService, config, cdr, recaptchaService) {
        var _this = _super.call(this, el, _injector, permissionService) || this;
        _this.translateService = translateService;
        _this.http = http;
        _this.config = config;
        _this.cdr = cdr;
        _this.recaptchaService = recaptchaService;
        _this.minLength = 1;
        _this.multiple = false;
        _this.dropdown = false;
        _this.filterType = autocomplete_enum_1.FilterType.startsWith;
        _this.forceSelection = true;
        _this.dropdownMode = autocomplete_enum_1.DropdownMode.blank;
        _this.emptyMessage = 'MojTexts.noDataFound';
        _this.dropdownIcon = 'pi pi-chevron-down';
        _this.useRecaptchaBeforeGetUrl = false;
        _this.loadingData = false;
        //@Output()
        //onKeyUp = new EventEmitter();
        _this.onSelect = new core_1.EventEmitter();
        _this.onClear = new core_1.EventEmitter();
        return _this;
    }
    MojAutoCompleteComponent_1 = MojAutoCompleteComponent;
    MojAutoCompleteComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.itemsUrl && !this.itemsUrl.startsWith('http'))
            this.itemsUrl = this.config.configuration.webApiAddress + this.itemsUrl;
    };
    MojAutoCompleteComponent.prototype.ngAfterViewInit = function () {
        //fix wrong text in dropdown button (primeng bug) https://github.com/primefaces/primeng/issues/7463
        if (this.pAutoComplete.dropdownButton) {
            this.pAutoComplete.dropdownButton.nativeElement.setAttribute('title', this.translateService.instant('MojTexts.Choose'));
            this.pAutoComplete.dropdownButton.nativeElement.getElementsByClassName('ui-button-text')[0].textContent = '';
        }
    };
    MojAutoCompleteComponent.prototype.ngAfterViewChecked = function () {
        //fix primeng bug - when forceSelection = false and value is string the input field not updated - bug no 345097
        if (this.forceSelection == false &&
            typeof this.pAutoComplete.value == 'string' &&
            this.pAutoComplete.value &&
            this.pAutoComplete.inputEL.nativeElement.value == '') {
            this.pAutoComplete.inputEL.nativeElement.value = this.pAutoComplete.value;
        }
        //for accessibility
        if (this.pAutoComplete.el.nativeElement != undefined) {
            var listItem = this.pAutoComplete.el.nativeElement.getElementsByClassName('ui-autocomplete-list-item');
            if (listItem.length != 0 && listItem[0].innerHTML == this.translateService.instant(this.emptyMessage)) {
                listItem[0].setAttribute('title', this.translateService.instant(this.emptyMessage));
            }
        }
    };
    MojAutoCompleteComponent.prototype.ngDoCheck = function () {
        _super.prototype.ngDoCheck.call(this);
        this.isOverlayVisible = this.pAutoComplete.overlayVisible;
    };
    MojAutoCompleteComponent.prototype.search = function (event) {
        var _this = this;
        this.loadingData = true;
        if (this.itemsUrl) {
            if (this.useRecaptchaBeforeGetUrl && this.recaptchaService) {
                this.recaptchaService.executeRecaptcha().subscribe(function (res) {
                    _this.http
                        .get(_this.itemsUrl + '?Text=' + event.query.toLowerCase() + '&RecaptchaString=' + res, { withCredentials: true })
                        .subscribe(function (items) {
                        if (items) {
                            _this.filteredItems = items;
                            _this.setModel(_this.filteredItems); //bug 357376 - return object model instead of id
                        }
                    });
                });
            }
            else {
                this.http
                    .get(this.itemsUrl + '/?text=' + event.query.toLowerCase(), { withCredentials: true })
                    .subscribe(function (items) {
                    if (items) {
                        _this.filteredItems = items;
                        _this.setModel(_this.filteredItems); //bug 357376 - return object model instead of id
                    }
                });
            }
        }
        else if (this.itemsFunction) {
            this.itemsFunction(event.query.toLowerCase()).subscribe(function (items) {
                _this.filteredItems = items;
                _this.setModel(_this.filteredItems); //bug 357376 - return object model instead of id
            });
        }
        else if (this.items && this.items.length) {
            if (this.fieldName && this.items[0].hasOwnProperty(this.fieldName)) {
                // objects array
                this.filteredItems = this.items
                    .filter(function (item) { return _this.a(event, item[_this.fieldName]); })
                    .sort(function (a, b) { return a[_this.fieldName].localeCompare(b[_this.fieldName]); });
            }
            else {
                // srtings array
                this.filteredItems = this.items.filter(function (item) { return _this.a(event, item); });
            }
        }
        this.loadingData = false;
    };
    MojAutoCompleteComponent.prototype.a = function (event, str) {
        return ((this.filterType == autocomplete_enum_1.FilterType.startsWith && str.toLowerCase().startsWith(event.query.toLowerCase())) ||
            (this.filterType == autocomplete_enum_1.FilterType.includes && str.toLowerCase().includes(event.query.toLowerCase())));
    };
    MojAutoCompleteComponent.prototype.onkeyup = function (event) {
        this.keyup.emit(event);
    };
    MojAutoCompleteComponent.prototype.onselect = function (event) {
        this.onSelect.emit(event);
    };
    MojAutoCompleteComponent.prototype.onclear = function (event) {
        this.value = null; //fix prime bug in forceselection
        this.onClear.emit(event);
    };
    var MojAutoCompleteComponent_1;
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MojAutoCompleteComponent.prototype, "itemsUrl", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], MojAutoCompleteComponent.prototype, "itemsFunction", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MojAutoCompleteComponent.prototype, "minLength", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojAutoCompleteComponent.prototype, "multiple", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojAutoCompleteComponent.prototype, "dropdown", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MojAutoCompleteComponent.prototype, "filterType", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojAutoCompleteComponent.prototype, "forceSelection", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MojAutoCompleteComponent.prototype, "dropdownMode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MojAutoCompleteComponent.prototype, "emptyMessage", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MojAutoCompleteComponent.prototype, "delay", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MojAutoCompleteComponent.prototype, "dropdownIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojAutoCompleteComponent.prototype, "useRecaptchaBeforeGetUrl", void 0);
    __decorate([
        core_1.ViewChild(primeng_1.AutoComplete, { static: true }),
        __metadata("design:type", primeng_1.AutoComplete)
    ], MojAutoCompleteComponent.prototype, "pAutoComplete", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MojAutoCompleteComponent.prototype, "onSelect", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MojAutoCompleteComponent.prototype, "onClear", void 0);
    MojAutoCompleteComponent = MojAutoCompleteComponent_1 = __decorate([
        core_1.Component({
            selector: 'moj-autocomplete',
            templateUrl: 'moj-autocomplete.component.html',
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: MojAutoCompleteComponent_1,
                    multi: true
                },
                { provide: element_base_1.ElementBase, useExisting: core_1.forwardRef(function () { return MojAutoCompleteComponent_1; }) }
            ]
        }),
        __param(7, core_1.Optional()),
        __metadata("design:paramtypes", [core_1.ElementRef,
            core_1.Injector,
            core_2.TranslateService,
            http_1.HttpClient,
            permission_service_1.PermissionService,
            moj_config_service_1.MojConfigService,
            core_1.ChangeDetectorRef,
            moj_recaptcha_service_1.MojRecaptchaService])
    ], MojAutoCompleteComponent);
    return MojAutoCompleteComponent;
}(dropdown_base_1.DropDownBase));
exports.MojAutoCompleteComponent = MojAutoCompleteComponent;
//# sourceMappingURL=moj-autocomplete.component.js.map