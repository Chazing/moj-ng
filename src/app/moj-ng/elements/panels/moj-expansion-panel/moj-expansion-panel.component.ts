import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input, EventEmitter, Output, ChangeDetectorRef, ContentChild } from '@angular/core';
import { transition, state, style, animate, trigger } from '@angular/animations';
import { PermissionService } from '../../../permissions/permission.service';
import { TranslateService } from '@ngx-translate/core';


/**
  * Usage example
  * ```html
  * <moj-autocomplete name="autocompleteValue"
                          labelTextKey="Texts.Choose"
                          labelWidthColumns="1"
                          controlWidthColumns="2"
                          [items]="listItems"
                          [fieldName]="'ProductName'"
                          fieldID="ID"
                          [(ngModel)]="autocompleteValue">
        </moj-autocomplete>
  * ```
  * for custom list with template:
  * ```html
  * <moj-autocomplete name="autocompleteValue" labelTextKey="Texts.Choose" labelWidthColumns="1" controlWidthColumns="2" [items]="listItems"
            [fieldName]="'Value'" [fieldID]="'Key'" required [(ngModel)]="autocompleteValue">
            <ng-template let-item pTemplate="custom">
                    <div class="some-class">{{item.Value}}</div>
            </ng-template>
        </moj-autocomplete>
  * ```
  * <example-url>../screenshots/autocomplete.JPG</example-url>
  * <example-url>../screenshots/autocompleteDropdown.JPG</example-url>
  * <example-url>../screenshots/autocompleteMultiple.JPG</example-url>
 */





//const EXPANSION_PANEL_ANIMATION_TIMING = '1000ms cubic-bezier(1.20,0.0,0.2,1)';
@Component({
  selector: 'moj-expansion-panel',
  templateUrl: './moj-expansion-panel.component.html',
  animations: [
    trigger('bodyExpansion', [
        state('collapsed', style({ height: '0px'})),
        state('expanded', style({ height: '*'})),
        transition('expanded => collapsed', [animate("0.2s")]),
        transition('collapsed => expanded', [animate("0.2s")])
    ]),
    trigger('conentExpansion', [
      state('fade', style({ opacity: '0' })),
      state('displayed', style({ opacity: '1' })),
      transition('displayed => fade', [animate("0.22s")]),
      transition('fade => displayed', [animate("0.22s")])
  ])
  ] ,
    styleUrls: ['moj-expansion-panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class MojExpansionPanelComponent implements OnInit {
  @Input() isOpen: boolean = true;
  @Input() hideToggle:boolean=false;
  @Input() title:string;//for simple panels without header component(ngcontent)

@Output() OnToggle:EventEmitter<any>=new EventEmitter();//returns isOpen
  constructor(private translate: TranslateService, private cdr: ChangeDetectorRef, private permissionService: PermissionService) { }

  ngOnInit(): void {
 
}
ToggleClicked(){
  this.isOpen=!this.isOpen;
  this.OnToggle.emit(this.isOpen);

}
}
