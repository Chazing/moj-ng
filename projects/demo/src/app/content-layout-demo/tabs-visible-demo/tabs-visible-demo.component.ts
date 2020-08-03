import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import {  MojTab } from '@moj/moj-ng';
import { Tab1ContentComponent } from './tab1-content/tab1-content.component';
import { Tab2ContentComponent } from './tab2-content/tab2-content.component';
import { Tab3ContentComponent } from './tab3-content/tab3-content.component';
import { Enums, ENUMS } from '../../enums';

@Component({
    selector: 'app-tabs-visible-demo',
    templateUrl: './tabs-visible-demo.component.html'
})
export class TabsVisibleDemoComponent implements OnInit {
    Enums : Enums = ENUMS;

    items: any[] = [
        { title$: of("טאב לדוגמה"), component: Tab1ContentComponent },
        { title$: of("טאב נוסף"), component: Tab2ContentComponent },
        { title$: of("טאב שלישי"), component: Tab3ContentComponent }
    ];

    items2: any[] = [
        { title$: of("טאב לדוגמה"), component: Tab1ContentComponent },
        { title$: of("טאב נוסף"), component: Tab2ContentComponent, selected: true },
        { title$: of("טאב שלישי"), component: Tab3ContentComponent }
    ];
    
    items3: any[] = [
        { title$: of("טאב לדוגמה"), component: Tab1ContentComponent, removable: true },
        { title$: of("טאב נוסף"), component: Tab2ContentComponent, removable: true },
        { title$: of("טאב שלישי"), component: Tab3ContentComponent, removable: true }
    ]
  
    items4: any[] = [
        { title$: of("טאב לדוגמה"),iconBefore:"far fa-heart", component: Tab1ContentComponent },
        { title$: of("טאב נוסף"), iconBefore:"far fa-envelope", component: Tab2ContentComponent },
        { title$: of("טאב שלישי"),iconBefore:"far fa-user" ,component: Tab3ContentComponent }
    ];
    constructor() { }

    ngOnInit() {
    }

}
