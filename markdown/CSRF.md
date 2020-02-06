# הגנת CSRF

CSRF (אנגלית: Cross Site Request Forgery) היא התקפה נגד גולש אינטרנט המאלצת את דפדפן האינטרנט של הגולש לבצע פעולות לא רצוניות ביישומי אינטרנט בשמו של המשתמש בשירות באמצעות ניצול מגבלות בפרוטוקול HTTP.

ההתקפה מתבצעת על ידי הצבת קישור לדף אינטרנט, פרסומת או תמונה, בפורומים, צ'אטים, דואר זבל ועוד. לאחר הלחיצה על הקישור, התוכנית מנסה לקבל גישה לאתר. לאחר שהמשתמש כבר אומת מול השרת, התוקף יוכל לבצע את פעולתו.


לדוגמה, גולש התחבר לאתר הבנק שלו, לאחר שעבר את ההזדהות  יש לו אפשרות להעביר כספים דרך האתר.
נגיד שהוא ממלא טופס עם פרטי ההעברה, בלחיצה על כפתור "העברת הכסף" מתבצעת קריאת http עם נתוני הטופס שהוזנו וההעברה מתבצעת בפועל.


התוקף מנצל את הזמן הזה ושולח לו מייל עם קישור לאתר זדוני. באותו אתר זדוני יהיה טופס או פעולה כלשהיא שתבצע קריאה לכתובת של אתר הבנק - אותה הכתובת שניגשו אליה בלחיצה על הכפתור האמיתי באתר של הבנק, במקום להעביר את הנתונים מנתוני הטופס שהמשתמש אמור למלא - התוקף ממלא שם נתונים כאוות נפשו,

```html
<img src="http://bank.example.com/withdraw?account=Alice&amount=1000000&for=attacker">
```

יוצא אם כך שיש לתוקף אפשרות לבצע קריאות בשמו של המשתמש ללא ידיעתו.

## הצורך הטכנולוגי הוא לזהות ולחסום את התקיפה הזו

ישנן כמה דרכים

דרך אחת היא לבדוק בכל קריאה מי הכתובת המפנה - האם היא זהה לכתובת האתר המקורי.

במקרה של תקיפה הכתובת המפנה תהיה של האתר התוקף.


פיתרון נוסף הוא לתת לכל משתמש שמתחבר למערכת token
ובכל פניה לשרת לשלוח את הtoken הזה ולבדוק אם הוא אכן התקבל.

## פיתרון תשתיתי למניעת תקיפה זו
הפיתרון שנתנו בתשתית למניעת תקיפה זו הינו על בסיס token.

בזמן עליית המערכת - מתבצעת קריאה לקבלת token

לאחר מכן, בכל קריאה בצד שרת במידה ורוצים למנוע ממנה תקיפה - תתבצע בדיקה שה token התקבל והוא חוקי.

פיתרון זה נמצא בגירסת תשתיות 3.6 ומעלה

בשביל להפעיל את המנגנון הזה יש לבצע כמה צעדים:
- בקוד האנגולר, בצד לקוח, יש להוסיף את המפתח הבא בקובצי ב config
```html
"isCSRFActive": true
```
- בצד שרת יש להוריד נוגט בשם Moj.Infrastructure.WebApi

בנוגט זה קיימת הכתובת לקבלת ה token, בנוסף לזה הוא מכיל פילטר אטריביוט שניתן לשים מעל פעולות מסוימות בקוד צד שרת שלכם ובכך למנוע מהן תקיפה

הפילטר נקרא ValidateAntiForgeryToken

- בפעולות צד שרת שהינכם רוצים למנוע מהן תקיפה יש לשים את ה attribute מעל הaction כך:
```
// POST api/values
[ValidateAntiForgeryToken]
public void Post([FromBody]string value)
{
}
```

## מתי נשתמש בהגנת CSRF?
מניעת CSRF יש לבצע על כתובות שמבצעות פעולות רגישות וניתנות לביצוע בהינתן הרשאות.
לדוגמה: עדכון פרטי משתמש, מחיקה/עדכון רשומות אישיות וכד'