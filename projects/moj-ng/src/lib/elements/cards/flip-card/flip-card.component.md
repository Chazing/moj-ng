# שימוש ב flip-card

השימוש הפשוט הוא כמו בדף הקוד ב demo

### נקודות נוספות
* אם רוצים תוכן מותאם אישית בתוך הכרטיסיות יש אפשרות לא לשלוח את הפרמטרים  textKey ו iconClass אלא לשים תוכן מותאם אישית בתוך flip-card-content כמו בדוגמה-
```html
<moj-flip-card>
  <flip-card-content>
    <h1>תוכן מותאם אישית</h1>
  <flip-card-content>
</moj-flip-card>
```
* תוכן הכרטיסיה למצב עריכה שיוצג לאחר לחיצה צריך להיכנס בתוך תגית של flip-card-edit

* כדי לשנות מחוץ לקומפוננטה את מצב העריכה- יש להרשם ל isEditMode בצורה של twoWay כמו בדוגמה
```html
[(isEditMode)]="isEditMode"
```
ואז- בשינוי דרך הקוד- זה יתעדכן 
