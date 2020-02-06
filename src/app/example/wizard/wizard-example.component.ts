import { Component, OnInit, ViewChildren, QueryList, Type, ViewContainerRef, ViewChild } from '@angular/core';
import { WizardItem } from '../../moj-ng/elements/wizard/wizard-item/wizard-item.model';
import { AutocompleteExampleComponent } from '../autocomplete/autocomplete-example.component';
import { MultiSelectExampleComponent } from '../multiselect/multiselect-example.component';
import { FormExampleComponent } from '../form-example/form-example.component';
import { Alignment } from '../../moj-ng/elements/general/general.enum';
import { WizardItemModel } from '../../moj-ng/elements/wizard/service/moj-wizard.service';
import { FileUploadExampleComponent } from '../file-upload-example/file-upload-example.component';
import { ReactiveFormExampleComponent } from '../form-example/reactive-form-example/reactive-form-example.component';

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
            label: 'בחירת פניה', component: FileUploadExampleComponent,
            //wizardSubItems: [{ label: 'דין קדימה', component: AutocompleteExampleComponent },
            //    { label: 'דין קדימה', component: AutocompleteExampleComponent, isForMetro: true,  },
            //{ label: 'דין קדימה', component: MultiSelectExampleComponent }]
        },
        {
          label: 'הוספת בקשה', component: MultiSelectExampleComponent,
        },
        {
            label: 'אישור הבקשה', component: MultiSelectExampleComponent, 
        },
        {
            label: 'ביצוע התשלום', component: MultiSelectExampleComponent, 
        },
        {
            label: 'טופס', component: FormExampleComponent,
            componentData: { name: 'my form', id: 1 },
        },
        {
            label: 'Reactive', component: ReactiveFormExampleComponent,
            componentData: { name: 'my form', id: 1 },
        }]
    }

    submit(wizardItemModels: WizardItemModel[]) {
        alert(`wizardItemModels: ${JSON.stringify(wizardItemModels)}`);
    }

}