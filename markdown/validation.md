# וולידציות

באנגולר, וולידציות ממומשות באמצעות directives שיושבים על הפקד.

ישנן וולידציות פשוטות שאנגולר ממש עבורינו, כמו required, min ועוד. ניתן לראות את הרשימה המלאה [פה](https://angular.io/api/forms/Validators)

דוגמה למימוש של וולידציה פשוטה:

```html
 <moj-textbox [(ngModel)]="formModel.textField" name="textField" required                minlength="4" labelWidthColumns="1" controlWidthColumns="2">
 </moj-textbox>
```
ישנן וולידציות נוספות שאפשר לקחת מהספריה [ng2-validation](https://github.com/yuyang041060120/ng2-validation)


### וולידציות בין שדות:
בתשתית פותחו וולידציות המותנות בשדות,

הוולידציות המותנות הקיימות כרגע בתשתית:
* equalTo
* greaterThan

דוגמה לשימוש:
```html
 <moj-datepicker [labelStyle]="labelStyle.Green" [isLabelAutowidth]="true" [(ngModel)]="dateFrom" name="dateFrom" [labelWidthColumns]="2" [controlWidthColumns]="2"  #dateFromVal="ngModel"></moj-datepicker>
<moj-datepicker [(ngModel)]="dateTo" name="dateTo" [labelWidthColumns]="2" [controlWidthColumns]="2" #dateToVal="ngModel"
    [greaterThan]="dateFromVal"></moj-datepicker>
```

הערך שאליו הוולידציה משווה, יכול להיות כל property, או לחילופין שם של פונקציה בקומפוננטה.

### וולידציות נוספות בתשתית
* identification - וולידציה למספר זהות
* security - וולידציה למניעת הכנסת תווים אסורים מטעם אבטחת מידע לשדות input
* hexadecimal

וולידציות נוספות ייתווספו עם הזמן עם הצורך של הצוותים השונים

### הודעות וולידציה מותאמות אישית

במקרה ויש צורך להשתמש בוולידציה קיימת, אך להציג הודעה שונה ממה שמספקת התשתית:

יש לשלוח לפקד אובייקט המכיל את מפתח הוולידציה הקיימת, ומפתח ההודעה החלופית, דרך הפרמטר customValidationErrors.

```typescript
export class SomeComponent{
    customValidationErrors=[{ key:"required", value:"customRequired"}]
}
```
```html
 <moj-datepicker [(ngModel)]="dateFrom" name="dateFrom" [labelWidthColumns]="2" [controlWidthColumns]="2" #dateFromVal="ngModel"
                required [disabled]="checkBoxValue" [customValidationErrors]="customValidationErrors"></moj-datepicker>
```
יש להוסיף את ההודעה הרצויה בקובץ ה he.json של הפרוייקט, מתחת Validations
```json
{
  "Validations":{
    "customRequired":"הודעה מותאמת אישית"
  }
}
```




