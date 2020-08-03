import { Component, OnInit } from '@angular/core';
import { MultiSelectExampleComponent } from '../multiselect/multiselect-example.component';
import { FormExampleComponent } from '../form-example/form-example.component';
import { FileUploadExampleComponent } from '../file-upload-example/file-upload-example.component';
import { ReactiveFormExampleComponent } from '../form-example/reactive-form-example/reactive-form-example.component';
import { WizardItem, Alignment, WizardItemModel } from '@moj/moj-ng';

@Component({
    selector: 'moj-wizard-example',
    templateUrl: './wizard-example.component.html',
    styleUrls: ['./wizard-example.component.css']
})
export class WizardExampleComponent implements OnInit {

    items: WizardItem[]
    alighment = Alignment;

    guidelines = [
        {guidelineTitle:'הנחיה ראשונה', guidelineMessage:'איתור גוש וחלקה לפי כתובת, ניתן לבצע באתר האינטרנט של המרכז'},
        {guidelineTitle:'הנחיה שניה', guidelineMessage:'<p><span style="background-color: rgb(249, 249, 249); color: rgb(50, 50, 50);">בתדריכים מפורטים הנחיות ודגשים בנוגע להגשת הבקשות&nbsp;</span><a href="666666666666" target="_blank">666666666666</a></p><p>דגכדכג525gk</p><p>דגכדכג657657657</p><p>דגכדכ</p>'},
        {guidelineTitle:'תדריכים להגשת בקשות', guidelineMessage:'איתור גוש וחלקה לפי כתובת, ניתן לבצע באתר האינטרנט של המרכז'},
    ]

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