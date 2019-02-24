import { Injectable, NgZone } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { MojConfigService } from '../../../shared/moj-config.service';
import { take } from 'rxjs/operators';
declare var grecaptcha;

@Injectable()
export class MojRecaptchaService {
  private _siteKey: string;
  private _recaptchaIdentifierNumber: number = 0;
  private _recaptchaCallback: Subject<string> = new Subject<string>();
  public recaptchaReady: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get siteKey(): string {
    return this._siteKey;
  }

  public increaseIdentifier() {
    this._recaptchaIdentifierNumber++;
  }

  get recaptchaIdentifierNumber() {
    return this._recaptchaIdentifierNumber;
  }

  constructor(private translateService: TranslateService, private http: HttpClient, private zone: NgZone, configService: MojConfigService) {
    this._siteKey = configService.configuration.recaptchaSiteKey;
    this.initCallbackFunctions();
    this.loadRecaptchaScript();
  }

  private initCallbackFunctions() {
    (<any>window)["recaptchaLoadCallback"] = () => {
      this.zone.run(() => this.recaptchaLoadCallback());
    };
    (<any>window)["recaptchaCallbackFunc"] = (res) => {
      this.zone.run(() => this.recaptchaCallbackFunc(res));
    };
  }

  loadRecaptchaScript() {
    const script = document.createElement('script') as HTMLScriptElement;
    script.innerHTML = '';
    const langParam = 'hl=' + this.translateService.currentLang;
    script.src = `https://www.google.com/recaptcha/api.js?render=explicit&${langParam}&onload=recaptchaLoadCallback`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }

  appendInvisibleRecaptchaToElement(recaptchaDivId: string = "recaptchaDiv", el: any = document.body, callback: string = 'recaptchaCallbackFunc'): string {
    const div = document.createElement('div') as HTMLDivElement;
    div.setAttribute("id", recaptchaDivId);
    el.appendChild(div);
    return grecaptcha.render(recaptchaDivId, { 'sitekey': this.siteKey, 'callback':callback , size: "invisible" });
  }

  recaptchaCallbackFunc(recaptchaString): any {
    this._recaptchaCallback.next(recaptchaString);
    grecaptcha.reset();
  }

  executeRecaptcha(recaptchaId?: number): Observable<string> {
    grecaptcha.execute(recaptchaId);
    return this._recaptchaCallback.asObservable().pipe(take(1));
  }

  recaptchaLoadCallback() {
    this.recaptchaReady.next(true);
  }
}
