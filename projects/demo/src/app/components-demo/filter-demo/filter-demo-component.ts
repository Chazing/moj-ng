import { Component, ViewChild, ViewContainerRef } from "@angular/core";
import { MojFilter, MojCategoryFilter, MojDynamicCheckboxComponent, MojDynamicDatePickerComponent, MojDynamicAutoCompleteComponent, MojDynamicTextboxComponent, MojTabsService, GridService, MojSideMenuItem, MojTab, EditOptions, EditServiceBase, MojDataViewType, ActionPopUpItem, FileType, ButtonToggleItem } from "@moj/moj-ng";


@Component({
    selector: 'filter-demo',
    templateUrl: 'filter-demo.component.html',
    styleUrls: ['./filter-demo.component.scss']
})
export class FilterDemoComponent {
   
    array = new Array();
    

    filterConfig: MojFilter = {
        categories: [
            new MojCategoryFilter(
                "תיקים", null, [
                    new MojCategoryFilter("תיקי בית משפט מחוזי", [
                        
                    ], [
                            new MojCategoryFilter(
                                "בימ\"ש", [
                                    [{ name: "fld1", type: MojDynamicCheckboxComponent, value: true, labelTextKey: "חיפה" }],
                                    [{ name: "fld2", type: MojDynamicCheckboxComponent, labelTextKey: "ירושלים" }]
                                ]
                            ),
                            new MojCategoryFilter(
                                "תובע מטפל", [
                                    [{ name: "fld3", type: MojDynamicCheckboxComponent, labelTextKey: "אמיר אוחיון" }],
                                    [{ name: "fld4", type: MojDynamicCheckboxComponent, labelTextKey: "אמיר דרורי"}]
                                ]
                            ),
                            new MojCategoryFilter(
                                "טווח תאריכים", [
                                    [{ name: "fld5", type: MojDynamicDatePickerComponent, labelTextKey: "מתאריך", controlWidthColumns: 6 },
                                    { name: "fld6", type: MojDynamicDatePickerComponent, labelTextKey: "עד תאריך", controlWidthColumns: 6 }]
                                ],
                            ),
                            new MojCategoryFilter(
                                "סטטוס", [
                                    [{ name: "fld7", type: MojDynamicCheckboxComponent, labelTextKey: "סגור"}],
                                ]
                            )
                        ]),
                    new MojCategoryFilter("תיקי הכוון והשמה", [], [
                        new MojCategoryFilter(
                            "בימ\"ש", [
                                [{ name: "fld1", type: MojDynamicCheckboxComponent, labelTextKey: "חיפה" }],
                                [{ name: "fld2", type: MojDynamicCheckboxComponent, labelTextKey: "ירושלים" }]
                            ]
                        )
                    ]),
                    new MojCategoryFilter("תיקי טאבו", [], [
                        new MojCategoryFilter(
                            "בימ\"ש", [
                                [{ name: "fld1", type: MojDynamicCheckboxComponent, labelTextKey: "חיפה"}],
                                [{ name: "fld2", type: MojDynamicCheckboxComponent, labelTextKey: "ירושלים"}]
                            ]
                        )
                    ]),
                    new MojCategoryFilter("תיקי תאגידים", [], [
                        new MojCategoryFilter(
                            "בימ\"ש", [
                                [{ name: "fld1", type: MojDynamicCheckboxComponent, labelTextKey: "חיפה"}],
                                [{ name: "fld2", type: MojDynamicCheckboxComponent, labelTextKey: "ירושלים"}]
                            ]
                        )
                    ])
                ],null,null,true)
            ,
            new MojCategoryFilter(
                "נוצר ע\"י",
                [
                    [{ name: "fld8", type: MojDynamicAutoCompleteComponent, labelTextKey: "נוצר ע\"י" }]
                ]
            ),
            new MojCategoryFilter(
                "תאריך יצירה",
                [
                    [{ name: "fld9", type: MojDynamicDatePickerComponent, labelTextKey: "מתאריך", controlWidthColumns: 6 },
                    { name: "fld10", type: MojDynamicDatePickerComponent, labelTextKey: "עד תאריך", controlWidthColumns: 6}]
                ]
            ),
            new MojCategoryFilter(
                "תאריך שינוי",
                [
                    [{ name: "fld13", type: MojDynamicAutoCompleteComponent, labelTextKey: "נוצר ע\"י"}]
                ]
            ),
            new MojCategoryFilter(
                "מעדכן אחרון",
                [
                    [{ name: "fld14", type: MojDynamicTextboxComponent, labelTextKey: ""}]
                ]
            )
        ]
    };

    filterMyData(filterData: any) {
        console.log(filterData);
    }

    constructor() {
     
    }

   

    //****************************************************************************** */

    listData = [
        { id: 1, icon: "fal fa-file-word", name: "אמיר אוחיון - פתוח - 22", desc: "" },
        { id: 2, icon: "fal fa-file-pdf", name: "אמירן סהר חברה בע\"מ", desc: "" }
    ];

    actions: ActionPopUpItem[] = [
        { textKey: 'צפייה בבקשה', href: '/website-example/autocomplete', cssClass: 'request' },
        { textKey: 'צפייה בצו', href: '/website-example/recaptcha', cssClass: 'zzz' },
        { textKey: 'הגשת התנגדות', href: '/website-example/form', cssClass: 'refuse' }
    ];

    fileTypes: FileType[] = [
        { extension: 'pdf', iconClass: 'fas fa-trash-alt' },
        { extension: 'folder', iconClass: 'fas fa-folder redd' }
    ];

    buttonToggleItems:ButtonToggleItem[] = [
        {id:1, text:"שדגשדג",iconClass:'far fa-clock'},
        {id:2, text:"שדג",iconClass:'far fa-file'}];

   
}
