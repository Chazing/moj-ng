# טפסים דינאמיים:

moj-dynamic-form מיועד למקרה שיש צורך בבנית טופס דינאמי.

moj-dynamic-form משתמש ב-reactive form, הפקד מקבל רשימה של אוביקטים מסוג MojDynamicField ובונה את הטופס.

האפשרויות של moj-dynamic-form:

1) בנית טופס מסוג FormGroup בצורה דינאמית לפי רשימה של אוביקטים מסוג MojDynamicField

2) הוספת פקדים מחבילת moj-ng בצורה דינאמית

3) שליחת כל input / output לפקדים

4) הוספת פקדים חדשים שיוכלו להתווסף לטופס

5) שינוי הגדרות לטופס לאחר שהוא עלה (לדוגמה בשינוי שדה אחד לקבוע על שדה אחר שיהיה disabled)

&nbsp;

## שימוש ב moj-dynamic-form

כדי להשתמש ב moj-dynamic-form יש להוסיף את המודול MojDynamicFormModule.

הפקד מקבל 2 פרמטרים:

   1. form - אוביקט מסוג formGroup לאחר שנבנה ע"י MojDynamicFormService -> addControls (הסבר על הפונקציה בהמשך)

   2. fields - אוביקט מסוג MojDynamicField[][]. יש לשים לב שזהו מערך כפול וכל מערך בפנים מגדיר שורה בטופס (פרוט בהמשך)

דוגמה:

```html
<moj-dynamic-form [form]="exampleDynamicForm" [fields]="fields"></moj-dynamic-form>
```

```typescript
@Component({
    selector: 'dynamic-form-example',
    templateUrl: './dynamic-form-example.component.html'
})
export class DynamicFormExampleComponent implements OnInit {

    fields:MojDynamicField[][];
    exampleDynamicForm: FormGroup = new FormGroup({});

    constructor(private mojDynamicFormService:MojDynamicFormService) { }

    ngOnInit() {
        this.initFields();
        this.mojDynamicFormService.addControls(this.exampleDynamicForm, this.fields)
    }

    initFields(){
        let items = [
            { value: "ישראל", key: 1 },
            { value: "אלבניה", key: 2 },
            { value: "אמריקה", key: 3 },
            { value: "אוסטריה", key: 4 },
            { value: "רוסיה", key: 5 }
        ]
        this.fields =  [
            [
                <MojDynamicDropdownField>{
                    type:MojDynamicDropdownComponent,
                    name: 'country1',
                    labelTextKey: 'ארץ 1',
                    validators: Validators.required,
                    items:items,
                    fieldName :'value',
                    fieldID: 'key',
                    isLabelAboveControl:true,
                    controlWidthColumns:2
                },
                <MojDynamicAutocompleteField>{
                    type:MojDynamicAutoCompleteComponent,
                    name: 'country2',
                    labelTextKey: 'ארץ 2',
                    validators: Validators.required,
                    items:items,
                    fieldName :'value',
                    fieldID: 'key',
                    dropdown: true,
                    isLabelAboveControl:true,
                    controlWidthColumns:2
                },
                <MojDynamicDatepickerField>{
                    type:MojDynamicDatePickerComponent,
                    name: 'countryDate',
                    labelTextKey: 'תאריך',
                    validators: Validators.required,
                    value: new Date(),
                    isLabelAboveControl:true,
                    controlWidthColumns:2
                },
            ],           
            [
                <MojDynamicLabelField>{
                    type:MojDynamicLabelForComponent,
                    name: 'creationDate',
                    labelTextKey: 'תאריך יצירה',
                    value: new Date(),
                    contentWidthColumns:4,
                    labelWidthColumns:2
                }
            ]
        ];
    }
}
```

&nbsp;
## הפקדים הניתנים לשימוש:

    MojDynamicLabelField
    MojDynamicTextboxField
    MojDynamicDropdownField
    MojDynamicAutocompleteField
    MojDynamicDatepickerField
    MojDynamicCheckboxField

לכל פקד ניתן לשלוח את כל ה input/outputs הניתנים לשימוש בצורה הרגילה.

במידה וידרשו פקדים תשתיתיים נוספים נשמח להוסיף.

&nbsp;

## הוספת פקדים שאינם תשתיתיים

להוספת פקד חדש שיוכל להשתלב בטופס דינאמי יש לרשת מ- MojDynamicComponent ולהגדירו בצורה הבאה:

