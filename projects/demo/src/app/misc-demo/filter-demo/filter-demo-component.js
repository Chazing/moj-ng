"use strict";
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
var moj_ng_1 = require("src/app/moj-ng");
var FilterDemoComponent = /** @class */ (function () {
    function FilterDemoComponent() {
        this.array = new Array();
        this.filterConfig = {
            categories: [
                new moj_ng_1.MojCategoryFilter("תיקים", null, [
                    new moj_ng_1.MojCategoryFilter("תיקי בית משפט מחוזי", [], [
                        new moj_ng_1.MojCategoryFilter("בימ\"ש", [
                            [{ name: "fld1", type: moj_ng_1.MojDynamicCheckboxComponent, value: true, labelTextKey: "חיפה" }],
                            [{ name: "fld2", type: moj_ng_1.MojDynamicCheckboxComponent, labelTextKey: "ירושלים" }]
                        ]),
                        new moj_ng_1.MojCategoryFilter("תובע מטפל", [
                            [{ name: "fld3", type: moj_ng_1.MojDynamicCheckboxComponent, labelTextKey: "אמיר אוחיון" }],
                            [{ name: "fld4", type: moj_ng_1.MojDynamicCheckboxComponent, labelTextKey: "אמיר דרורי" }]
                        ]),
                        new moj_ng_1.MojCategoryFilter("טווח תאריכים", [
                            [{ name: "fld5", type: moj_ng_1.MojDynamicDatePickerComponent, labelTextKey: "מתאריך", controlWidthColumns: 6 },
                                { name: "fld6", type: moj_ng_1.MojDynamicDatePickerComponent, labelTextKey: "עד תאריך", controlWidthColumns: 6 }]
                        ]),
                        new moj_ng_1.MojCategoryFilter("סטטוס", [
                            [{ name: "fld7", type: moj_ng_1.MojDynamicCheckboxComponent, labelTextKey: "סגור" }],
                        ])
                    ]),
                    new moj_ng_1.MojCategoryFilter("תיקי הכוון והשמה", [], [
                        new moj_ng_1.MojCategoryFilter("בימ\"ש", [
                            [{ name: "fld1", type: moj_ng_1.MojDynamicCheckboxComponent, labelTextKey: "חיפה" }],
                            [{ name: "fld2", type: moj_ng_1.MojDynamicCheckboxComponent, labelTextKey: "ירושלים" }]
                        ])
                    ]),
                    new moj_ng_1.MojCategoryFilter("תיקי טאבו", [], [
                        new moj_ng_1.MojCategoryFilter("בימ\"ש", [
                            [{ name: "fld1", type: moj_ng_1.MojDynamicCheckboxComponent, labelTextKey: "חיפה" }],
                            [{ name: "fld2", type: moj_ng_1.MojDynamicCheckboxComponent, labelTextKey: "ירושלים" }]
                        ])
                    ]),
                    new moj_ng_1.MojCategoryFilter("תיקי תאגידים", [], [
                        new moj_ng_1.MojCategoryFilter("בימ\"ש", [
                            [{ name: "fld1", type: moj_ng_1.MojDynamicCheckboxComponent, labelTextKey: "חיפה" }],
                            [{ name: "fld2", type: moj_ng_1.MojDynamicCheckboxComponent, labelTextKey: "ירושלים" }]
                        ])
                    ])
                ]),
                new moj_ng_1.MojCategoryFilter("נוצר ע\"י", [
                    [{ name: "fld8", type: moj_ng_1.MojDynamicAutoCompleteComponent, labelTextKey: "נוצר ע\"י" }]
                ]),
                new moj_ng_1.MojCategoryFilter("תאריך יצירה", [
                    [{ name: "fld9", type: moj_ng_1.MojDynamicDatePickerComponent, labelTextKey: "מתאריך", controlWidthColumns: 6 },
                        { name: "fld10", type: moj_ng_1.MojDynamicDatePickerComponent, labelTextKey: "עד תאריך", controlWidthColumns: 6 }]
                ]),
                new moj_ng_1.MojCategoryFilter("תאריך שינוי", [
                    [{ name: "fld13", type: moj_ng_1.MojDynamicAutoCompleteComponent, labelTextKey: "נוצר ע\"י" }]
                ]),
                new moj_ng_1.MojCategoryFilter("מעדכן אחרון", [
                    [{ name: "fld14", type: moj_ng_1.MojDynamicTextboxComponent, labelTextKey: "" }]
                ])
            ]
        };
        //****************************************************************************** */
        this.listData = [
            { id: 1, icon: "fal fa-file-word", name: "אמיר אוחיון - פתוח - 22", desc: "" },
            { id: 2, icon: "fal fa-file-pdf", name: "אמירן סהר חברה בע\"מ", desc: "" }
        ];
        this.actions = [
            { textKey: 'צפייה בבקשה', href: '/website-example/autocomplete', cssClass: 'request' },
            { textKey: 'צפייה בצו', href: '/website-example/recaptcha', cssClass: 'zzz' },
            { textKey: 'הגשת התנגדות', href: '/website-example/form', cssClass: 'refuse' }
        ];
        this.fileTypes = [
            { extension: 'pdf', iconClass: 'fas fa-trash-alt' },
            { extension: 'folder', iconClass: 'fas fa-folder redd' }
        ];
        this.buttonToggleItems = [
            { id: 1, text: "שדגשדג", iconClass: 'far fa-clock' },
            { id: 2, text: "שדג", iconClass: 'far fa-file' }
        ];
    }
    FilterDemoComponent.prototype.filterMyData = function (filterData) {
        console.log(filterData);
    };
    FilterDemoComponent = __decorate([
        core_1.Component({
            selector: 'filter-demo',
            templateUrl: 'filter-demo.component.html',
            styleUrls: ['./filter-demo.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], FilterDemoComponent);
    return FilterDemoComponent;
}());
exports.FilterDemoComponent = FilterDemoComponent;
//# sourceMappingURL=filter-demo-component.js.map