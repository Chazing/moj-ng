import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { DialogResult, DialogResultEnum } from '@moj/moj-ng';

@Component({
  selector: 'dialog-demo',
  templateUrl: './dialog-demo.component.html'
})
export class DialogDemoComponent implements OnInit {
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

