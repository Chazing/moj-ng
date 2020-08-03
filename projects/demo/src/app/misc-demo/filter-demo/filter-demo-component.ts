import { Component, ViewChild, ViewContainerRef, OnInit } from "@angular/core";
import { MojFilter, MojCategoryFilter, MojDynamicCheckboxComponent, MojDynamicDatePickerComponent, MojDynamicAutoCompleteComponent, MojDynamicTextboxComponent, MojTabsService, GridService, MojSideMenuItem, MojTab, EditOptions, EditServiceBase, MojDataViewType, ActionPopUpItem, FileType, ButtonToggleItem, MojDynamicDropdownComponent, MojDynamicDropdownField, MojFilterComponent, GreaterOrEqualThanValidator, MojDynamicDatepickerField, MojDynamicCheckboxField, MojDynamicAutocompleteField } from "@moj/moj-ng";
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'filter-demo',
  templateUrl: 'filter-demo.component.html',
  styleUrls: ['./filter-demo.component.scss']
})

export class FilterDemoComponent implements OnInit {
  countryList = [];
  cityList = [];
  users = [];
  isOpen = [false, false, false, false, false, false]
  filterConfig: MojFilter = { categories: [] };
  @ViewChild('Filter', { static: false }) Filter: MojFilterComponent;
  cityList$: Observable<any>;


  constructor() {
    //builder for patent search demo
    //this.patentSearchCategoryBuilder()

    this.updateFilterMenu(true, null);

  }

  ngOnInit() {
    this.cityList$ = this.getcityList();
    this.countryList = [
      { value: "ישראל", key: 1 },
      { value: "אלבניה", key: 2 },
      { value: "אמריקה", key: 3 },
      { value: "אוסטריה", key: 4 },
      { value: "רוסיה", key: 5 }]
    this.users = [
      { value: "פטנטים", key: 1 },
      { value: "תשיות", key: 2 },
      { value: "תאגידים", key: 3 },

    ];

    this.updateFilterMenu(true, null);
  }

  updateFilterMenu(isInit: Boolean, countryID: number) {
    let residencyCategoryFilter: MojCategoryFilter;
    let isopenresethis = false;
    if (!isInit) {
      for (let index = 0; index < this.filterConfig.categories.length; index++) {
        if (this.filterConfig.categories[index].isOpen != undefined)
          this.isOpen[index] = this.filterConfig.categories[index].isOpen;
      }

    }

    if (countryID == 2) {
      residencyCategoryFilter = new MojCategoryFilter("תושבות", [
        [{ name: "countryID", type: MojDynamicDropdownComponent, labelTextKey: "מדינה", items: this.countryList, value: countryID } as MojDynamicDropdownField],
        [{ name: "cityName", type: MojDynamicTextboxComponent, labelTextKey: "עיר" }]
      ], null, this.isOpen[3])
    }

    else {
      residencyCategoryFilter = new MojCategoryFilter("תושבות", [
        [{ name: "countryID", type: MojDynamicDropdownComponent, labelTextKey: "מדינה", items: this.countryList, value: countryID } as MojDynamicDropdownField],
        [{ name: "cityid", type: MojDynamicDropdownComponent, labelTextKey: "עיר", items: this.cityList$ } as MojDynamicDropdownField]
      ], null, this.isOpen[3])
    }

    this.filterConfig = {
      categories:
        [
          new MojCategoryFilter(
            [[{ name: "check1", type: MojDynamicCheckboxComponent, labelTextKey: "תיקים", value: false, onChange: this.onCategoryChange } as MojDynamicCheckboxField]], null, [

            new MojCategoryFilter("תיקי בית משפט מחוזי", [

            ], [
              new MojCategoryFilter(
                [[{ name: "check2", type: MojDynamicCheckboxComponent, labelTextKey: "בימ\"ש" }]], [
                [{ name: "fld1", type: MojDynamicCheckboxComponent, value: true, labelTextKey: "חיפה" }],
                [{ name: "fld2", type: MojDynamicCheckboxComponent, labelTextKey: "ירושלים" }]
              ]
              ),
              new MojCategoryFilter(
                "תובע מטפל", [
                [{ name: "fld3", type: MojDynamicCheckboxComponent, labelTextKey: "אמיר אוחיון" }],
                [{ name: "fld4", type: MojDynamicCheckboxComponent, labelTextKey: "אמיר דרורי" }]
              ]
              ),
              new MojCategoryFilter(
                "טווח תאריכים", [
                [{ name: "fld5", type: MojDynamicDatePickerComponent, labelTextKey: "מתאריך", controlWidthColumns: 6 }],
                [{ name: "fld6", type: MojDynamicDatePickerComponent, labelTextKey: "עד תאריך", controlWidthColumns: 6 }]
              ],
              ),
              new MojCategoryFilter(
                [[{ name: "check3", type: MojDynamicCheckboxComponent, labelTextKey: "סטטוס AQ" }]], [
                [{ name: "fld7", type: MojDynamicCheckboxComponent, labelTextKey: "סגור" }],
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
                [{ name: "fld1", type: MojDynamicCheckboxComponent, labelTextKey: "חיפה" }],
                [{ name: "fld2", type: MojDynamicCheckboxComponent, labelTextKey: "ירושלים" }]
              ]
              )
            ]),
            new MojCategoryFilter("תיקי תאגידים", [], [
              new MojCategoryFilter(
                "בימ\"ש", [
                [{ name: "fld1", type: MojDynamicCheckboxComponent, labelTextKey: "חיפה" }],
                [{ name: "fld2", type: MojDynamicCheckboxComponent, labelTextKey: "ירושלים" }]
              ]
              )
            ])
          ], this.isOpen[0], null, true, 1)
          ,
          new MojCategoryFilter(
            [[{ name: "check5", type: MojDynamicCheckboxComponent, labelTextKey: "יצירה" }]],
            [
              [{ name: "fld13", type: MojDynamicAutoCompleteComponent, labelTextKey: "נוצר ע\"י", items: this.users } as MojDynamicAutocompleteField]
            ]
            , null, this.isOpen[1], "fld55"),

          new MojCategoryFilter("קישור לתיק", [
            [{ name: "relatedPatentFileID", type: MojDynamicTextboxComponent, labelTextKey: "מזהה תיק" }]
          ], null, this.isOpen[2]),

          residencyCategoryFilter,

          new MojCategoryFilter("תאריך עדכון אחרון ", [
            [{ name: "partyUpdateDateFrom", type: MojDynamicDatePickerComponent, labelTextKey: "מתאריך" }],
            [{ name: "partyUpdateDateTo", type: MojDynamicDatePickerComponent, labelTextKey: "עד תאריך" }]
          ], null, this.isOpen[4]),

          new MojCategoryFilter("האם פעיל", [
            [{ name: "isActive", type: MojDynamicCheckboxComponent, value: true, labelTextKey: "פעיל" }],
            [{ name: "isNotActive", type: MojDynamicCheckboxComponent, labelTextKey: "לא פעיל" }]
          ], null, this.isOpen[5])
        ]
    };
    if (!isInit) {

      this.Filter.createFilter(this.filterConfig);

    }

  }
  filterDataChange(frm: any) {
    //this.updateFilterMenu(false, frm.countryID);
  }

