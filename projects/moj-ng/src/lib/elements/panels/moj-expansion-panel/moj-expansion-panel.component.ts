import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input, EventEmitter, Output, ChangeDetectorRef, ContentChild } from '@angular/core';
import { transition, state, style, animate, trigger } from '@angular/animations';
import { PermissionService } from '../../../permissions/permission.service';
import { TranslateService } from '@ngx-translate/core';


/**
  * Usage example
  * ```html
  *        <moj-expansion-panel [title]="'כותרת לדוגמה'">
                  תוכן כלשהו

            </moj-expansion-panel>
  * ```
  * for panel with rich header content:
  * ```html
  *    <moj-expansion-panel >
  * <moj-expansion-panel-header>
                        <div class="header">
                             <i class="fab fa-acquisitions-incorporated"></i>
                              <h3>כותרת לדוגמה</h3>
                             
                        </div>
                        <h6 class="subTitle">כאן יבוא הסבר קצר </h6>

                  </moj-expansion-panel-header>
                  תוכן כלשהו

            </moj-expansion-panel>
  * ```
  */





//const EXPANSION_PANEL_ANIMATION_TIMING = '1000ms cubic-bezier(1.20,0.0,0.2,1)';
@Component({
  selector: 'moj-expansion-panel',
  templateUrl: './moj-expansion-panel.component.html',
  animations: [
    trigger('bodyExpansion', [
      state('collapsed', style({ height: '0px' })),
      state('expanded', style({ height: '*' })),
      transition('expanded => collapsed', [animate("0.2s")]),
      transition('collapsed => expanded', [animate("0.2s")])
    ]),
    trigger('bodyOpacity', [
      state('collapsed', style({ opacity: '0' })),
      state('expanded', style({ opacity: '1' })),
      transition('expanded => collapsed', [animate("0.22s")]),
      transition('collapsed => expanded', [animate("0.22s")])
    ])],
  styleUrls: ['moj-expansion-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MojExpansionPanelComponent implements OnInit {
  @Input() isOpen: boolean = true;
  @Input() hideToggle: boolean = false;
  @Input() title: string;//for simple panels without header component(ngcontent)
  @Input() minHeight:number;
  @Output() OnToggle: EventEmitter<any> = new EventEmitter();//returns isOpen
  constructor(private translate: TranslateService, private cdr: ChangeDetectorRef, private permissionService: PermissionService) { }

  ngOnInit(): void {

  }
  ToggleClicked() {
    this.isOpen = !this.isOpen;
    this.OnToggle.emit(this.isOpen);

  }
}
