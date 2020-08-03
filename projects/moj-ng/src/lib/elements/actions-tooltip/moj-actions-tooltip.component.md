# Actions-Tooltip – טולטיפ פעולות לביצוע
דוגמא לשימוש:
 
הוראות למימוש באתר: 

הקומפוננטה מקבלת רשימה מסוג  TooltipActionשמכילה את הפעולות לביצוע.

(אורך רשימת הפעולת הוא דינאמי והעיצוב יתאים את עצמו לכל גודל שיתקבל).

יש להציב בhtml  קומפוננטה:

   ```
   <moj-actions-tooltip [headerText]="actionsTitle$ | async" [actionList]="actionList" (onClickEvent)="doAction($event)">
    </moj-actions-tooltip>
    ```

הקומפוננטה מקבלת כinput  כותרת כללית לTooltip (:string headerText), ורשימת פעולות לביצוע (actionList :List<TooltipAction>).

בעת לחיצה יתבצע האירוע onClick הפונקציה שתקבל את האירוע תקבל ערך מסוג int   - הid של הפעולה שנבחרה. יש לקשר לאירוע פונקציה שתבדוק (אפשר באמצעות   (enumמהי הפעולה שנבחרה ותבצע את הפקודה המתאימה.

  ```
  doAction(actionId): void {
}
```


