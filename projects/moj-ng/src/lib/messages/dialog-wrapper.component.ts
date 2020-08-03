import { MojLanguageService } from './../shared/moj-language.service';
import {
    Component,
    Input,
    ViewContainerRef,
    ViewChild,
    Output,
    EventEmitter,
    OnInit,
    AfterViewInit,
    ViewEncapsulation,
    Renderer2
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DialogResultEnum } from './message.enum';
import { DialogResult } from './dialog-result';
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
    @Input() closable: boolean = true;
    @ViewChild('dialogContent', { read: ViewContainerRef, static: true }) public dialogContentVcr;
    contentStyle = { overflow: 'auto' };

    constructor(
        private translateService: TranslateService,
        public viewContainerRef: ViewContainerRef,
        private renderer: Renderer2,
        private languageService: MojLanguageService
    ) {
        this.rtl = this.languageService.currentLang.dir === MojDirection.rtl;
    }

    ngOnInit(): void {
        if (this.title) {
            this.translateService.get(this.title).subscribe(res => {
                this.title = res;
            });
        }
        if (this.preventScroll) this.contentStyle = { overflow: 'visible' };
    }

    ngAfterViewInit() {
        let dialogDiv = document.querySelector('div[role=dialog]');
        dialogDiv.setAttribute('aria-describedby', 'ui-dialog-description');
        this.renderer.addClass(dialogDiv, this.styleClass);
        this.renderer.addClass(dialogDiv, this.languageService.getMojDirClass());
    }

    onClose() {
        this.close.emit({ dialogResultType: DialogResultEnum.Cancel });
    }
}
