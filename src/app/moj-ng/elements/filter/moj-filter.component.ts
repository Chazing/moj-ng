import { Component, Input, ViewEncapsulation, EventEmitter, Output, ChangeDetectionStrategy } from "@angular/core";
import { MojFilter, MojCategoryFilter } from "./moj-filter.model";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { MojDynamicField } from "../dynamic-form/dynamic-fields";
import { ResizeEvent } from "../../directives/moj-resizable/interfaces/resize-event.interface";
import { MojDynamicFormService } from "../dynamic-form/dynamic-form.service";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
    selector: 'moj-filter',
    styleUrls: ["./moj-filter.component.scss"],
    templateUrl: "./moj-filter.component.html",
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MojFilterComponent {
    constructor(private mojDynamicFormService: MojDynamicFormService, private fb: FormBuilder) {
    }

    isOpen: boolean = false;

    form: FormGroup;

    @Input() config: MojFilter;

    @Output() filterChange: EventEmitter<any> = new EventEmitter();

    mapFields(categories: MojCategoryFilter[]): MojDynamicField[] {
        var fields = [];
        categories.forEach(ca => {
            if (ca.controlName != null) { this.form.addControl(ca.controlName, new FormControl(false)); }
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
    }

    createFilter() {
        this.form = this.fb.group({});
        this.config.categories.forEach(x => { x.isMain = true; })
        const controls = this.mapFields(this.config.categories);
        this.mojDynamicFormService.addControls(this.form, [controls]);
        this.form.valueChanges.subscribe(form => {
            this.filterChange.emit(form);
        })
        //this.createCategoryControls(this.config.categories);
    }

    // createCategoryControls(categories: MojCategoryFilter[])
    // {
    //     let controls=[];
    //      categories.forEach(ca => {
    //         if (ca.fields && ca.controlName!=null) {
    //             this.form.addControl(ca.controlName ,new FormControl(false));
    //         }
    //         if (ca.sub_categories) {
    //             this.createCategoryControls(ca.sub_categories);
    //         }
    //     });
    // }

    public style: object = {};
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
}