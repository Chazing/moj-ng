import { Component, ViewChild, ViewContainerRef, AfterViewInit, ElementRef, AfterViewChecked } from '@angular/core';
import { MojMessagesService } from '../../moj-ng/messages/moj-messages.service';
import { MessageType, DialogResultEnum } from '../../moj-ng/messages/message.enum';
import { WizardItemComponentBase } from '../../moj-ng/elements/wizard/wizard-item/wizard-item-component.base';
import { MojDialogService } from '../../moj-ng/messages/moj-dialog.service';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { LabelStyle, LabelAlign } from '../../moj-ng/elements/label/label.enum';
import { FontSize, FontWeight, MojColor } from '../../moj-ng/elements/label/moj-dynamic-label.component';
import { MojLoadingService } from '../../moj-ng/elements/moj-loading/moj-loading.service';
import { ButtonStyle } from '../../moj-ng/elements/buttons/button-style';
import { HttpClient } from '@angular/common/http';
import { MojTab } from '../../moj-ng/elements/tabs/models/moj-tabs.models';
import { MojTabsService } from '../../moj-ng/elements/tabs/services/moj-tabs.service';
import { of, Observable } from 'rxjs';
import { ElementSize } from '../../moj-ng/elements/base/element-size.enum';
import { ValidationPatterns } from '../../moj-ng/validations/customValidators/validation-patterns';
import { PanelStyle } from '../../moj-ng/elements/panels/moj-panel/moj-panel.enum';

