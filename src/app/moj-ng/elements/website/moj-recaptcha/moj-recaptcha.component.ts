import { Component, OnInit, forwardRef, NgZone, Injector } from '@angular/core';
import { ValueAccessorBase } from '../../base/value-accessor.base';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MojRecaptchaService } from './moj-recaptcha.service';
declare var grecaptcha;
/**
 *  <example-url>../screenshots/recaptcha.JPG</example-url>
 */
@Component({
  selector: 'moj-recaptcha',
  templateUrl: './moj-recaptcha.component.html',
  styleUrls: ['./moj-recaptcha.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MojRecaptchaComponent),
    multi: true
  }]
})
export class MojRecaptchaComponent extends ValueAccessorBase {

  recaptchaId: string;
  constructor(private translateService: TranslateService, private recaptchaService: MojRecaptchaService, private zone: NgZone,_injector:Injector) {
    super();
    this.recaptchaService.increaseIdentifier();
    this.recaptchaId = `recaptcha${this.recaptchaService.recaptchaIdentifierNumber}`;
    recaptchaService.recaptchaReady.subscribe(() => {
      this.recaptchaId = grecaptcha.render(this.recaptchaId, { 'sitekey': this.recaptchaService.siteKey, 'callback': "captchaComponentReponseCallback","expired-callback": "captchaComponentExpiredCallback", size: "normal" });
    });
    this.createCallbachFunc();
  }

  createCallbachFunc() {
    (<any>window).captchaComponentReponseCallback = (response: string) => {
      this.zone.run(() => this.onResponse(response));
    }
    (<any>window).captchaComponentExpiredCallback = () => {
      this.zone.run(() => this.onResponse(null));
    }
  }

  onResponse(val) {
    this.propagateChange(val);
  }
}

