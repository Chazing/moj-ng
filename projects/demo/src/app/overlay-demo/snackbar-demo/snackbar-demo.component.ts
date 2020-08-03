import { SnackbarResult } from './../../../../../moj-ng/src/lib/messages/messages.model';
import { MojDialogService } from '@moj/moj-ng';
import { ENUMS } from './../../enums';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snackbar-demo',
  templateUrl: './snackbar-demo.component.html',
  styleUrls: ['./snackbar-demo.component.css']
})
export class SnackbarDemoComponent implements OnInit {
  enums = ENUMS
  constructor(private dialogService: MojDialogService) { }

  ngOnInit() {
  }

  show() {
    this.dialogService.showSnackbar({ messageTextKey: "נשלחו בהצלחה מסמכים עבור תיק 123456", buttons: [{ textKey: "ביטול פעולה אחרונה" }], sticky: true, hideCloseButton: true }).subscribe((res: SnackbarResult) => {
      if (res.button)
        this.dialogService.showSnackbar({ messageTextKey: "שליחת המסמכים בוטלה", sticky: true })
    })
  }

  showLong() {
    this.dialogService.showSnackbar({ messageTextKey: "הודעה ארוכה עם לפחות שתי שורות, המסמכים נשלחו בהצלחה עבור תיק מספר 123456", buttons: [{ textKey: "ביטול שליחת מסמכים" }], sticky: true }).subscribe((res: SnackbarResult) => {

    })
  }
}
