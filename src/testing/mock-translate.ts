import { TranslateLoader } from "@ngx-translate/core";
import { Observable, of } from "rxjs";

let translations: any = {};

export class MockTranslateLoader implements TranslateLoader {
    getTranslation(lang: string): Observable<any> {
      return of(translations);
    }
}
