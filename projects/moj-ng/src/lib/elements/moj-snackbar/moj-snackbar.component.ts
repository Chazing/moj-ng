import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { SnakbarActionButton, SnackbarData, SnackbarResult } from '../../messages/messages.model';

/**
 example
 ```typescript
    this.dialogService.showSnackbar({ messageTextKey: "נשלחו בהצלחה מסמכים עבור תיק 123456", buttons: [{ textKey: "ביטול" }], sticky: false }).subscribe((res: SnackbarResult) => {
      if (res.button)
        this.dialogService.showSnackbar({ messageTextKey: "שליחת המסמכים בוטלה", buttons: [{ textKey: "ביטול" }], sticky: false, durationSeconds: 4 })
    })
 ```
 */
@Component({
  selector: 'moj-snackbar',
  templateUrl: './moj-snackbar.component.html',
  styleUrls: ['./moj-snackbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MojSnackbarComponent implements OnInit {
  _snackbarData: SnackbarData;
  @Input() set snackbarData(data: SnackbarData) {
    this._snackbarData = data;
    this.initTimer()
  }

  @Output() close: EventEmitter<SnackbarResult> = new EventEmitter();

  public show: boolean = true;
  private timerSubscription;

  constructor(public cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  private initTimer() {
    if (!this._snackbarData.sticky) {
      clearTimeout(this.timerSubscription);
      this.timerSubscription = setTimeout(() => {
        this.closeSnack({});
      }, this._snackbarData.durationSeconds * 1000);
    }
  }

  customButtonClick(button: SnakbarActionButton) {
    this.closeSnack({ button: button });
  }

  closeClick() {
    this.closeSnack({ isCloseButtonClicked: true });
  }

  private closeSnack(result: SnackbarResult) {
    this.show = false;
    clearTimeout(this.timerSubscription);
    this.close.emit(result);
    this.cdr.detectChanges();
  }
}
