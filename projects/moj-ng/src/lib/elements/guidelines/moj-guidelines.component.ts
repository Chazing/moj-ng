import {Component, Input, ChangeDetectionStrategy, OnInit, ViewEncapsulation} from '@angular/core';
import {Guideline} from './guideline.model';
import { TranslateService } from '@ngx-translate/core';

/**
 * Example
  ```html
    <moj-guidelines [guidelines]="guidelines"></moj-guidelines>
  ```
   ```typescript
    guidelines:Guideline[] = [
        {guidelineTitle:'תדריכים להגשת בקשות', guidelineMessage:'איתור גוש וחלקה לפי כתובת, ניתן לבצע באתר האינטרנט של המרכז'},
        {guidelineTitle:'הנחיה ראשונה', guidelineMessage:'לחיע ךלחיךלחע  גכע גכע גכעכע צעצנצ וןטעעיהכ ליעלחיעחלי לחיעלחיעיח ךיעע לחיךל '}
    ]
  ```
 */

@Component({
    selector: 'moj-guidelines',
    templateUrl: 'moj-guidelines.component.html',
    styleUrls:['moj-guidelines.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation:ViewEncapsulation.None //for guidelines-container class 
})
export class MojGuidelinesComponent implements OnInit {
    @Input()
    guidelines:Guideline[];

    @Input()
    title:string = 'MojTexts.guidelines';

    @Input()
    isVisible = true;

    constructor(private translateService:TranslateService){
    }

    ngOnInit(){
        this.title = this.translateService.instant(this.title);
    }

    onButtonClick(){
        this.isVisible = !this.isVisible;
    }
}