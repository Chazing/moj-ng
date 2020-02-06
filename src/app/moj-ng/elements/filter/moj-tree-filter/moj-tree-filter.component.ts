import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { MojCategoryFilter } from "../moj-filter.model";
import { trigger, state, transition, animate, style } from "@angular/animations";
import { FormGroup } from "@angular/forms";

const EXPANSION_PANEL_ANIMATION_TIMING = '500ms cubic-bezier(0.4,0.0,0.2,1)';

@Component({
    selector: 'moj-tree-filter',
    templateUrl: "./moj-tree-filter.component.html",
    animations: [
        trigger('bodyExpansion', [
            state('collapsed, void', style({ height: '0px', opacity: '0' })),
            state('expanded', style({ height: '*', opacity: '1' })),
            transition('expanded <=> collapsed, void => collapsed', animate(EXPANSION_PANEL_ANIMATION_TIMING))
        ])
    ]
})
export class MojTreeFilterComponent {

    isOpen: boolean = false;

    @Input() form: FormGroup;

    @Input() nodes: MojCategoryFilter[];

    isOpenClick(controlName, isOpen) {
        if (controlName != null)
            this.form.controls[controlName].setValue(isOpen)
    }

}