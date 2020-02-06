import { TranslateService } from '@ngx-translate/core';
import { Injector, Injectable } from '@angular/core';
import { LOCATION_INITIALIZED } from '@angular/common';
import { MojConfigService } from './moj-config.service';
import { GlassboxService } from './glassbox.service';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { MojLanguage, MojDirection } from '../elements/website/language';
import { NgForm, FormGroup } from '@angular/forms';
import { CSRFService } from './moj-csrf.service';

// import { environment } from "environments/environment";

@Injectable({ providedIn: 'root' })
export class MojUtilsService {
    constructor(
        private translate: TranslateService,
        private injector: Injector,
        private config: MojConfigService,
        private glassbox: GlassboxService,
        private mojCSRF: CSRFService
    ) { }

    public configurationReady: Subject<any> = new Subject<any>();

    public getElementName(element: any /*ElementBase<any>*/): string {
        return element.labelTextKey ? element.labelTextKey : 'Texts.' + element.identifier;
    }

    async initialize(configFile: string): Promise<any> {
        await this.config.load(configFile).then(() => {
            this.glassbox.addGlassboxScript();
            this.configurationReady.next(true);
        });
        return Promise.all([
            this.loadTranslations(),
            this.mojCSRF.getToken()
        ]);
    }

    currentLang: MojLanguage = new MojLanguage();

    changeLang(lang: MojLanguage) {
        sessionStorage.setItem('mojLang', JSON.stringify(lang));
        window.location.reload();
    }

    public loadTranslations(langToSet?: MojLanguage): Promise<any> {
        let lang: MojLanguage;
        if (langToSet) {
            lang = langToSet;
            sessionStorage.setItem('mojLang', JSON.stringify(langToSet));
        } else {
            let storedLang = JSON.parse(sessionStorage.getItem('mojLang')) || new MojLanguage();
            lang = storedLang;
        }
        this.currentLang = lang;
        const locationInitialized = this.injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
        return new Promise(resolve => {
            locationInitialized.then(() => {
                this.translate.setDefaultLang(this.currentLang.code);
                this.translate.use(this.currentLang.code).subscribe(
                    () => {
                        console.info(`Successfully initialized '${this.currentLang.code}' language.`);
                    },
                    err => {
                        console.error(`Problem with '${this.currentLang.code}' language initialization.'`);
                    },
                    () => {
                        resolve(null);
                    }
                );
            });
        });
    }

    stringFormat(str: string, args: any[]) {

        var theString = str;
        for (var i = 0; i < args.length; i++) {
            var regEx = new RegExp('\\{' + (i) + '\\}', 'gm');
            theString = theString.replace(regEx, args[i]);
        }
        return theString;
    }

    htmlEscape(str) {
        return str
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace('null', '');
    }

    getMojDirClass() {
        if (this.currentLang.dir === MojDirection.rtl)
            return 'moj-rtl';
        else
            return 'moj-ltr';
    }

    getStringFromObjectArray(fieldName, objectArray): string {
        if (!objectArray) {
            return '';
        }

        let stringValue: string = '';

        for (let i = 0; i < objectArray.length; i++) {
            let value = '';
            if (fieldName && objectArray[i].hasOwnProperty(fieldName)) {
                value = objectArray[i][fieldName];
            } else if (!fieldName && typeof (objectArray[i] == 'string')) {
                //array of strings
                value = objectArray[i];
            }
            if (value) {
                if (stringValue.length > 0) {
                    stringValue = stringValue + ', ';
                }
                stringValue = stringValue + value;
            }
        }
        return stringValue;
    }

    setSubmitToFormGroup(formGroup: NgForm | FormGroup) {
        Object.keys(formGroup.controls).forEach(key => {
            let control = formGroup.controls[key];
            if (control instanceof FormGroup) {
                this.setSubmitToFormGroup(control);
            }
            else {
                (<any>control).submitted = true;
                control.updateValueAndValidity();
            }
        })
    }

    parseAllDates(object) {
        const dateFormat = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d/;
        for (let i in object) {
            if (typeof (object[i]) === 'object') {
                this.parseAllDates(object[i]);
            } else if (typeof object[i] === 'string' && dateFormat.test(object[i])) {
                object[i] = new Date(object[i]);
            }
        }
    };

    public static isObject(value: any): boolean {
        if (value != null && typeof (value) == "object") {
            return true;
        }
        return false;
    }

    public static isNumber(value: string): boolean {
        if (!isNaN(Number(value)))
            return true;
        return false;
    }
    public static isBoolean(val): boolean {
        return val === false || val === true;
    }

    public static enumTypeFromString(value: any, cEnum: string): string {
        for (let item in value) {
            if (value[item] == cEnum) {
                return item;
            }
        }
    }

    public static copyObjectProperties(srcObject, destObject) {
        for (const key in srcObject) {
            if (srcObject.hasOwnProperty(key)) {
                destObject[key] = srcObject[key];
            }
        }
    }


    public static isArrayEmpty(arr: any[]): boolean {
        return arr == null || arr.length < 1;
    }

    public static isEqualDate(valA?: Date, valB?: Date) {
        let nullA = valA == undefined || valA == null
        let nullB = valB == undefined || valB == null;
        if ((nullA && !nullB) || (!nullA && nullB)) {
            console.log(valA);
            console.log(valB);
            return false;
        }
        let check = ((nullA && nullB) && nullA) || this.isEqualNumber(valA.getTime(), valB.getTime());
        return check;

    }
    public static isEqualNumber(numA?: number, numB?: number) {
        if ((numA == undefined || numA == null) && (numB == undefined || numB == null)) {
            return true;
        }
        return numA == numB;
    }

    public isMobile(): boolean {
        return /Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i.test(window.navigator.userAgent);
    }
}
