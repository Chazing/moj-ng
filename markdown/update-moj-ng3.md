# עדכון גרסה ל moj-ng 3

## קודם כל יש לעדכן את אנגולר לאנגולר 7, העדכון כולל גם את angular/cli

- עדכון החבילה של @angular/cli על המחשב
```
npm i @angular/cli@latest -g
```
- עדכון תלויות אנגולר
```
npm install @angular/animations@7.1.4 @angular/common@7.1.4 @angular/compiler@7.1.4 @angular/core@7.1.4 @angular/forms@7.1.4 @angular/http@7.1.4 @angular/platform-browser@7.1.4 @angular/platform-browser-dynamic@7.1.4 @angular/router@7.1.4 zone.js@0.8.26 --save
```

- עדכון ה dev dependencies
```
npm install @angular-devkit/build-angular@0.11.0 @angular/compiler-cli@7.1.4 @angular/cli@7.1.4 typescript@3.1.6 --save-dev
```

- עדכון גרסת פקדים
```
npm i primeng@7.0.3
npm i @angular/cdk@7.2.0
```

## עדכונים נוספים הקשורים לגירסה

- יש לשים לב להוריד את ה MojGridService מה providers של ה app.module 
- בפקד iconColumn נוסף פרמטר חיצוני בשם field הנועד לצורך מיון עמודה
- כל המחלקות מתוך התשתיות ניתנות לייבוא מספרית @moj/moj-ng, 

יש להחליף בקובץ tsconfig.ts את המקטע של include במקטע הבא:
```
 "include": [
    "src/**/*",
    "node_modules/@moj/moj-ng/**/*"
  ]
```

לאחר מכן, ניתן לייבא כל קובץ שהוא ב import אחד עבור כולם, לדוגמה כך:
```
import { MojLineComponent, MojAccessibleMenuComponent, MojBottonModule, MojWebsiteModule } from '@moj/moj-ng';
```

