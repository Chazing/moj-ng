import {
  Component,
  Input,
  ViewContainerRef,
  ViewChild,
  Injector,
  Output,
  EventEmitter,
  OnInit,
  AfterViewInit,
  ViewEncapsulation,
  ElementRef
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DialogResultEnum } from './message.enum';
import { DialogResult } from './dialog-result';

@Component({
  selector: 'dialog-wrapper',
  template: `
    <p-dialog
      [header]="title"
      [contentStyle]="contentStyle"
      [styleClass]="styleClass"
      [visible]="true"
      [width]="width"
      [rtl]="rtl"
      [modal]="true"
      [height]="height"
      (visibleChange)="onClose()"
      ><div #dialogContent></div>
      <p-footer *ngIf="isAddFooter"></p-footer
    ></p-dialog>
  `,
  styleUrls: ['./dialog-wrapper.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DialogWrapperComponent implements OnInit, AfterViewInit {
  @Input() title: string;
  @Input() width: number;
  @Input() rtl: boolean = true;
  @Input() height: number = null;
  @Input() styleClass: string = null;
  @Input() isAddFooter: boolean = true;
  @Input() preventScroll: boolean;
  @Output() close: EventEmitter<DialogResult> = new EventEmitter();
  @ViewChild('dialogContent', { read: ViewContainerRef }) public dialogContentVcr;
  contentStyle = { overflow: 'auto' };

  constructor(
    private translateService: TranslateService,
    public viewContainerRef: ViewContainerRef,
    private element: ElementRef
  ) {
    this.rtl = translateService.currentLang === 'he';
  }

  ngOnInit(): void {
    this.translateService.get(this.title).subscribe(res => {
      this.title = res;
    });
    if (this.preventScroll) this.contentStyle = { overflow: 'visible' };
  }

  ngAfterViewInit() {
    let dialogDiv = document.querySelector('div[role=dialog]');
    dialogDiv.setAttribute('aria-describedby', 'ui-dialog-description');
  }

  onClose() {
    this.close.emit({ dialogResultType: DialogResultEnum.Cancel });
  }
}