@Component({
  selector: 'moj-form-example',
  templateUrl: './form-example.component.html'
})
export class FormExampleComponent extends WizardItemComponentBase implements AfterViewInit {
  // public mask = {
  //   mask: [/[A-Z]/i, /\d/, /[A-Z]/i, ' ', /\d/, /[A-Z]/i, /\d/],
  //   guide: true,
  //  showMask: true
  // };
  ngOnInit(): void {
    //this.loadingService.show(this.pnlGeneral);
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.pnlToAddHtml.nativeElement.innerHTML += `
      <moj-line>
      lfksdjfl sjdlkfj sldjf lsdjf lsdjlf jsdlkj l
  </moj-line>
      `;
    }, 1000);
  }
  @ViewChild('pnl', { read: ViewContainerRef, static: true }) pnl: ViewContainerRef;
  @ViewChild('pnlGeneral', { read: ViewContainerRef, static: true }) pnlGeneral: ViewContainerRef;
  @ViewChild('pnlToAddHtml', { read: ElementRef, static: true }) pnlToAddHtml: ElementRef;

  checkBoxValue;
  formModel: any = {};
  buttonStyle = ButtonStyle;
  labelAlign = LabelAlign;
  fileTypeValue: number;
  defaultItemDropDown = { id: 2, value: 'tiff' };
  dropDownListItems: any = [{ id: 1, name: 'pdf' }, { id: 2, name: 'tiff' }, { id: 3, name: 'jpg' }];
  numberItems: any[] = [{ id: 1, name: '1' }, { id: 2, name: '2' }, { id: 3, name: '3' }];
  labelText: string = 'גוף פונה';
  labelStyle = LabelStyle;
  fontSize = FontSize;
  fontWeight = FontWeight;
  mojColor = MojColor;
  panelStyle = PanelStyle;
  size = ElementSize;
  number = 1;
  dateFrom;
  dateTo = [null, null, null];
  numberFrom;
  numberTo;
  stringFrom;
  stringTo = 'a';
  sliderValue = [20, 60];
  minDate = new Date(2018, 12, 12);
  maxDate = new Date();

  validationPattern:RegExp= ValidationPatterns.HebrewEnglishNumberPattern;
  mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  checkBoxListItems: any = [
    { id: 1, text: "pdf", value: 0 },
    { id: 2, text: "tiff", value: 0 },
    { id: 3, text: "jpg", value: 0 }
  ];
  exDivArr: any[] = [];
  addItemToArr() {
    this.exDivArr.push("asdkasd kjashdhas");
  }
  ff(el: HTMLDivElement): Observable<string> {
    return new Observable(boserver => {
      setTimeout(() => {
        boserver.next(el.scrollHeight.toString());
      }, 10);
    });
  }

  autocompleteValueFrom: ListItem[] = [{ id: 1, name: '1' }, { id: 2, name: '2' }, { id: 3, name: '3' }];
  autocompleteValueTo: ListItem;

  customValidationErrors = [{ key: 'required', value: 'customRequired' }];

  radioOptions = 1;
  addBtn = {
    id: 'addInterested',
    icon: 'fa fa-plus',
    tooltip: 'aaa',
    btnCommand: e => {
      if (!this.isShowLoadingPnl) {
        this.loadingService.show(this.pnlGeneral);
      } else {
        this.loadingService.hide(this.pnlGeneral);
      }
      this.isShowLoadingPnl = !this.isShowLoadingPnl;
    }
  };

  isShowLoading: boolean = false;
  isShowLoadingPnl: boolean = false;

  tab: MojTab;

  constructor(
    private messagesService: MojMessagesService,
    private dialogService: MojDialogService,
    private loadingService: MojLoadingService,
    private mojTabsService: MojTabsService,
    private httpClient: HttpClient
  ) {
    super();
  this.wizardItemModel = 'formModel';
    this.tab = new MojTab('/bo-example/root/tab9', of("טופס"));
    this.tab = this.mojTabsService.addOrGetTab(this.tab);
  }

  onSubmit(value) {
    alert(`Submit: ${JSON.stringify(value)}`);
  }

  public openConfirm() {
    this.messagesService
      .confirm(
        null,
        undefined,
        '<b>החיפוש נכשל ולכן לא נמצאו תוצאות.</b><br/><label>כדאי לחזור ולבצע חיפוש חדש וממוקד יותר</label>',
        null,
        'כן',
        'לא'
      )
      .subscribe(result => {
        if (result.dialogResultType === DialogResultEnum.OK) alert('OK');
        else alert('Cancel');
      });
  }

  public openErrorDialog() {
    //this.messagesService.showMessage("ארעה שגיאה, אנא פנה למנהל המערכת", "הודעת שגיאה");
    var a = 'aaa';
    JSON.parse(a);
  }

  public openSuccessDialog() {
    this.messagesService.showMessage(
      'האימות הסתיים בהצלחה, אתה מועבר לאתר',
      null,
      null,
      MessageType.Message,
      undefined,
      'לאישור והעברה לאתר'
    );
  }

  public openContentDialog() {
    this.autocompleteValueFrom = [{ id: 1, name: '1' }];
    this.dialogService.openDialog('Texts.dialogTitle', DialogExampleComponent, 400, 800, { a: 'aa', b: 'bb' });
    this.dialogService.dialogResult.subscribe(res => {
      alert(JSON.stringify(res));
    });
  }

  some(event) {
    this.messagesService.confirm("", "אישור", "שים לב! באישור הודעה זו הנך מצהיר שסיימת להזין מסמכי הכרת לקוח", 700, "אישור", "ביטול")
      .subscribe((result) => {
        if (result.dialogResultType == DialogResultEnum.OK) {
          this.messagesService.showMessage("", "", "כדי להשתמש בשירות, הזן תחילה דואר אלקטרוני לקבלת הודעות", MessageType.Alert).subscribe((result) => {

            if (result.dialogResultType == DialogResultEnum.OK) {

            }
          });
        }
      })



      
  // this.messageService.confirm("","אישור","שים לב! באישור הודעה זו הנך מצהיר שסיימת להזין מסמכי הכרת לקוח ומסמכי זיהוי של לקוחות בתיק זה. לאחר אישור ההודעה לא תתאפשר הזנה או עריכה של מסמכים אלה בתיק זה", 700,"אישור","ביטול").subscribe((result) => {
  //   if (result.dialogResultType == DialogResultEnum.OK) {

  //     this.messageService.showMessage("","","כדי להשתמש בשירות, הזן תחילה דואר אלקטרוני לקבלת הודעות",MessageType.Alert).subscribe((result) => {
  //       if (result.dialogResultType == DialogResultEnum.OK) {
  //         debugger;        
  //        // this.userDetailsEl.setFocusEmail();//לבדוק אם קורסר הולך למייל
  //        }  
      


  }

  public select($event) {
    if (this.autocompleteValueTo == null) {
      this.autocompleteValueTo = $event;
    }
  }

  onRadioChanged(value) {
    if (value == 1) {
    }
  }

  toggleLoading() {
    if (!this.isShowLoading) {
      this.loadingService.show(this.pnl);
    } else {
      this.loadingService.hide();
    }
    this.isShowLoading = !this.isShowLoading;
  }

  save() {
    this.httpClient
      .post('http://localhost:60027/api/Values', { DateValue: this.dateFrom.toISOString() })
      .subscribe(res => {
        this.dateFrom = res;
      });
  }
}

export class ListItem {
  id: number;
  name: string;
  isChecked?: boolean;
  parentId?: number;
}
