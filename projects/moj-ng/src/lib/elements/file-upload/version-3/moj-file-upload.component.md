# עבודה עם file upload לאתרים חיצוניים
הגירסה הנוכחית מכילה שתי קומפוננטות זהות ל file upload אולם שונות לגמרי במימוש שלהן מול תהילה.

המימוש החדש מול תהילה (בדיקה סינכרונית ומיידית של הקובץ בתוכנת סריקה) כרגע בהשהייה בצד של תהילה ולכן לא מומלץ להשתמש בו.

הקומפוננטה הזמינה לשימוש מקצה לקצה הינה :
```
<moj-file-upload ...></moj-file-upload>
```
## מה צריך לעשות בכדי לעבוד עם file upload?

*	להוריד לפרויקט ה webapi את הנוגט של Moj.FileUpload.dlls בגירסת 3.3.1 ולשים לב למפתחות הנכונים ב web.config כמו שהיה עד היום לפי התיעוד כאן:

http://itportal/ItDocuments/Dev/infrastructureUi/FileUpload/תיעוד%20לרכיב%20FU.pdf

*	להגדיר בפרויקט האנגולר את המפתחות הבאים בקבצי הקונפיג (בהתאם לכל סביבה):
```
    "uploadServerUrl": "http://qa-soa:8092/FilesReceiver.ashx",
    "registerHandlerUrl": "UploadRegister.axd/"
```

**uploadServerUrl** זה אותו ערך כמו שהיה עד היום ברכיב הקודם

**registerHandlerUrl** זהו כתובת ה api של האתר בו יושבים ה dlls שהורדו מהנוגט המוזכר לעיל.

במידה ואתם משתשמשים בפרוקסי, יש להגדיר context ייעודי לקריאה מהסוג הזה כך:

        {
        context: [
            "/*.axd/"
        ],
        target: "http://localhost:49319/",   
        secure: false,
        logLevel: "debug"
    }


*	בhtml יש לשים את הקומפוננטה לפי התיעוד.

**חובה לתת name שונה וייחודי לכל קומפוננטה**

רשימת הקבצים מתנהגת כ ngModel  -  two way binding ולכן ניתן להגדיר את מערך הקבצים שלכם כך: 
```
[(ngModel)]="files"
```
הקומפוננטה מתנהגת בדיוק כמו כל שאר פקדי התשתית, ניתן לתת לה רוחב לפקד ולתוית הטקסט, ניתן לשלוח טקסט ולהגדיר האם יוצג מעל הפקד או מצידו, ממש כמו כל שאר הפקדים.

ניתן להגדיר ולידציית required ולהתנות אותה בביטוי כלשהו, בדיוק כמו שאר הפקדים האחרים.

- ניתן להוסיף כל מידע שהוא על הקבצים, לצורך המערכת שלכם, לאחר הצלחת טעינת הקובץ  - תקבלו אותו באירוע של fileUploadComplete ותוכלו להציב בו ערכים נוספים ודינאמיים שיישמרו לכל אורך הדרך.

לדוגמה רישום לאירוע:
```
<moj-file-upload name="fldold1" [labelTextKey]="'Texts.fileToUpload'" [enabledFileTypes]="'pdf|png|jpg'" [(ngModel)]="files" [controlWidthColumns]="4"
			[required]="isRequired1" (fileUploadComplete)="fileUploadComplete($event)"></moj-file-upload>
```
לדוגמה הפונקציה שמציבה ערך נוסף כלשהו בקובץ שהתקבל:
```
fileUploadComplete(file){
   file.docType = 4;
}
```

- ישנה אפשרות לכתיבת שטח דינאמי עבור כל קובץ בו תוכלו להוסיף טקסטים/כפתורי פעולות אישיים וכד'

לצורך כך עליכם לייצר template שאותו תרצו להציג ולהציב עליו את המזהה #fileActions. 

תקבלו את הקובץ אליכם בכל משתנה שתגדירו על ה template בדוגמה הזו למשל הוגדר המשתנה let-file שקיבל אליו את הקובץ (לא משנה מה יהיה שם 
המשתנה, חשובה צורת ההגדרה של let-variable) 

בצורה כזו תקבלו לשם המשתנה שיצרתם את מופע הקובץ הנוכחי ותוכלו להשתמש בו בתוך ה template

תעשו זאת כך:
```html
<moj-file-upload name="fld44" [labelTextKey]="'Texts.fileToUpload'"                  [enabledFileTypes]="'pdf|png|jpg'"
        [(ngModel)]="files" [controlWidthColumns]="6">
    <ng-template #fileActions let-file>
        <button (click)="click(file)">Click</button>
    </ng-template>
</moj-file-upload>
```
```typescript
click(file) {
    console.log(file);
}
``` 

- אפשרות חדשה שנוספה היא יכולת השליטה על כפתור המחיקה של כל קובץ

ישנו פרמטר חדש בשם enableDelete
המסוגל לקבל true/false או function שהחתימה שלה תהיה כזו:
```typescript
enableDelete(file: any): boolean { }
```
לדוגמה:
```typescript
enableDelete(file) {
    if (file.mojId)
        return false;
    return true;
}
```


