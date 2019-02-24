# תחילת העבודה עם אנגולר
* ###### ** הורדת Nodejs: **
    יש להוריד Node מהכתובת: https://nodejs.org/en/download

    לבחור installer עבור windows 64-bit. (השורה הראשונה, הקוביה השניה)
* ###### **  קונפיגורציה ל npm **
כדי לעבוד מול ה repository של המשרד
    יש להריץ את הפקודות הבאות בחלון ה command:

אלו ההגדרות המומלצות לעבודה, עם ההגדרות האלו ניתן להוריד גם חבילות מהמשרד, וגם חבילות חיצוניות.
```
npm config set strict-ssl false
npm config rm proxy
npm config rm http-proxy
npm config rm https-proxy
npm config set registry http://mojnuget:5555/
```

במקרה שישנה איזשהי בעיה בהורדת החבילות, ניתן לעבוד גם מול ה repository הכללי של npm

לצורך זה יש להגדיר את ההגדרות הבאות:

(לא ניתן להוריד את התשתיות שלנו בתצורה הזו)

```
npm config set strict-ssl false
npm config set registry http://registry.npmjs.org/
npm config set proxy http://pac.gov.il:8080
npm config set http-proxy http://pac.gov.il:8080
npm config set https-proxy http://pac.gov.il:8080 
```

* ###### ** פתיחת פרוייקט חדש עם תשתיות **

יש להוריד את פרוייקט הבסיס מה tfs, לשנות לו את השם לפרוייקט המבוקש, ועליו להמשיך לפתח.

הנתיב ב tfs: $/Infrastructure_Mvc/Development/Angular/moj-seed-app

* יש להתקין את התלויות ע"י הפקודה npm install
* כעת אפשר להריץ עם הפקודה ng serve

###### שימו לב!
לעיתים לאחר הפקודה npm i הקובץ tsconfig.json מתאפס ומתקבלות שגיאות בהרצה. ולכן יש להחזיר את התוכן שהיה לפני הפקודה.

כל המחלקות מתוך התשתיות ניתנות לייבוא מספרית @moj/moj-ng, 

לצורך השלמה אוטומטית וכתיבה אחידה של ייבוא  מבלי לכתוב את הנתיב המפורש יש להוסיף בקובץ ts.config את המפתח הבא תחת ה compilerOptions:

```
"typeRoots": [
      "node_modules/@moj"
    ]
```
לאחר מכן ניתן לייבא כל קובץ שהוא ב import אחד עבור כולם, לדוגמה כך:
```
import { MojLineComponent, MojAccessibleMenuComponent, MojBottonModule, MojWebsiteModule } from '@moj/moj-ng';
```

#### עבודה עם visual studio code

להורדה: https://code.visualstudio.com/download

###### תוספים בסיסיים מומלצים לעבודה עם אנגולר

- Angular Language Service- נותן השלמה אוטומטית על קומפוננטות זמינות, התראות על קוד לא תקין ועוד.
- vscode-icons- נותן אייקונים רלוונטיים לפי סוג קובץ
- Visual Studio Team Services- לפרוייקטים שעובדים מול tfs זה התוסף שמאפשר עבודה  מול tfs מ vs code
- angular2-switcher- מאפשר בקיצורי מקלדת לדפדף בין הקבצים של אותה קומפוננטה (html, css, ts)
