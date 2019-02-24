# קופיגורציה לאתר
כדי למנוע צורך ב build לאתר בכל שינוי של ערך בקונפיגורציה, הוצאנו את כל הפרמטרים לקובץ json.

ניתן לראות את תאור הפתרון בפוסט הזה בעברית: https://aclottan.wordpress.com/2016/12/30/load-configuration-from-external-file/

בקובץ App.module.ts יש להוסיף את הקוד הבא, כדי לבצע את טעינת הקונפיגורציה.

```typescript

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MojSharedModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [
    MojConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: (utils: MojUtilsService) => () => utils.initialize(environment.configFile),
      deps: [MojUtilsService],
      multi: true
    }
  ]
})
export class AppModule {}

```

יש להוסיף קובץ json לקונפיגורציה עבור כל סביבה מתחת assets=>config

הקובץ הזה יכיל את כל הפרמטרים לאתר, ויהיה קובץ נפרד עבור כל סביבה.

![config](../../screenshots/site-config.jpg)

ההגדרות בקובץ ה json אמורות להקביל למבנה של ה MojConfigModel.

```json
{
    "recaptchaSiteKey":"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
    "webApiAddress": "http://localhost:60980/api/values",
    "isWriteUIErrorsToLog": false,
    "logApiFunction":"/log"
}
```
אם יש הגדרות שלא רלוונטיות לאתר שלכם, (כמו recaptcha) ניתן להוריד אותן.

יש להוסיף נתיב לקובץ בקבציה ה enviroment, לכל סביבה את הקובץ המתאים לה.

```typescript
export const environment = {
    production: false,
    configFile: 'assets/config/site-config-dev.json'
};
```
ואז בזמן קומפילציה לסביבות, יילקח בכל פעם הקובץ המתאים.

כדי להשתמש בהגדרות הקונפיג יש להשתמש ב MojConfigService כמו בדוגמה:

```typescript
constructor(configService: MojConfigService) {
    this._siteKey = configService.configuration.recaptchaSiteKey;
  }
```

כדי להוסיף הגדרות נוספות שנצרכות לאתר שלכם, מעבר להגדרות שהתשתית צריכה:

יש ליצור קובץ שיורש מהמודל של התשתית ומכיל את ההגדרות הנוספות שהאתר צריך

כמו בדוגמה:
```typescript
import { MojConfigModel } from "../../moj-ng/shared/moj-config";

export class SiteConfigModel extends MojConfigModel {
    MoreConfigParameter: any;
}
```

וכן יש ליצור service נוסף שאותו תצרכו באתר ויבצע עבורכם את ההמרה למודל שלכם

כמו בדוגמה:
```typescript
import { Injectable } from '@angular/core';
import { MojConfigService } from '../../moj-ng/shared/moj-config.service';
import { SiteConfigModel } from './site-config';

@Injectable()
export class SiteConfigService {
  public get configuration(): SiteConfigModel {
    return <SiteConfigModel>this.configService.configuration;
  }

  constructor(private configService: MojConfigService) {

  }
}
```

וכעת, במקום לפנות ל MojConfigService תוכלו לפנות לשרות הזה כדי לקחת את ההגדרות הנוספות שלכם.









