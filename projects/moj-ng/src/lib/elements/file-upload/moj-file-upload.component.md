# עבודה עם file upload לאתרים חיצוניים
הגירסה הנוכחית מכילה שתי קומפוננטות זהות ל file upload אולם שונות לגמרי במימוש שלהן מול תהילה.

המימוש החדש מול תהילה (בדיקה סינכרונית ומיידית של הקובץ בתוכנת סריקה) כרגע בהשהייה בצד של תהילה ולכן לא מומלץ להשתמש בו.

הקומפוננטה הזמינה לשימוש מקצה לקצה הינה :
```
<moj-file-upload ...></moj-file-upload>
```
## מה צריך לעשות בכדי לעבוד עם file upload?

*	להוריד לפרויקט ה webapi את הנוגט של Moj.FileUpload.dlls 
* הגדרת מפתחות בקובץ web.config:
    * **בפיתוח** יוגדרו הערכים הבאים:
        ```html
        <add key="ApplicationID" value="307857cf-1a98-474a-8e75-abaaed76d052" />
        
        <add key="UploadServerUrl" value="http://qa-soa:8092/FilesReceiver.ashx" />
        <add key="UseService" value="false" />
        <add key="SiteURL" value="yourLocalSiteAddress" />
        ```
    * **בשרתי תהילה הן בבדיקות והן בייצור** יוגדרו הערכים הבאים:

        ```html
        <add key="ApplicationID" value="04C77715-42C4-418C-B1FA-89A4FD61F8AC" />
        <add key="UploadAddress" value="https://192.168.160.207/UploadService/UploadService.svc" />
        <add key="UploadServerUrl" value="https://fld.gov.il/FileReceiverMultipart/FilesReceiver.ashx" />
        <add key="UseService" value="true" />
        <add key="SiteURL" value="yourSiteAddress" />
        ```
    **שימו לב! מגירסה 3.3 חובה לשנות את הכתובת של UploadAddress שתעבוד מול https ולא http (להוסיף את ה s)**

    הסבר על הערכים:

    ApplicationID – מזהה הכספת בתהילה (יש להבחין בין כספת פיתוח לייצור ולשנות בהתאם)

    UploadServerUrl – כתובת שונה כאשר עובדים בפיתוח מול שרת פנימי או רצים על שרת בתהילה (בדיקות/ייצור).

    SiteURL – כתובת האתר אותו מפתחים, יש לשים לב לשנות בהתאם לפיתוח לבדיקות ולייצור

    UseService – בשרתי תהילה חובה לשים אותו כtrue.
    
    בפיתוח חובה לשים אותו  אותו כ false

* Web config handlers

    יש להגדיר handlers עבור ה register של הupload:
    ```html
    <system.web>
        <httpHandlers>
        <add verb="*" path="UploadRegister.axd" type="Tehila.GovFileUploader.HttpHandler.FileUploadHttpHandler, Tehila.GovFileUploader.HttpHandler" />
        </httpHandlers>

    </system.web>
    <system.webServer>
        <handlers>
        <add name="UploadHandler" verb="GET,POST" path="UploadRegister.axd" type="Tehila.GovFileUploader.HttpHandler.FileUploadHttpHandler, Tehila.GovFileUploader.HttpHandler" />
        </handlers>
    </system.webServer>
    <!-- _יש להקפיד לשים בverb  של ה handler post או הכל *_ -->
    ```



*	להגדיר בפרויקט האנגולר את המפתחות הבאים בקבצי הקונפיג (בהתאם לכל סביבה):
```javascript
    "uploadServerUrl": "http://qa-soa:8092/FilesReceiver.ashx",
    "registerHandlerUrl": "UploadRegister.axd/"
```

uploadServerUrl זהה לערך הקיים ב webapi

registerHandlerUrl זהו כתובת ה api של האתר בו יושבים ה dlls שהורדו מהנוגט המוזכר לעיל.

במידה ואתם משתשמשים בפרוקסי, יש להגדיר context ייעודי לקריאה מהסוג הזה כך:
```json
        {
        context: [
            "/*.axd/"
        ],
        target: "http://localhost:49319/",   
        secure: false,
        logLevel: "debug"
    }
```


*	בhtml יש לשים את הקומפוננטה לפי התיעוד.

חובה לתת name שונה וייחודי לכל קומפוננטה

רשימת הקבצים מתנהגת כ ngModel  -  two way binding ולכן ניתן להגדיר את מערך הקבצים שלכם כך: 
```
[(ngModel)]="files"
```
הקומפוננטה מתנהגת בדיוק כמו כל שאר פקדי התשתית, ניתן לתת לה רוחב לפקד ולתוית הטקסט, ניתן לשלוח טקסט ולהגדיר האם יוצג מעל הפקד או מצידו, ממש כמו כל שאר הפקדים.

ניתן להגדיר ולידציית required ולהתנות אותה בביטוי כלשהו, בדיוק כמו שאר הפקדים האחרים.

ניתן להוסיף כל מידע שהוא על הקבצים, לצורך המערכת שלכם, לאחר הצלחת טעינת הקובץ  - תקבלו אותו באירוע של fileUploadComplete ותוכלו להציב בו ערכים נוספים ודינאמיים שיישמרו לכל אורך הדרך.

לדוגמה רישום לאירוע:
```html
<moj-file-upload name="fldold1" [labelTextKey]="'Texts.fileToUpload'" [enabledFileTypes]="'pdf|png|jpg'" [(ngModel)]="files" [controlWidthColumns]="4"
			[required]="isRequired1" (fileUploadComplete)="fileUploadComplete($event)"></moj-file-upload>
```
לדוגמה הפונקציה שמציבה ערך נוסף כלשהו בקובץ שהתקבל:
```javascript
fileUploadComplete(file){
   file.docType = 4;
}
```

	