  onCategoryChange = (event, element) => {
    if (!event || !event.target) { return }
    if (event.target.checked)
      console.log("Cate" + (event.target.id), event.target.nextSibling.innerText)

  }
  
  formReadyf(frm: FormGroup) {
    console.log("formReady")
  }

  seeAllClick(c) {
    alert("seeallClick");
  }



  getcityList(): Observable<any[]> {
    let cityList: any[] = [];

    cityList = [
      { value: "ירושלים", key: 1 },
      { value: "רחובות", key: 2 },
      { value: "לוד", key: 3 },
      { value: "אשדוד", key: 4 },
    ];
    return of(cityList);



  }


  patentSearchCategoryBuilder() {
    //demo for server result
    let x = [{
      categoryTypeName: "applicant",
      typeId: 1,
      isOpen: true,
      isDisplay: true,
      isDisplaySearchBox: true,
      detailsAmount: 5,
      maxDetailsAmount: 3,
      categories: [{
        typeId: 1,
        categoryName: "./",
        isChecked: false,
        isExpanded: false,
        maxDetailsAmount: 2,
        categoryId: 0
      },
      {
        categoryId: 1,
        typeId: 2,
        categoryName: " עעסלסחיבלחבחללללללללללללללללללללללללללללללללללללללללל",
        isChecked: false,
        isEnabled: true,
        res: 3,
        isExpanded: false,
        maxDetailsAmount: 2,
        hasChild: false,
        isChilsDisplay: true,
        subCategories: null

      },
      ],

    }, {
      categoryTypeName: "applicant2",
      typeId: 1,
      isOpen: true,
      isDisplay: true,
      isDisplaySearchBox: true,
      detailsAmount: 5,
      maxDetailsAmount: 3,
      categories: [{
        typeId: 1,
        categoryName: "./קכ",
        isChecked: false,
        isExpanded: false,
        maxDetailsAmount: 2,
        categoryId: 0
      },
      {
        categoryId: 1,
        typeId: 2,
        categoryName: " עעסלסחיבלחבחללללללללללללללללללללללללללללללללללללללללל",
        isChecked: false,
        isEnabled: true,
        res: 3,
        isExpanded: false,
        maxDetailsAmount: 2,
        hasChild: false,
        isChilsDisplay: true,
        subCategories: null

      }]
    }];


    this.filterConfig = {
      categories: x.map(a => new MojCategoryFilter(a.categoryTypeName, [],
        this.setSubCategories(true, a.categories)
        , a.isOpen, a.typeId.toString(), a.isDisplaySearchBox, a.detailsAmount))
    };
    
    if (this.Filter != undefined && this.Filter != null)
      this.Filter.createFilter(this.filterConfig);



  }

  setSubCategories(isEnabled: boolean, categories) {
    if (categories == null) return null;
    return categories.map(x =>
      new MojCategoryFilter(
        [[{ name: x.typeId + "_" + x.categoryId, type: MojDynamicCheckboxComponent, labelTextKey: x.categoryName, value: x.isChecked, disabled: !isEnabled, onChange: this.onCategoryChange } as MojDynamicCheckboxField]], null,
        this.setSubCategories(!x.isChecked, x.subCategories),
        x.isExpanded, x.categoryId.toString(), null, x.detailsAmount))
  }

}





