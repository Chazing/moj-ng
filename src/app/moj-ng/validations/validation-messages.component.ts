import { Component, Input, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ValidationErrors } from "@angular/forms";

@Component({
  selector: "validation-messages",
  template: `
    <span class="field-validation-error" [attr.data-valmsg-for]="forId" data-valmsg-replace="true">
        <span *ngFor="let message of _messages | keys" [id]="forId + '-error'">{{ 'Validations.' + message.key | translate: { value: controlName | translate, value2: getValue2(message.value) } }}</span>
    </span>
  `
})
export class ValidationMessages implements OnInit {
  @Input()
  set messages(value: ValidationErrors) {
    this._messages = value;
    this.updateMessages();
  }
  @Input() customValidationErrors: any[];
  @Input() forId: string;
  @Input() controlName: string;
  notDisplayMessages: any[] = ["actualValue", "requiredValue"];
  _messages;

  constructor(protected translateService: TranslateService) {}

  //if user fill the customValidationErrors input, replace the standart message with the custom
  private updateMessages() {
    if (this.customValidationErrors != undefined) {
      this.customValidationErrors.forEach(element => {
        if (this._messages[element.key]) {
          delete this._messages[element.key];
          this._messages[element.value] = {};
        }
      });
    }
    if(this._messages) {
      this.notDisplayMessages.forEach(messageToRemove => {
        if (this._messages[messageToRemove]!= undefined)
          delete this._messages[messageToRemove];
      });
    }
  }

  ngOnInit() {
    this.controlName =
      this.controlName != null && this.controlName != ""
        ? this.controlName
        : "Texts." + this.forId;
    this.updateMessages();
  }

  getValue2(message) {
    if (typeof message === "string") {
        let value2 = this.translateService.instant(message);
        return value2;
    }
  }
}
