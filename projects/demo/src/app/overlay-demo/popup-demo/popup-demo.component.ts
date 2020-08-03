import { Enums, ENUMS } from "../../enums";
import { Component, ComponentFactoryResolver } from "@angular/core";
import { Router } from "@angular/router";
import { MojMessagesService, MojDialogService, MessageType, DialogResultEnum } from "@moj/moj-ng";
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

 messageTxt:string="מצטערים, קיימת בעיה באתר אנחנו עושים מאמצים לפתור אותה, אפשר לנסות שוב מאוחר יותר או לפנות לבירור ביחידה.";
  openAttentionDialog() {
    this.messagesService.showMessage(this.messageTxt, null, null, MessageType.Attention)
  }
  openErrorDialog() {
    this.messagesService.showMessage(this.messageTxt, null, null, MessageType.Error);

  }
  openAlertDialog() {
    this.messagesService.showMessage("הודעה", null, null, MessageType.Alert);
  }

  openConfirmDialog(closable) {
    this.messagesService
      .confirm(
        null,null,
       
        'החיפוש נכשל ולכן לא נמצאו תוצאות.<br/><label>כדאי לחזור ולבצע חיפוש חדש וממוקד יותר</label>',null,null,null,true,closable
               
      )
      .subscribe(result => {
        if (result.dialogResultType === DialogResultEnum.OK) alert('OK');
        else alert('Cancel');
      });
  }

  openSuccessDialog() {
    this.messagesService.showMessage('האימות הסתיים בהצלחה, אתה מועבר לאתר',null, null,MessageType.Success, undefined,'לאישור והעברה לאתר');
  }

  openContentDialog() {
    this.autocompleteValueFrom = [{ id: 1, name: '1' }];
    this.dialogService.openDialog("תיבת תוכן ", DialogDemoComponent, 500, 400, { firstName: 'aa', lastName: 'bb' });
    this.dialogService.dialogResult.subscribe(res => {
      alert(JSON.stringify(res));
    });
  }
  openNoScrollDialog() {
    this.dialogService.openDialog("תיבת תוכן ", DialogDemoComponent, 500, 400, { firstName: 'aa', lastName: 'bb' }, true,true);
  }
  openScrollDialog() {
    this.dialogService.openDialog("תיבת תוכן ", DialogDemoComponent, 500, 200, { firstName: 'aa', lastName: 'bb' }, true,false);
  }

  openNoFooterDialog() {
    this.dialogService.openDialog("תיבת תוכן ", DialogDemoComponent, 500,300, { firstName: 'aa', lastName: 'bb' }, false,false);
  }
}

export class ListItem {
  id: number;
  name: string;
  isChecked?: boolean;
  parentId?: number;
}