import { Injectable, Injector } from '@angular/core';
import { MojLanguage, LANGUAGES, MojDirection } from '../elements/website/language';
import { TranslateService } from '@ngx-translate/core';
import { LOCATION_INITIALIZED } from '@angular/common';
import { MojConfigService } from './moj-config.service';

@Injectable({
  providedIn: 'root'
})
export class MojLanguageService {

  constructor(private translate: TranslateService, private injector: Injector) { }

  currentLang: MojLanguage = new MojLanguage();

  changeLang(lang: MojLanguage) {
    let newUrl = this.updateQueryString('lang', lang.code, window.location.href)
    window.location.href = newUrl;
  }

  public loadTranslations(langToSet?: MojLanguage,config?:MojConfigService): Promise<any> {
    let lang: MojLanguage;
    if (langToSet) {
      lang = langToSet;
    } else {
      const url = new URL(window.location.href);
      const langCodeFromUrl = url.searchParams.get('lang');
      if (langCodeFromUrl) {
        var langFromUrl = LANGUAGES.filter(x => x.code == langCodeFromUrl)
        if (langFromUrl.length > 0)
          lang = langFromUrl[0];
      }
      else{
        if(config && config.configuration && config.configuration.defaultLang)
        {
          var langFromUrl =LANGUAGES.filter(x => x.code == config.configuration.defaultLang)
          if(langFromUrl.length > 0)
             lang=langFromUrl[0];
        }
      }
    }

    this.currentLang = lang || new MojLanguage();
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

  getMojDirClass() {
    if (this.currentLang.dir === MojDirection.rtl)
      return 'moj-rtl';
    else
      return 'moj-ltr';
  }

  private updateQueryString(key, value, url) {
    if (!url) {
      url = window.location.href;

    }
    // Create a dummy element to parse the URI with
    var a = document.createElement('a'),

      // match the key, optional square brackets, an equals sign or end of string, the optional value
      reg_ex = new RegExp(key + '((?:\\[[^\\]]*\\])?)(=|$)(.*)'),

      // Setup some additional variables
      qs,
      qs_len,
      key_found = false;

    // Use the JS API to parse the URI 
    a.href = url;

    // If the URI doesn't have a query string, add it and return
    if (!a.search) {

      a.search = '?' + key + '=' + value;

      return a.href;
    }

    // Split the query string by ampersands
    qs = a.search.replace(/^\?/, '').split(/&(?:amp;)?/);
    qs_len = qs.length;

    // Loop through each query string part
    while (qs_len > 0) {

      qs_len--;

      // Remove empty elements to prevent double ampersands
      if (!qs[qs_len]) { qs.splice(qs_len, 1); continue; }

      // Check if the current part matches our key
      if (reg_ex.test(qs[qs_len])) {

        // Replace the current value
        qs[qs_len] = qs[qs_len].replace(reg_ex, key + '$1') + '=' + value;

        key_found = true;
      }
    }

    // If we haven't replaced any occurrences above, add the new parameter and value
    if (!key_found) { qs.push(key + '=' + value); }

    // Set the new query string
    a.search = '?' + qs.join('&');

    return a.href;
  }
}
