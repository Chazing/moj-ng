import { Component } from '@angular/core';
import { ButtonToggleItem, ButtonToggleStyle } from '@moj/moj-ng';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'moj-buttons-example',
  templateUrl: './buttons-example.component.html'
})
export class ButtonsExampleComponent {
    buttonToggleItems:ButtonToggleItem[] = [
        {id:1, text:'תוכנית', iconClass: "fal fa-star"},
        {id:2, text:'גוש', },
        {id:3, text:'פוליגון'},
        {id:4, iconClass:'fas fa-plus'}
    ]

    buttonToggleItems2: ButtonToggleItem[] = [
        {id:1, text:'בקשות לחידושים', iconClass: "fal fa-file-signature"},
        {id:2, text:'בקשות לשינויים', iconClass: "fal fa-exclamation-triangle" },
        {id:3, text:'בקשות בינלאומיות', iconClass: "fal fa-globe" },
        {id:4, text: "פניות לחיפוש", iconClass:'fal fa-search'},
        {id:5, text: 'הליכים בפני הרשם', iconClass: "fal fa-star"},
        {id:6, text: 'המצאת מסמכים', iconClass: "fal fa-passport" },
        {id:7, text: 'פניות שונות', iconClass: "fal fa-passport"},
        {id:8, text: "בקשות שהוגשו", iconClass:'fal fa-passport'}
    ];

    toggleValue1:number;
    toggleValue2:number;

    buttonToggleStyleType = ButtonToggleStyle;

    ellipsisItems:MenuItem[] = [{
            label: 'File'
        },
        {
            label: 'Edit'
        }];

    onToggleChange(value){
        console.log(value);
    }
}
