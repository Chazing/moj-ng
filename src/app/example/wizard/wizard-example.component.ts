import { Component, OnInit, ViewChildren, QueryList, Type, ViewContainerRef, ViewChild } from '@angular/core';
import { WizardItem } from '../../moj-ng/elements/wizard/wizard-item/wizard-item.model';
import { AutocompleteExampleComponent } from '../autocomplete/autocomplete-example.component';
import { MultiSelectExampleComponent } from '../multiselect/multiselect-example.component';
import { FormExampleComponent } from '../form-example/form-example.component';
import { Alignment } from '../../moj-ng/elements/general/general.enum';
import { WizardItemModel } from '../../moj-ng/elements/wizard/service/moj-wizard.service';

@Component({
    selector: 'moj-wizard-example',
    templateUrl: './wizard-example.component.html',
    styleUrls: ['./wizard-example.component.css']
})
export class WizardExampleComponent implements OnInit {

    items: WizardItem[]
    alighment = Alignment;

    constructor() { }

    ngOnInit() {
        this.items = [{
            label: 'סוג הבקשה', component: AutocompleteExampleComponent,
            //wizardSubItems: [{ label: 'דין קדימה', component: AutocompleteExampleComponent },
            //    { label: 'דין קדימה', component: AutocompleteExampleComponent, isForMetro: true,  },
            //{ label: 'דין קדימה', component: MultiSelectExampleComponent }]
        },
        {
            label: 'דין קדימה', component: MultiSelectExampleComponent,
            //wizardSubItems: [{ label: 'בקשה ראשונה', component: MultiSelectExampleComponent, isForMetro: true },
            //    { label: 'בקשה שניה', component: AutocompleteExampleComponent, isForMetro: true}]
        },
        //, width:'150px', readonly: true
        {
            label: 'דין קדימה', component: FormExampleComponent,
            componentData: { name: 'my form', id: 1 },
        },
        {
            label: 'דין קדימה', component: MultiSelectExampleComponent, isForMetro: true,
        }]
    }

    submit(wizardItemModels: WizardItemModel[]) {
        alert(`wizardItemModels: ${JSON.stringify(wizardItemModels)}`);
    }

}