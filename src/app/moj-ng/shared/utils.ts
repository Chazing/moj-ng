import { TranslateService } from "@ngx-translate/core";
import { Injector, Injectable } from "@angular/core";
import { LOCATION_INITIALIZED } from "@angular/common";
import { MojConfigService } from "./moj-config.service";
import { GlassboxService } from "./glassbox.service";
import { Subject, BehaviorSubject, Observable } from "rxjs";
import { MojLanguage, MojDirection } from "../elements/website/language";

// import { environment } from "environments/environment";

@Injectable(
{providedIn: 'root'}
)
export class MojUtilsService {
  constructor(
    private translate: TranslateService,
    private injector: Injector,
    private config: MojConfigService, 
    private glassbox: GlassboxService
  ) {
    
  }

  public getElementName(element: any /*ElementBase<any>*/): string {
    return element.labelTextKey
      ? element.labelTextKey
      : "Texts." + element.identifier;
  }

  public initialize(configFile:string): Promise<any> {
    return Promise.all([
      this.loadTranslations(),
      this.config.load(configFile).then(
        () => this.glassbox.runGlassbox()
      )
    ]);
  }

  currentLang: MojLanguage = new MojLanguage();

  changeLang(lang: MojLanguage) {
      sessionStorage.setItem("mojLang", JSON.stringify(lang));
      window.location.reload();
  }
  
  public loadTranslations(langToSet?: MojLanguage): Promise<any> {
    let lang: MojLanguage;
    if(langToSet) {
      lang = langToSet;
      sessionStorage.setItem("mojLang", JSON.stringify(langToSet));
    }
    else {
      let storedLang = JSON.parse(sessionStorage.getItem("mojLang")) || new MojLanguage();
      lang = storedLang;
    }
    this.currentLang = lang;
    const locationInitialized = this.injector.get(
      LOCATION_INITIALIZED,
      Promise.resolve(null)
    );
    return new Promise(resolve => {
      locationInitialized.then(() => {
        this.translate.setDefaultLang(this.currentLang.code);
        this.translate.use(this.currentLang.code).subscribe(
          () => {
            console.info(`Successfully initialized '${this.currentLang.code}' language.`);
          },
          err => {
            console.error(
              `Problem with '${this.currentLang.code}' language initialization.'`
            );
          },
          () => {
            resolve(null);
          }
        );
      });
    });
  }

  stringFormat(str: string, args: any[]) {
    var theString = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      var regEx = new RegExp("\\{" + (i - 1) + "\\}", "gm");
      theString = theString.replace(regEx, arguments[i]);
    }
    return theString;
  }

  htmlEscape(str) {
    return str.toString()
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace('null', '');
  }

  getStringFromObjectArray(fieldName, objectArray):string{
    if(!objectArray){ return ''}
    
    let stringValue:string = '';

    for (let i = 0; i < objectArray.length; i++) {
        let value = '';
        if(fieldName && objectArray[i].hasOwnProperty(fieldName)){
            value = objectArray[i][fieldName];
        }
        else if(!fieldName && typeof(objectArray[i] == 'string')){//array of strings
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
}
