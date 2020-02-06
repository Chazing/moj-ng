import { Enums, ENUMS } from "../../enums";
import { Component, ComponentFactoryResolver } from "@angular/core";
import { Router } from "@angular/router";
import { MojMessagesService, MojDialogService, MessageType, DialogResultEnum } from "src/app/moj-ng";
import { DialogDemoComponent } from "../dialog-demo/dialog-demo.component";





@Component({
  selector: 'popup-demo',
  templateUrl: 'popup-demo.component.html',

})
export class PopupDemoComponent {
  Enums: Enums = ENUMS;
  autocompleteValueFrom: ListItem[] = [{ id: 1, name: '1' }, { id: 2, name: '2' }, { id: 3, name: '3' }];
  autocompleteValueTo: ListItem;
  navigate(url: string) {
    this.router.navigate([url]);
  }

  constructor(private router: Router, private messagesService: MojMessagesService, private dialogService: MojDialogService, private resolver: ComponentFactoryResolver, ) {
  }


  openAttentionDialog() {
    this.messagesService.showMessage("הודעה לדוגמה", null, null, MessageType.Attention)
  }
  openErrorDialog() {
    this.messagesService.showMessage("הודעת שגיאה", null, null, MessageType.Error);

  }
  openAlertDialog() {
    this.messagesService.showMessage("הודעה", null, null, MessageType.Alert);
  }

  openConfirmDialog(closable) {
    this.messagesService
      .confirm(
        null,
        undefined,
        '<b>החיפוש נכשל ולכן לא נמצאו תוצאות.</b><br/><label>כדאי לחזור ולבצע חיפוש חדש וממוקד יותר</label>',
        null,
        'כן',
        'לא', null, closable
      )
      .subscribe(result => {
        if (result.dialogResultType === DialogResultEnum.OK) alert('OK');
        else alert('Cancel');
      });
  }

  openSuccessDialog() {
    this.messagesService.showMessage('האימות הסתיים בהצלחה, אתה מועבר לאתר',null, null,MessageType.Message, undefined,'לאישור והעברה לאתר');
  }

  openContentDialog() {
    this.autocompleteValueFrom = [{ id: 1, name: '1' }];
    this.dialogService.openDialog("תיבת תוכן ", DialogDemoComponent, 400, 300, { firstName: 'aa', lastName: 'bb' });
    this.dialogService.dialogResult.subscribe(res => {
      alert(JSON.stringify(res));
    });
  }
  openNoScrollDialog() {
    this.dialogService.openDialog("תיבת תוכן ", DialogDemoComponent, 400, 300, { firstName: 'aa', lastName: 'bb' }, true,true);
  }
  openScrollDialog() {
    this.dialogService.openDialog("תיבת תוכן ", DialogDemoComponent, 400, 100, { firstName: 'aa', lastName: 'bb' }, true,false);
  }

  openNoFooterDialog() {
    this.dialogService.openDialog("תיבת תוכן ", DialogDemoComponent, 400,400, { firstName: 'aa', lastName: 'bb' }, false,false);
  }
}

export class ListItem {
  id: number;
  name: string;
  isChecked?: boolean;
  parentId?: number;
}