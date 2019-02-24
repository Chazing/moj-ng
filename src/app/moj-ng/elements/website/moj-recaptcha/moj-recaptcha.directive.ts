import { Directive, OnInit, ElementRef, NgZone, Output, EventEmitter, Input, Renderer2 } from '@angular/core';
import { MojRecaptchaService } from './moj-recaptcha.service';

declare var grecaptcha;

@Directive({
  selector: '[MojRecaptcha]'
})
export class MojRecaptchaDirective implements OnInit {
  @Output() captchaOk: EventEmitter<any> = new EventEmitter<any>();
  recaptchaCallbackFuncName: string;
  recaptchaId: string;

  @Input() captchaValue: string;
  @Output() captchaValueChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() eventToExecute: string[] = ['click'];

  ngOnInit(): void {
    this.eventToExecute.forEach(event => {
      let simple = this.renderer.listen(this.el.nativeElement, event, (evt) => {
        grecaptcha.execute(this.recaptchaId);
      });
    });
  }

  constructor(private el: ElementRef, private recaptchaService: MojRecaptchaService, private zone: NgZone, private renderer: Renderer2) {
    recaptchaService.increaseIdentifier();
    this.createCallbachFunc();
    this.recaptchaId = `recaptcha${this.recaptchaService.recaptchaIdentifierNumber}`;
    this.renderRecaptcha(el);
  }

  private renderRecaptcha(el: ElementRef) {
    this.recaptchaService.recaptchaReady.subscribe(() => {
      this.recaptchaId = this.recaptchaService.appendInvisibleRecaptchaToElement(this.recaptchaId,el.nativeElement,this.recaptchaCallbackFuncName);
    });
  }

  createCallbachFunc() {
    this.recaptchaCallbackFuncName = `captchaDirectiveReponseCallback${this.recaptchaService.recaptchaIdentifierNumber}`;
    (<any>window)[this.recaptchaCallbackFuncName] = (response: string) => {
      this.zone.run(() => this.captchaReponseCallback(response));
    }
  }

  captchaReponseCallback(val) {
    if (val) {
      this.captchaValueChange.emit(val);
      this.captchaOk.emit();
      grecaptcha.reset();
    }
  }
}
