import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MojDialogService } from '../../moj-ng/messages/moj-dialog.service';
import { DialogResult } from '../../moj-ng/messages/dialog-result';
import { DialogResultEnum } from '../../moj-ng/messages/message.enum';

@Component({
  selector: 'dialog-example',
  templateUrl: './dialog-example.component.html'
})
export class DialogExampleComponent implements OnInit {
  firstName: string;
  lastName: string;
  password: string;
  checkBoxValue: boolean;
  recaptchaString: string;
  date;
  @Input() data: any;
  @Output() closeDialog: EventEmitter<DialogResult> = new EventEmitter<DialogResult>();

  ngOnInit() {
  }

  onCancel(event) {
    this.closeDialog.emit({ dialogResultType: DialogResultEnum.Cancel, data: { hello: 'Chaya' } });
  }
}
