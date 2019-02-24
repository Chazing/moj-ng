import { Component, ViewChild, ViewContainerRef, AfterViewInit, ElementRef, AfterViewChecked } from "@angular/core";
import { MojMessagesService } from "../../moj-ng/messages/moj-messages.service";
import {
  MessageType,
  DialogResultEnum
} from "../../moj-ng/messages/message.enum";
import { WizardItemComponentBase } from "../../moj-ng/elements/wizard/wizard-item/wizard-item-component.base";
import { MojDialogService } from "../../moj-ng/messages/moj-dialog.service";
import { DialogExampleComponent } from "../dialog-example/dialog-example.component";
import { LabelStyle, LabelAlign } from "../../moj-ng/elements/label/label.enum";
import {
  FontSize,
  FontWeight,
  MojColor
} from "../../moj-ng/elements/label/moj-dynamic-label.component";
import { PanelStyle } from "../../moj-ng/elements/panels/moj-panel.enum";
import { MojLoadingService } from "../../moj-ng/elements/moj-loading/moj-loading.service";
import { ButtonStyle } from "../../moj-ng/elements/buttons/button-style";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "moj-form-example",
  templateUrl: "./form-example.component.html",
  styleUrls: ["./form-example.component.css"]
})
export class FormExampleComponent extends WizardItemComponentBase implements AfterViewInit {
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
  @ViewChild("pnl", { read: ViewContainerRef }) pnl: ViewContainerRef;
  @ViewChild("pnlGeneral", { read: ViewContainerRef }) pnlGeneral: ViewContainerRef;
  @ViewChild("pnlToAddHtml", { read: ElementRef }) pnlToAddHtml: ElementRef;

  checkBoxValue;
  formModel: any = {};
  buttonStyle = ButtonStyle;
  labelAlign = LabelAlign;
  fileTypeValue: number;
  defaultItemDropDown = { id: 2, value: "tiff" };
  dropDownListItems: any = [
    { id: 1, name: "pdf" },
    { id: 2, name: "tiff" },
    { id: 3, name: "jpg" }
  ];
  numberItems: any[] = [
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" }
  ];
  labelText: string = "גוף פונה";
  labelStyle = LabelStyle;
  fontSize = FontSize;
  fontWeight = FontWeight;
  mojColor = MojColor;
  panelStyle = PanelStyle;
  number = 1;
  dateFrom;
  dateTo=[new Date(2019,2,3),new Date(2019,2,22)];
  numberFrom;
  numberTo;
  stringFrom;
  stringTo = "a";

  autocompleteValueFrom: ListItem;
  autocompleteValueTo: ListItem;

  customValidationErrors = [{ key: "required", value: "customRequired" }]

  radioOptions = 1;
  addBtn = {
    id: "addInterested",
    icon: "fa fa-plus",
    tooltip: "aaa",
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
  constructor(
    private messagesService: MojMessagesService,
    private dialogService: MojDialogService,
    private loadingService: MojLoadingService,
    private httpClient: HttpClient
  ) {
    super();
    this.wizardItemModel = "formModel";
  }

  onSubmit(value) {
    alert(`Submit: ${JSON.stringify(value)}`);
  }

  public openConfirm() {
    this.messagesService
      .confirm(
        null,
        undefined,
        "<b>החיפוש נכשל ולכן לא נמצאו תוצאות.</b><br/><label>כדאי לחזור ולבצע חיפוש חדש וממוקד יותר</label>",
        null,
        "כן",
        "לא"
      )
      .subscribe(result => {
        if (result.dialogResultType === DialogResultEnum.OK) alert("OK");
        else alert("Cancel");
      });
  }

  public openErrorDialog() {
    //this.messagesService.showMessage("ארעה שגיאה, אנא פנה למנהל המערכת", "הודעת שגיאה");
    var a = "aaa";
    JSON.parse(a);
  }

  public openSuccessDialog() {
    this.messagesService.showMessage(
      "האימות הסתיים בהצלחה, אתה מועבר לאתר",
      null,
      null,
      MessageType.Message,
      undefined,
      "לאישור והעברה לאתר"
    );
  }

  public openContentDialog() {
    this.dialogService.openDialog(
      "Texts.dialogTitle",
      DialogExampleComponent,
      400, 100,
      { a: "aa", b: "bb" }
    );
    this.dialogService.dialogResult.subscribe(res => {
      alert(JSON.stringify(res));
    });
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
    this.httpClient.post("http://localhost:60027/api/Values", { DateValue: this.dateFrom.toISOString() }).subscribe(res => {
      this.dateFrom = res;
    })
  }
}



export class ListItem {
  id: number;
  name: string;
  isChecked: boolean;
  parentId: number;
}
