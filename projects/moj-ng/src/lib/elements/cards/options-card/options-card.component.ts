import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ENUMS } from '../../../shared/enums';

/**
 example usage
 ```html
 <demo-container [title]="'Options Card'">
  <moj-options-card-container>
    <moj-options-card [titleTextKey]="'כניסה עם כרטיס חכם'" [contentTextKey]="'יש לחבר כרטיס לקורא כרטיסים'" [buttonTextKey]="'כניסה'" [iconClass]="'example-icon'">
    </moj-options-card>

    //with custom content at the card body 
    <moj-options-card [titleTextKey]="'כניסה עם הזדהות ממשלתית'" [buttonTextKey]="'כניסה'" [iconClass]="'example-icon'">
      <moj-dynamic-label [fontWeight]=enums.FontWeight.normal [fontSize]="enums.FontSize.font20"
      [color]=enums.MojColor.Default [textKey]="'נדרש רישום חד פעמי המאפשר גישה למספר שרותים ממשלתיים'">
    </moj-dynamic-label>
    </moj-options-card>
  </moj-options-card-container>
</demo-container>
 ```
 */
@Component({
  selector: 'moj-options-card',
  templateUrl: './options-card.component.html',
  styleUrls: ['./options-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MojOptionsCardComponent implements OnInit {
  enums = ENUMS;
  @Input() titleTextKey: string;
  @Input() contentTextKey: string;
  @Input() buttonTextKey: string;
  @Input() iconClass;

  @Output() buttonClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
}