```typescript
@Component({
    selector: "dynamic-checkbox-example",
    template: `<div [formGroup]="group"><checkbox-example #innerComponent [formControlName]="name"></checkbox-example></div>`,
})
export class DynamicCheckboxExampleComponent extends MojDynamicComponent {

}
```

* לעטוף ב- div ולשלוח לו formGroup
* על הפקד שמכיל את הערך בשביל ה formGroup יש להגדיר formControlName] = name]
* למקרה שהפקד מקבל inputs/outputs יש לציין עליו  innerComponent# כדי שידע לאן למפות

&nbsp;
## moj-dynamic-form כחלק מ form שאינו דינאמי

ניתן להגדיר חלק מטופס רגיל כטופס דינאמי (מחייב שימוש ב reactive form).

משמש למקרים שבהם רוצים להגדיר כפתור אישור שאינו דינאמי, להשתמש ב- mojForm directive וכדומה.

```html
<form [formGroup]="exampleDynamicForm">
    <moj-dynamic-form [form]="exampleDynamicForm" [fields]="fields"></moj-dynamic-form>
    <moj-submit-button [form]="exampleDynamicForm" textKey="אישור"></moj-submit-button>
</form>
```

יש להגדיר form רגיל עם אותו formGroup ובתוכו את moj-dynamic-form. הפקדים ישתלבו בתוך הform הראשי

&nbsp;

## MojDynamicFormService

MojDynamicFormService ניתן לשימוש בכל מקום, מכיל את הפונקציות הבאות:

1. addControls - מקבל form, fields ומוסיף את השדות ל- form. (ניתן לשלוח form שכבר יש לו שדות ורק להוסיף)

2. addControl - מקבל form, field ומוסיף את השדה ל- from

3. removeControl - מקבל form, controlName ומוחק את השדה מה - form

4. getFieldByName - מקבל fields ושם שדה לחיפוש ומחזיר את השדה

&nbsp;

## שינויים דינאמיים לאחר עלית הטופס

 אחרי עלית הטופס ניתן לבצע שינויים על השדות ע"י ה- outpus הבאים:

* setValue - שינוי ערך של פקד
* setValidators - שינוי ולידציה לפקד
* setProperty - שינוי כל מאפיין אחר לפקד (input/output). מקבל אוביקט שמכיל propertyName, value

(סיבת חלוקת הפונקציות היא שvalue, validators עובדים על הformGroup וכל שאר המאפינים עובדים על ה- fields)

לדוגמה בשינוי שדה ארץ לשנות את שדה תאריך שיהיה disabled:

```typescript
this.fields =  [
            [
                <MojDynamicDropdownField>{
                    type:MojDynamicDropdownComponent,
                    name: 'country',
                    labelTextKey: 'ארץ',
                    items:items,
                    fieldName :'value',
                    fieldID: 'key',
                    isLabelAboveControl:true,
                    controlWidthColumns:2,
                    onChange:this.onCountryChange
                },
                <MojDynamicDatepickerField>{
                    type:MojDynamicDatePickerComponent,
                    name: 'countryDate',
                    labelTextKey: 'תאריך',
                    validators: Validators.required,
                    value: new Date(),
                    isLabelAboveControl:true,
                    controlWidthColumns:2
                }
            ]
    ]

    onCountryChange=(event)=>{
        let countryDateField:MojDynamicDatepickerField = this.mojDynamicFormService.getFieldByName(this.fields,"countryDate");
        countryDateField.setProperty.emit({propertyName:'disabled', value:true});
    }
````

&nbsp;

## הוספת/הורדת שדות לאחר עלית הטופס

כדי להוסיף או להוריד שדות בצורה דינאמית יש לשנות את האוביקט fields כמו כל שינוי, אך יש לזכור גם לעדכן את ה- formGroup כדי שהשדות יהיו מקבילים לשדות בתצוגה.

לשם כך יש להשתמש בפונקציות addControls, removeControls מ- MojDynamicFormService (פרוט למעלה)

דוגמה:

```typescript
onCountryChange=(event)=>{
        //add title control
        let titleField =  <MojDynamicTextboxField>{
            type:MojDynamicTextboxComponent,
            name: 'title',
            labelTextKey: 'כותרת',
            isLabelAboveControl:true,
            controlWidthColumns:4,
            maxlength:40
        }
        this.mojDynamicFormService.addControl(this.exampleDynamicForm, titleField);
        this.fields[1].push(titleField);

        //remove countryDate control
        this.mojDynamicFormService.removeControl(this.exampleDynamicForm, 'countryDate');
        this.fields[0].splice(2);
    }
```