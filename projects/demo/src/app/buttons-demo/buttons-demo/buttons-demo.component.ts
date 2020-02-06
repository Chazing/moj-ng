import { Component, OnInit } from '@angular/core';
import { Enums, ENUMS } from '../../enums';
import { ButtonToggleItem, ButtonToggleStyle } from '@moj/moj-ng';


@Component({
    selector: 'app-buttons-demo',
    templateUrl: './buttons-demo.component.html',
    styleUrls: ['./buttons-demo.component.css']
})
export class ButtonsDemoComponent implements OnInit {
    Enums: Enums = ENUMS;
    toggleValue1: number;
    toggleValue2: number;
    buttonToggleStyleType = ButtonToggleStyle;
    buttonToggleItems: ButtonToggleItem[] = [
        { id: 1, text: 'תוכנית' },//, cssClasses:'orange1'
        { id: 2, text: 'גוש', },
        { id: 3, text: 'פוליגון' },
        { id: 4, text: 'חלקה' }
    ];

    buttonToggleItems3: ButtonToggleItem[] = [
        { id: 1, iconClass: 'fas fa-search' },//, cssClasses:'orange1'
        { id: 2, iconClass: 'fas fa-passport', },
        { id: 3, iconClass: 'fas fa-globe' },
        { id: 4, iconClass: 'fas fa-signature' }
    ];

    buttonToggleItems4: ButtonToggleItem[] = [
        { id: 1, text: 'תוכנית', iconClass: 'fas fa-search' },//, cssClasses:'orange1'
        { id: 2, text: 'גוש', iconClass: 'fas fa-passport', },
        { id: 3, text: 'פוליגון', iconClass: 'fas fa-globe' },
        { id: 4, text: 'חלקה', iconClass: 'fas fa-signature' }
    ];

    buttonToggleItems2: ButtonToggleItem[] = [
        { id: 1, text: 'בקשות לחידושים', iconClass: "fal fa-file-signature" },
        { id: 2, text: 'בקשות לשינויים', iconClass: "fal fa-exclamation-triangle" },
        { id: 3, text: 'בקשות בינלאומיות', iconClass: "fal fa-globe" },
        { id: 4, text: "פניות לחיפוש", iconClass: 'fal fa-search' },
        { id: 5, text: 'הליכים בפני הרשם', iconClass: "fal fa-star" },
        { id: 6, text: 'המצאת מסמכים', iconClass: "fal fa-passport" },
        { id: 7, text: 'פניות שונות', iconClass: "fal fa-passport" },
        { id: 8, text: "בקשות שהוגשו", iconClass: 'fal fa-passport' }
    ];


    constructor() { }

    ngOnInit() {
    }
    onButtonClick() { }


    onToggleChange(value) {
        console.log(value);
    }
}
