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
    ElementRef,
    Renderer2
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DialogResultEnum } from './message.enum';
import { DialogResult } from './dialog-result';
import { MojUtilsService } from '../shared/utils';
import { MojDirection } from '../elements/website/language';

@Component({
    selector: 'dialog-wrapper',
    template: `
    <p-dialog 
      [header]="title"
      [closable]="closable"
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
    styleUrls: ['./dialog-wrapper.component.scss'],
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
    @Input() closable :boolean=true;
    @ViewChild('dialogContent', { read: ViewContainerRef, static: true }) public dialogContentVcr;
    contentStyle = { overflow: 'auto' };

    constructor(
        private translateService: TranslateService,
        public viewContainerRef: ViewContainerRef,
        private element: ElementRef,
        private renderer: Renderer2,
        private utils: MojUtilsService
    ) {
        this.rtl = this.utils.currentLang.dir === MojDirection.rtl;
        this.styleClass += this.utils.getMojDirClass();
        // this.styleClass=this.styleClass!=null ?this.styleClass+"moj-ltr" :"moj-rtl";
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
        this.renderer.addClass(dialogDiv, this.styleClass);
    }

    onClose() {
        this.close.emit({ dialogResultType: DialogResultEnum.Cancel });
    }
}
