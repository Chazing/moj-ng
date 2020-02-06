import { Component, OnInit, forwardRef, NgZone, Injector, ElementRef, ViewEncapsulation } from '@angular/core';
import { ValueAccessorBase } from '../../base/value-accessor.base';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MojRecaptchaService } from './moj-recaptcha.service';
import { ElementBase } from '../../base/element.base';
import { PermissionService } from '../../../../moj-ng/permissions/permission.service';
declare var grecaptcha;
/**
 *  <example-url>../screenshots/recaptcha.JPG</example-url>
 */
@Component({
    selector: 'moj-recaptcha',
    templateUrl: './moj-recaptcha.component.html',
    styleUrls: ['./moj-recaptcha.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MojRecaptchaComponent),
        multi: true
    }],
    encapsulation: ViewEncapsulation.None
})
export class MojRecaptchaComponent extends ElementBase<string> {

    recaptchaId: string;

    constructor(el: ElementRef, private translateService: TranslateService, private recaptchaService: MojRecaptchaService
        , private zone: NgZone, _injector: Injector, protected permissionService: PermissionService) {
        super(el, _injector, permissionService);
        this.recaptchaService.increaseIdentifier();
        this.recaptchaId = `recaptcha${this.recaptchaService.recaptchaIdentifierNumber}`;
        this.recaptchaService.recaptchaReady.subscribe((value: boolean) => {
            if (value) {
                setTimeout(this.renderRecapcha, 1);
            }
        });
        this.createCallbachFunc();
    }

    renderRecapcha = () => {
        this.recaptchaId = grecaptcha.render(this.recaptchaId, { 'sitekey': this.recaptchaService.siteKey, 'callback': "captchaComponentReponseCallback" + this.recaptchaId, "expired-callback": "captchaComponentExpiredCallback" + this.recaptchaId, size: "normal" });
    }

    createCallbachFunc() {
        (<any>window)["captchaComponentReponseCallback" + this.recaptchaId] = (response: string) => {
            this.zone.run(() => this.onResponse(response));
        }
        (<any>window)["captchaComponentExpiredCallback" + this.recaptchaId] = () => {
            this.zone.run(() => this.onResponse(null));
        }
    }

    onResponse(val) {
        this.propagateChange(val);
    }

    get showValidationMsg() {
        return this.control.invalid && ((this.control.touched) || this.control.submitted);
    }
}

