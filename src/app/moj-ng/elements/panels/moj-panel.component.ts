import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  AfterContentInit,
  AfterViewChecked
} from '@angular/core';
import { CaptionType } from '../general/general.enum';
import { TranslateService } from '@ngx-translate/core';
import { PanelStyle } from './moj-panel.enum';
import { trigger, state, transition, animate, style } from '@angular/animations';

/**
 * ```html
 * <moj-panel [titleKey]="'Texts.generalDetails'" [isOpen]="true">
        <moj-line>
            <moj-textbox [(ngModel)]="formModel.textField" name="textField" [rangeLength]="[5, 9]" labelWidthColumns="1" controlWidthColumns="2"
                [securityIf]="checkboxValue" [isLabelAboveControl]="true">
            </moj-textbox>
            <moj-textbox #tt="ngModel" [(ngModel)]="formModel.title1" name="title1" minlength="3" labelWidthColumns="1" controlWidthColumns="2"
                labelTextKey="Texts.textField" [requiredIf]="checkboxValue">
            </moj-textbox>
            <moj-textbox [(ngModel)]="formModel.password" name="password" [required]="false" minlength="3" labelWidthColumns="1" controlWidthColumns="2"
                inputType="password">
            </moj-textbox>
        </moj-line>
        <moj-line>
            <moj-checkbox [controlWidthColumns]=1 [labelWidthColumns]=2 [(ngModel)]="checkBoxValue" name="checkBoxValue" [labelTextKey]="'Texts.areYouInterested'">
            </moj-checkbox>
            <moj-dropdownlist [labelWidthColumns]="3" [controlWidthColumns]="2" [required]="true" [(ngModel)]="fileTypeValue" name="fileTypeValue"
                [editable]="true" [items]="dropDownListItems">
            </moj-dropdownlist>
        </moj-line>
    </moj-panel>
 *  ```
* more designs for panel by panelStyle enum
* ```html 
    <moj-panel [panelStyle]="panelStyle.grey">
        ...
    </moj-panel>
    <moj-panel [panelStyle]="panelStyle.card">
        ...
    </moj-panel>
    ```
```typeacript 
    import { PanelStyle } from '../../moj-ng/elements/panels/moj-panel.enum';
    Component({
        ...
    })
    export class FormExampleComponent extends WizardItemComponentBase {
        panelStyle = PanelStyle;
        ...
    }
```
 * With expindation
 * ```html
 * <moj-panel [titleKey]="'Texts.generalDetails'" [isOpen]="true" [isExpandable]="true">
        <moj-line>
            <moj-textbox [isLabelAutowidth]="true" [(ngModel)]="formModel.textField" name="textField" labelWidthColumns="1" controlWidthColumns="2"
                [security]="checkBoxValue" [required]="checkBoxValue">
            </moj-textbox>
            ...
        </moj-line>
        <div class="advanced-section">
            <moj-line>
                <moj-checkbox [controlWidthColumns]=1 [labelWidthColumns]=2 [(ngModel)]="checkBoxValue" name="checkBoxValue" [labelTextKey]="'Texts.areYouInterested'">
                </moj-checkbox>{{checkBoxValue}}
                ...
            </moj-line>
        </div>
    </moj-panel>
 * ```
 * <example-url>../screenshots/panel.JPG</example-url>
 * <example-url>../screenshots/grey-panel.png</example-url>
 * <example-url>../screenshots/card-panel.png</example-url>
 */
export const EXPANSION_PANEL_ANIMATION_TIMING = '500ms cubic-bezier(0.4,0.0,0.2,1)';

@Component({
  selector: 'moj-panel',
  templateUrl: 'moj-panel.component.html',
  animations: [
    trigger('bodyExpansion', [
      state('collapsed, void', style({ height: '0px', opacity: '0', display: 'none' })),
      state('expanded', style({ height: '*', opacity: '1', display: 'block' })),
      transition('expanded <=> collapsed, void => collapsed', animate(EXPANSION_PANEL_ANIMATION_TIMING))
    ])
  ],
  styleUrls: ['moj-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MojPanelComponent implements OnInit {
  ngOnInit(): void {
    this.loadTitleTag();
    if (this.panelStyle == PanelStyle.card || this.panelStyle == PanelStyle.grey) {
      this.showTitle = false;
      this.isOpen = true;
    }
    this.state = this.isOpen == true ? 'open' : 'close';
  }
  @Input() isCollapse: boolean = true;
  @Input() isBorderBottom: boolean = true;
  @Input() isBorderTop: boolean = true;
  @Input() captionType: CaptionType = CaptionType.H3;
  @Input()
  //this setter is for the title will change when input change
  set titleKey(key: string) {
    this._titleKey = key;
    this.loadTitleTag();
  }
  private _titleKey: string;
  @Input() isOpen: boolean = false;
  @Input() isFieldSet: boolean = true;
  @Input() isVisible: boolean = true;
  @Input() id: string;
  @Input() addCloseButton: boolean = false;
  @Input() showTitle: boolean = true;
  @Input() panelStyle: PanelStyle = PanelStyle.white;
  @Input() isExpandable: boolean = false;
  @Output() collapseChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() panelClosed: EventEmitter<any> = new EventEmitter<any>();
  @Input() isBasicMode: boolean = true;

  state: string;
  titleTag: string;
  isClosed: boolean = false;

  getExpandableText(): string {
    return this.isBasicMode ? 'MojTexts.openExpandedLocator' : 'MojTexts.closeExpandedLocator';
  }

  loadTitleTag() {
    let res = this.translate.instant(this._titleKey ? this._titleKey : 'NoTitle');
    this.titleTag = `<${this.captionType} class='txt'>${res}</${this.captionType}>`;
  }

  constructor(private translate: TranslateService, private cdr: ChangeDetectorRef) {}

  onTitleCLick(event) {
    if (this.isCollapse) {
      this.state = this.state == 'close' ? 'open' : 'close';
      this.collapseChange.emit({ state: this.state, panelId: this.id });
    }
  }

  onCloseClick() {
    this.isClosed = true;
    this.panelClosed.emit(this.id);
  }

  onAdditionalClick() {
    this.isBasicMode = !this.isBasicMode;
  }
}
