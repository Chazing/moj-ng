## עדכון גרסה לאנגולר 6
1. המרת הפרוייקט עצמו לאנגולר 6

    כדי להמיר את הפרוייקט עצמו, יש לפעול לפי ההנחיות של [Angular Update](https://update.angular.io/)
    
    השלבים בקצרה:
    
    * הרצת הפקודות הבאות:
    ```
    npm install -g @angular/cli@latest
    npm install @angular/cli@latest
    ng update @angular/cli
    ng update @angular/core

    ```
    * לאחר העדכון צריך לשנות את הקוד שלא נתמך בגרסה החדשה של rxjs

        את הבעיות רואים בזמן קומפילציה.

        אפשר לעבור על הקוד ולבצע את השינויים ידנית, 
    
        או להריץ המרה אוטומטית ע"י הפקודות הבאות:
        ```
        npm install -g rxjs-tslint
        rxjs-5-to-6-migrate -p src/tsconfig.app.json
        npm uninstall rxjs-compat
        ```
        דוגמאות לשינויים בקוד-

        #### שינוי imports

        גרסה ישנה:
        ```typescript
        import { Subject } from 'rxjs/Subject';
        import { Observable } from 'rxjs/Observable';
        import { BehaviorSubject } from 'rxjs/BehaviorSubject';
        import { Subscription } from 'rxjs/Subscription';

        import 'rxjs/add/operator/takeUntil';
        ```
        גרסה חדשה:
        ```typescript
        import { Subject ,  Observable ,  BehaviorSubject, Subscription, of } from 'rxjs';

        import { takeUntil, shareReplay, catchError } from "rxjs/operators";
        ```

        #### שינויים בקוד (השורות בהתאמה)

        גרסה ישנה:
        ```typescript
        return Observable.of(this.propertyTypesList);

        this.movingSubject.asObservable().takeUntil(this.unsubscribe$);

        entity$.catch((error: Error) => {})

        return this.http.get(actionUrl).map(resp => resp.json());

        this.getObservableListItems(ModulesEnum.Contacts,LookupTableName.ContactStatus).shareReplay();
        ```
        גרסה חדשה:
        ```typescript
        return of(this.propertyTypesList);

        this.movingSubject.asObservable().pipe(takeUntil(this.unsubscribe$));

        entity$.pipe(catchError((error: Error) => {}));

        this.http.get(actionUrl).pipe(map(resp => resp.json()));

        this.getObservableListItems(ModulesEnum.Contacts,LookupTableName.ContactStatus).pipe(shareReplay());

        ```
2. הורדת חבילת התשתיות החדשה
    ```
    npm i @moj/moj-ng@latest
    ```
    **יש לשים לב שמעכשיו התשתיות לא מעדכנות לבד את התלויות.
תעקבו אחרי ההתראות שמופיעות בצהוב עם ההתקנה, ותתקינו את התלויות בעצמכם.**

    החבילות שהתעדכנו בעקבות המעבר לאנגולר 6:
    
    * Primeng
	* @ngx-translate/core
    *	כל חבילות האנגולר
	* Rxjs
	* Zone
3. הורדת החבילה primeicons
    ```
    npm i primeicons
    ```
4. הוספת שורה עבור ה css של primeicons במקטע styles בקובץ angular.json
    ```json
    "node_modules/primeicons/primeicons.css"
    ```
5. מהגרסה החדשה, אנחנו לא משתמשים יותר ב font-awesome כחבילת npm, אלא רק מתוך התשתית המשרדית, ולכן צריך להסיר את החבילה.
(מכיוון שהחבילה לא מקבלת את העדכונים החדשים, אנחנו מעדכנים גרסאות לפי צורך)

    ולכן, צריך להוריד את החבילה מה package.json

    וכן, יש להוריד  מהקובץ angular.json את השורה הזו:
    ```
    "node_modules/font-awesome/css/font-awesome.min.css"
    ```
   ולוודא שנשארה רק השורה הזו:
    ```
   "node_modules/@moj/moj-ng/src/assets/font-awesome/css/fontawesome-all.css",
   ```
    
    **בהצלחה!**
