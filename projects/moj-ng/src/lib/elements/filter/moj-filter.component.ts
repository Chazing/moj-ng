import { Component, Input, ViewEncapsulation, EventEmitter, Output, ChangeDetectionStrategy, ViewChild, AfterContentInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { MojFilter, MojCategoryFilter } from "./moj-filter.model";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { MojDynamicField, MojDynamicCheckboxField } from "../dynamic-form/dynamic-fields";
import { ResizeEvent } from "../../directives/moj-resizable/interfaces/resize-event.interface";
import { MojDynamicFormService } from "../dynamic-form/dynamic-form.service";
import { MojDynamicCheckboxComponent } from '../dynamic-form/dynamic-components';
import { MojFilterService } from './moj-filter.service';

/**
  * Usage example
  * ```typescript
  * export class SomeComponent {
  * this.users:any[] = [
      { value: "יוזר1", key: 1 },
      { value: "יוזר 2", key: 2 },
      { value: "יוזר 3", key: 3 },
      { value: "יוזר 4", key: 4 },
    ];

     filterConfig :MojFilter= {
          categories:
            [
              new MojCategoryFilter(
                    "נוצר ע\"י",
                    [
                        [{ name: "fld13", type: MojDynamicAutoCompleteComponent, labelTextKey: "נוצר ע\"י",items: this.users }as MojDynamicDatepickerField]
                    ]
                    ,null,true),
              new MojCategoryFilter("קישור לתיק", [
                [{ name: "relatedPatentFileID", type: MojDynamicTextboxComponent, labelTextKey: "מזהה תיק" }]
              ],null,true),
            
              new MojCategoryFilter("תאריך עדכון אחרון ", [
                [{ name: "partyUpdateDateFrom", type: MojDynamicDatePickerComponent, labelTextKey:"מתאריך" }],
                [{ name: "partyUpdateDateTo", type: MojDynamicDatePickerComponent, labelTextKey: "עד תאריך" }]
              ],null,false),
              
              new MojCategoryFilter("האם פעיל", [
                [{ name: "isActive", type: MojDynamicCheckboxComponent, value: true, labelTextKey: "פעיל" }],
                [{ name: "isNotActive", type: MojDynamicCheckboxComponent, labelTextKey: "לא פעיל" }]
              ],null,false)
            ]
        };

        filterDataChange(frm: any) {
          console.log(frm);
        }
    }
  * ```
  * ```html
  *  <moj-filter [config]="filterConfig" (filterChange)="filterMyData($event)"></moj-filter> 
  * ```
 
 */


@Component({
    selector: 'moj-filter',
    styleUrls: ["./moj-filter.component.scss"],
    templateUrl: "./moj-filter.component.html",
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MojFilterComponent implements AfterViewInit {
    constructor(private mojDynamicFormService: MojDynamicFormService,
        private fb: FormBuilder, private filterService: MojFilterService, private _cdr: ChangeDetectorRef) {
    }
    form: FormGroup;

    public style: object = {};

    @Input() config: MojFilter;

    @Input() isCheckChildren?: boolean;

    @Input() debounceTime: number = 200;

    @Output() filterChange: EventEmitter<any> = new EventEmitter();

    @Output() formReady = new EventEmitter<FormGroup>()

    @Output() seeAll: EventEmitter<any> = new EventEmitter();

    @Output() searchCategory: EventEmitter<any> = new EventEmitter();

    @Output()  onCategoryOpenClick: EventEmitter<any> = new EventEmitter();

    mapFields(categories: MojCategoryFilter[]): MojDynamicField[] {
        var fields = [];
        categories.forEach(ca => {
            if (ca.category != null && typeof (ca.category) == "object") {
                fields.push(ca.category[0][0]);
                //bind checkbox onchange event
                if (this.isDynamicCheckbox(ca)) {
                    //get user event for merging
                    let userOnchangeEvent = (<MojDynamicCheckboxField>ca.category[0][0]).onChange;
                    (<MojDynamicCheckboxField>ca.category[0][0]).onChange = this.getMergedOnChangeEvent(userOnchangeEvent);
                }
            }
            if (ca.fields) {
                ca.fields.forEach(f => {
                    f.forEach(co => {
                        fields.push(co);
                    });
                });
            }
            if (ca.sub_categories) {
                this.mapFields(ca.sub_categories).forEach(f => {
                    fields.push(f);
                });
            }
        });
        return fields;
    }

    ngOnInit() {
        this.createFilter();
        this.filterService.debounceTime=this.debounceTime;
        this.filterService.isCheckChildren=this.isCheckChildren;
    }


    ngAfterViewInit() {
        this.filterService.seeAllCategory.subscribe(data => {
            if (data != null)
            {
                if(this.seeAll.observers.length > 0)
                    this.seeAll.emit(data);
                else
                    data.maxRecords = null;
            }
        });


        this.filterService.searchCategory.subscribe(data => {
            if (data != null) {
                if (this.searchCategory && this.searchCategory.observers.length > 0) {
                    this.searchCategory.emit(data);
                }
                else {
                    this.search(data.category, data.value);
                }
            }

        });

        this.filterService.ExpandCategory.subscribe(data => {
            if (data != null) {
                this.onCategoryOpenClick.emit(data);
            }

        });
    }

    getMergedOnChangeEvent(userEvent) {
        let onCategoryChange = (event) => {
            let selectedCategory = this.categoryChange(event);
            if (userEvent != undefined && typeof userEvent === "function")
                userEvent(event, selectedCategory);

        }
        return onCategoryChange;
    }

    createFilter(config?: MojFilter) {
        this.form = this.fb.group({});
        if (config != undefined) {
            this.config = config;
        }
        this.config.categories.forEach(x => { x.isMain = true; })
        const controls = this.mapFields(this.config.categories);
        this.mojDynamicFormService.addControls(this.form, [controls]);
        this.formReady.emit(this.form);
        this.form.valueChanges.subscribe(form => {
            this.filterChange.emit(form);
        })

    }
    // bindOnchaneEvent()
    // {
    //     this.checkBoxlistForEventBinding.forEach(element => {
    //        this.form.controls[element].valueChanges.subscribe(x => {
    //           this.onCategoryChange(x,element);
    //     });
    // });
    // }








    //event of checkbox category change
    categoryChange(event) {
        let selectedCategory = null;
        if (!event || !event.target) { return }
        if (this.isCheckChildren != false) {
            selectedCategory = this.uncheckParentAndGetCatetegory(this.config.categories, event.target.id, event.target.checked);
            if (event.target.checked) {
                selectedCategory.isOpen = true;
                if (selectedCategory != null && selectedCategory != undefined && selectedCategory.hasChildren) {
                    this.checkSubCategories(selectedCategory);
                }
            }

        }
        return selectedCategory;
    }



    // onCategoryChange = (event) => {
    //     
    //     let selectedCategory = null;
    //     if (!event || !event.target) { return }
    //     if (this.isCheckChildren != false) {
    //         selectedCategory = this.uncheckParentAndGetCatetegory(this.config.categories, event.target.id, event.target.checked);
    //         if (event.target.checked) {
    //             selectedCategory.isOpen = true;
    //             if (selectedCategory != null && selectedCategory != undefined && selectedCategory.hasChildren) {
    //                 this.checkSubCategories(selectedCategory);
    //             }
    //         }

    //     }
    // }


    //check subcategories by  parent checkbox category
    checkSubCategories(categoty: MojCategoryFilter) {
        categoty.sub_categories.forEach((element, index) => {
            if ( element.category != null && this.isDynamicCheckbox(element)
                && (categoty.maxRecords == null || index < categoty.maxRecords) && categoty.isDisplay) {
                this.form.controls[(<MojDynamicField>element.category[0][0]).name].setValue(true);

                element.isOpen = true;
            }
            if (element.hasChildren) {

                this.checkSubCategories(element);

                //open selected categories
                element.isOpen = element.isOpen || element.sub_categories.some(x => x.isOpen == true);
            }
        });



    }

    //get selected checkbox category and unselect its parent if it's unChecked
    uncheckParentAndGetCatetegory(categories: MojCategoryFilter[], fieldId: string, isChecked: boolean): MojCategoryFilter {

        let selectedCategory: MojCategoryFilter;
        for (let i = 0; i < categories.length; i++) {
            let ca = categories[i];
            if (ca.category != null && this.isDynamicCheckbox(ca)) {
                if ((<MojDynamicField>ca.category[0][0]).name == fieldId) {
                    selectedCategory = ca;
                    break;
                }
            }
            if (ca.sub_categories) {
                selectedCategory = this.uncheckParentAndGetCatetegory(ca.sub_categories, fieldId, isChecked)
                if (!isChecked && selectedCategory != undefined && this.isDynamicCheckbox(ca)) {
                    this.form.controls[(<MojDynamicField>ca.category[0][0]).name].setValue(false);
                }
                if (selectedCategory != undefined) {
                    return selectedCategory;
                }
            }
        }

        if (selectedCategory != undefined) {
            return selectedCategory;
        }


    }

    //check if category is check box field
    isDynamicCheckbox(ca) {
        return typeof (ca.category) == "object" && ca.category[0][0].type && ca.category[0][0].type == MojDynamicCheckboxComponent
    }

    validate(event: ResizeEvent): boolean {
        const MIN_DIMENSIONS_PX_WIDTH: number = 100;
        if (event.rectangle.width && event.rectangle.width < MIN_DIMENSIONS_PX_WIDTH) {
            return false;
        }
        return true;
    }

    onResizing(event: ResizeEvent): void {
        this.style = {
            width: `${event.rectangle.width}px`,
        };
    }

    //search categories by searchfilter terms
    search(category: MojCategoryFilter, searchText: string) {

        if (category.sub_categories)
            category.sub_categories.forEach(element => {
                this.recorsiveSearch(element, searchText);
                this._cdr.detectChanges();
            });

    }

    //search categories by search term and display parent if one of its children or grandchildren answer the terms 
    recorsiveSearch(category: MojCategoryFilter, searchText: string) {
        if (category.category&& searchText!=null && (typeof (category.category) == "string" && category.category.toLowerCase().indexOf(searchText.toLowerCase()) != -1 ||
            typeof (category.category) == "object" && category.category[0][0].labelTextKey.toLowerCase().indexOf(searchText.toLowerCase()) != -1 || searchText == "")) {
            category.isDisplay = true;
        }

        else
            category.isDisplay = false;

        if (!category.hasChildren)
            return category.isDisplay;

        if (category.sub_categories) {
            let res = category.sub_categories.filter(x => x.isDisplay = this.recorsiveSearch(x, searchText))
            category.isDisplay = category.isDisplay || res.some(x => x.isDisplay);
        }

    }
}