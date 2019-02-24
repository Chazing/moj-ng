# איך עובדים עם Wizard?

### moj-wizard

לפקד moj-wizard יש לשלוח מערך מסוג WizardItem[]

לדוגמא:

```typescript

items: WizardItem[];

ngOnInit() {

this.items = [{

label: 'סוג הבקשה', component: AutocompleteExampleComponent,

},

{

label: 'דין קדימה', component: MultiSelectExampleComponent,

},

{

label: 'דין קדימה', component: FormExampleComponent,

componentData: { name: 'my form', id: 1 },

},

{

label: 'דין קדימה', component: MultiSelectExampleComponent, isForMetro: true,

}]

}
```
```html
<moj-wizard [items]="items"\>

</moj-wizard\>
```

Inputs:

1.  Items – מסוג WizardItem[]פרוט בהמשך.

2.  Readonly – האם ניתן לנווט דרך התפריט עצמו (ברירת מחדל אפשר)

3.  activeIndex – תפריט מסוים שיבחר בעת עלית ה wizard

4.  subActiveIndex – במקרה של תפריט משני אפשר לבחור תת- טאב שיבחר בהתחלה

5.  nextText – טקסט לכפתור "הבא"

6.  backText – טקסט לכפתור "הקודם"

7.  isWithMetro – האם להציג גם מטרו, ברירת מחדל false

8.  enableNavigationByMetro – ברירת מחדל true

9.  metroAlign – מטרו למעלה או למטה

10. submitButton – האם להציג כפתור submit בסיום הwizard

11. submitText - טקסט לכפתור submit

output:

1.  onSubmit – יקרא בלחיצה על כפתור submit.

### WizardItem:

1.  Label – טקסט לכותרת

2.  Component - יש לשלוח את ה type של הקומפוננטה שתוצב במסך. הקומפוננטה צריכה
    לרשת מ WizardItemComponentBase - פרוט בהמשך

3.  componentData – שליחת נתונים לקומפוננטה. בתוך הקמפוננטה יהיה ניתן לגשת
    לנתונים ע"י this.data

4.  width – ברירת מחדל התפריט מתחלק באופן יחסי, ניתן לקבוע גודל מסוים בפרמטר זה.

5.  Readonly – האם לאפשר פרמטר מסוים

6.  wizardSubItems – בפרמטר זה ניתן לקבוע תת תפריט המורכב גם הוא ממערך מסוג
    WizardItem[]

7.  isForMetro האם להציג פריט זה במטרו

8.  indexForMetro – ניתן לקבוע את סדר הפריטים בסרגל המטרו

### WizardItemComponentBase

הקלאס ממנו יורשת כל קומפוננטה שנמצאת בתוך הwizard . ניתן לממש את הדברים הבאים:

1.  wizardItemModel – לשמירת נתוני הטאב ב service יש לתת בפרמטר זה שם ב
    constructor לדוגמא:

constructor() { super(); this.wizardItemModel = 'productModel';}

1.  methodBeforeExit – פונקציה שתקרא לפני יציאה מטאב (לדוג לשמירה) אם חזר false
    המעבר לא יתבצע.

2.  methodAfterExit – פונקציה שתקרא לאחר יציאה מטאב.

###גישה לנתונים מטאבים אחר ים

הגישה לנתונים היא דרך WizardService בו שמור מערך הנתונים.

ניתן לגשת לפונקציות:

1.  getWizardItemModels – מחזירה מערך של כל נתוני הטאבים.

2.  getWizardItemModel – מקבלת שם טאב (עפ"י המשתנה wizardItemModelשהוגדר
    בקומפוננטה) ומחזירה את הנתונים של הטאב.


#### דוגמא למימוש WizardItemComponentBase

```typescript
export class MultiSelectExampleComponent extends WizardItemComponentBase {

constructor(private wizardService: WizardService) {

super();

this.wizardItemModel = 'multiselectModel';

}

getList() {//קבלת נתונים מטאבים אחרים

console.log(this.wizardService.getWizardItemModel('formModel'));

}

}
```
