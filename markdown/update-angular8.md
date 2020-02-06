## הוראות הטמעה של תשתית MOJ חדשה כוללת אנגולר 8

### דרישות מקדימות:

Node.js מגירסה 12 ומעלה

### עדכון גירסת אנגולר 8

יש לעדכן את הפרויקט לאנגולר 8, נעשה זאת כך:

את כל החבילות של אנגולר נעדכן להיות 8.0.0 (במקום 7.1.4 או מה שהיה לכם עד 
עכשיו) 

את חבילת angular/http יש להוריד לגמרי, היא אינה קיימת עוד

בחלק של ה devDependencies

יש לעדכן את החבילות הללו:

```json
"@angular-devkit/build-angular": "^0.802.0"
"@angular/cli": "8.0.0"
"@angular/compiler-cli": "8.0.0"
"typescript": "3.4.3"
```

שני דברים שצריך יהיה לשים לב אליהם בקוד באנגולר 8:

**Lazy Loading**

מגירסה 8 ומעלה ההפניה למודולים הנטענים ב Lazy משתנה ויש לכוון אליהם לדוגמה במקום:
```typescript
loadChildren: './admin/admin.module#AdminModule' 
```
לעשות זאת כך:
```typescript
loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
```

**ViewChild**

מגירסה 8 ומעלה יש להוסיף ל הגדרת ViewChild/ContentChild אוביקט ובו המאפין static

מאפיין זה יכול להיות true/false וזאת בהתאם לאלמנט אותו מחפשים – 

אם האלמנט נמצא על הדף בעליית הקומפוננטה והוא לכאורה היה יכול להיות זמין ב ngOnInit אז הstatic יהיה true
אם האלמנט הינו דינאמי ואינו נמצא על הדף מראש אזי יש להגדיר את ה static כ false

## הורדת גירסת תשתית חדשה

התשתית צורכת חבילה חדשה וע"כ יש לשים לב להורידה: angular2-text-mask

1.	יש להתקין גירסת תשתיות 5 ומעלה (יש לקחת את האחרונה)
```
npm i @moj/moj-ng@5.0.4
```
2.	לשנות את סיומת קובץ ה styles מסיומת css לסיומת של scss 

3.	לעדכן את תוכן קובץ שיהיה כך: (לאחר קטע קוד זה תוכלו לשים את קטעי הקוד שלכם)

```
@import "../node_modules/@moj/moj-ng/src/css/moj-config-css.scss";
.moj-ltr {
    @import "../node_modules/@moj/moj-ng/src/css/_direction-ltr.scss";
    @import "../node_modules/@moj/moj-ng/src/css/moj-ag-grid.scss";
    @import "../node_modules/@moj/moj-ng/src/css/moj-common.scss";
    @import "../node_modules/@moj/moj-ng/src/css/moj-fonts.scss";
    @import "../node_modules/@moj/moj-ng/src/css/moj-buttons.scss";
    @import "../node_modules/@moj/moj-ng/src/css/moj-prime.scss";
    @import "../node_modules/@moj/moj-ng/src/css/moj-layout.scss";

}
.moj-rtl {   
    @import "../node_modules/@moj/moj-ng/src/css/_direction-rtl.scss";
    @import "../node_modules/@moj/moj-ng/src/css/moj-ag-grid.scss";
    @import "../node_modules/@moj/moj-ng/src/css/moj-common.scss";
    @import "../node_modules/@moj/moj-ng/src/css/moj-fonts.scss";
    @import "../node_modules/@moj/moj-ng/src/css/moj-buttons.scss";
    @import "../node_modules/@moj/moj-ng/src/css/moj-prime.scss";
    @import "../node_modules/@moj/moj-ng/src/css/moj-layout.scss";
}
```

4.	בקובץ angular.json בפרק ה styles צריכים להיות הקבצים הבאים:
```
"styles": [
"node_modules/bootstrap/dist/css/bootstrap.css",
"node_modules/bootstrap/dist/css/bootstrap-theme.css",
"node_modules/@moj/moj-ng/src/assets/font-awesome/css/all.css",
"node_modules/primeng/resources/themes/omega/theme.css",
"node_modules/primeng/resources/primeng.min.css",
"node_modules/primeicons/primeicons.css",
"node_modules/@moj/moj-ng/src/css/moj-style.scss",
"src/styles.scss"
],
```
5.	לעדכן את מבנה הדף הראשי:

אם מדובר במערכת פנימית:

```html
<div mojDir class="bo-wrapper">
    <header>
        <moj-bo-header></moj-bo-header>
    </header>
    <nav>
        <moj-bo-menubar [barItems]="barItems"></moj-bo-menubar>
    </nav>
    <main>
        <moj-url-tabs [colorizable]="true" [limit]="8"></moj-url-tabs>
    </main>
</div>
</div>
```

אם מדובר באתר חיצוני:

```html
<div mojDir moj-dynamic-fontsize class="ws-wrapper">
    <header>
        <moj-accessible-menu></moj-accessible-menu>
        <moj-website-header></moj-website-header>
        <moj-website-topmenu>
            …
        </moj-website-topmenu>
    </header>
    <main>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    </main>
    <footer role="contentinfo">
        <moj-website-footer></moj-website-footer>
    </footer>
</div>
</div>
```