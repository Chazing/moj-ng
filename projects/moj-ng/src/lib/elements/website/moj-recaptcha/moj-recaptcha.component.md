## עבודה עם Recaptcha

רכיב ה recaptcha הוא רכיב של google שעטפנו אותו בתשתית.

ניתן לראות את הרכיב המקורי [כאן](https://developers.google.com/recaptcha/intro)

בעבודה עם recaptcha יש את הרכיב על הדף, ואת האימות בצד שרת

## Client Side

ישנן שתי צורות להניח recaptcha על הדף:

1. אלמנט על הדף, שנמצא באופן קבוע, והמשתמש חייב לסמן בו "אני לא רובוט" לפני ששולח את הדף.

כדי להשתמש בתצורה הזו יש להניח על הדף את הקומפוננטה כמו בדוגמה-

```html
<moj-recaptcha [(ngModel)]="recaptchaString"></moj-recaptcha>
```

האלמנט נראה ככה:

![recaptcha](../screenshots/recaptcha.png)


2.  Invisible recaptcha
רכיב שלא תופס מקום על הדף, אלא מבצע בדיקה מאחורי הקלעים, ללא צורך של רכיב כלשהו, או פעולת משתמש. פעולת הבדיקה מוצמדת לאחד הכפתורים שעל הדף (כפתור שמירה/ חיפוש)

כדי להשתמש בתצורה הזו יש לשים directive על הכפתור שעליו רוצים לשמור.

```html
<moj-button [buttonStyle]="buttonStyle.SmallLight" MojRecaptcha [textKey]="'MojTexts.cancel'" (captchaOk)="onSubmit($event)" 
    [(captchaValue)]="recaptchaString" name="recaptchaString"></moj-button>
```
מה שמוסיף את האלמנט לכפתור זה ה directive MojRecaptcha.

יש להעביר את ה event שהיה נעשה בזמן ה click, לקרות בזמן ה captchaOk

בתצורה הזו, הרכיב לא תופס מקום על הדף, ניתן לראות בצד ימין למטה בדף אינדיקציה שיש recaptcha.

בשתי הצורות, יש צורך להעביר את הערך החוזר מה recaptcha לאימות בצד שרת, ולכן צריך להצמיד binding באמצעות [(captchaValue)]

בברירת מחדל, אימות ה recaptcha נעשה בזמן click על האלמנט. אם יש צורך בארוע אחר שבו יתבצע האימות, לדוגמה- אם ב keyup על autocomplete פונים לפונקציית חיפוש בשרת,
יש אפשרות לשנות את הארוע ע"י שליחת ארוע אחר לפרמטר eventToExecute,

כמו בדוגמה:

```html
<moj-button [buttonStyle]="buttonStyle.SmallDark" MojRecaptcha [textKey]="'MojTexts.cancel'" [eventToExecute]="'dblclick'"
      (captchaOk)="onSubmit($event)" [(captchaValue)]="model.recaptchaString" name="recaptchaString"></moj-button>
```
 ##### שימוש ב Invisible Recaptcha בקוד
 במקרה שיש כמה ארועים בדף שפונים לצד שרת, ולא ניתן להצמיד את האימות לכפתור בודד, ניתן להשתמש ב recaptca גם דרך ה typescript.

 צריך לקרוא לפונקציה appendInvisibleRecaptchaToElement() בעליית הקומפוננטה, 
 ולפני הפנייה ל webApi יש לבצע את האימות, ולהציב את הערך ידנית במודל.

 כמו בדוגמה:
 ```typescript
export class RecaptchaExampleComponent implements OnInit {
  buttonStyle = ButtonStyle;
  model: RecaptchaModel = { recaptchaString: "aaa", recaptchaString1: "aaa" };

  constructor(private http: HttpClient, private recaptchaService: MojRecaptchaService) { }

  ngOnInit() {
    this.recaptchaService.recaptchaReady.subscribe((res) => {
      this.recaptchaService.appendInvisibleRecaptchaToElement();
    });
  }

  onSubmit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post("/api/Values", { RecaptchaString: this.model.recaptchaString }, httpOptions).subscribe(
      (res) => { debugger; },
      (res) => { debugger; }
    );
  }

  onClick() {
   this.recaptchaService.executeRecaptcha().subscribe((res) => {
      this.model.recaptchaString = res;
      this.onSubmit();
    })
  }
}
 ```

### קונפיגורציה ל recaptcha
לכל אתר יש מפתח לעבודה מול גוגל. אצלינו במשרד המפתח זהה עבור כל האתרים.

אך יש מפתח אחד לבדיקות, ואחד לייצור.

מפתח האתר לסביבת בדיקות:

Site Key: 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI

כדי לקבל מפתחות לסביבת ייצור יש לפנות לשי עמאר.

את המפתח יש לשים בקובץ קונפיגורציה שיושב בתוך ה assets
יש ליצור קובץ site-config.json ו

התוכן שלו כרגע נראה ככה:

```json
{
    "recaptchaSiteKey":"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
}
```

## Server Side .Net Framework

כדי להשלים את בדיקת האבטחה של recaptcha, יש לבצע בדיקה גם בצד של ה WebApi.

* יש להוריד את הנוגט Moj.Infrastructure.WebApi בגרסה שקודמת לגרסה 5.0.0 (מגרסה זו והלאה זה כבר .net Core)
* יש לשים attribute מעל השדה במודל שמכיל את המחרוזת שחזרה מה recaptcha שהייתה על הדף

 כמו בדוגמה-
```c
 public class RecaptchaCheckModel
    {
        [Recaptcha]
        public string RecaptchaString { get; set; }
    }
```
* ב Action ב Controller לפני שעושים את פעולת החיפוש/ שמירה צריך לבדוק האם המודל וולידי בצורה הזו:
```c
public IEnumerable<ModelError> Post(RecaptchaCheckModel model)
        {
            if (ModelState.IsValid)
            {
                //...
            }
            return ModelState.GetErrorMessage();
        }
```
* יש להגדיר את ההגדרות הבאות ב web.config של ה webapi

```xml
<system.serviceModel>
    <client>
      <endpoint address="http://dev-srv12app8:9615/RecaptchaService/TokenChecker.svc?singleWsdl" binding="basicHttpBinding" bindingConfiguration="BasicHttpBinding_ITokenChecker" contract="ITokenChecker" name="BasicHttpBinding_ITokenChecker" />
    </client>
    <bindings>
      <basicHttpBinding>
        <binding name="BasicHttpBinding_ITokenChecker" />
      </basicHttpBinding>
    </bindings>
  </system.serviceModel>

  <add key="RecaptchaApplicationID" value="CAF4CC0F-4783-4469-AB33-B3FDA13104CF" />
  ```

  ## Server Side .Net Core

  * יש להוריד את הנוגט Moj.Infrastructure.WebApi גרסה 5 ומעלה לפרוייקט ה Api.
  * בקובץ Startup.cs יש להוסיף את השורה עבור MojValidators כמו בדוגמה - השורה האחרונה.
  
    השורה צריכה להופיע לאחר השורה של Moj.Core
```
public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().AddFluentValidation(fv =>
            {
                fv.RunDefaultMvcValidationAfterFluentValidationExecutes = false;
            }).SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddTransient<IValidator<ValuesModel>, ValuesValidator>();
            services.UseMojCore(Configuration.GetSection("ConnectionString").Value);
            MojValidators.Configure(services);
        }
```
* יש לבצע רישום של FluentValidation (למי שלא הטמיע קודם)
* לאחר מכן במודל של ה Post שעליו שומרים ע"י recaptcha יש להוסיף property עבור ה string של recaptcha שמועבר מה client, ולשים עליו את הוולידציה MojRecaptcha, כמו בדוגמה:
```
public class ValuesValidator : AbstractValidator<ValuesModel>
    {
        public ValuesValidator()
        {
            RuleFor(x => x.RecaptchaString).MojRecaptcha();
        }
    }
```
* יש לזכור לשייך את ה class של הוולידטור למודל לפי ההנחיות של fluentValidator.

```
services.AddTransient<IValidator<ValuesModel>, ValuesValidator>()
```

* קונפיגורציה

יש להוסיף בבסיס הנתונים, בטבלאות של Moj.Core שורת קונפיגורציה עם 

Type: RecaptchaConfiguration

SerializiesData:
```json
{"ServiceAddress":"http://dev-srv12app8:9615/RecaptchaService/TokenChecker.svc","ApplicationID":"CAF4CC0F-4783-4469-AB33-B3FDA13104CF"}
```

את הערכים לסביבות השונות צריך להתאים לפי ההוראות שבהמשך. מה שבדוגמה הוא בשביל סביבת טסט.

  #### ערכים עבור הסביבות השונות:
* סביבת בדיקות בתהילה:

Site Key: 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI - לצד של אנגולר

ApplicationID: CAF4CC0F-4783-4469-AB33-B3FDA13104CF - לצד של webapi

endpoint address: http://192.168.200.4/Test_TokenChecker.svc

* סביבת ייצור:

מפתחות יש לבקש משי עמאר.

endpoint address: http://192.168.181.104/TokenChecker.svc
