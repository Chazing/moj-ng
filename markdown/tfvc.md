# עבודה עם tfs בתוך visual studio code

ניתן לראות את התיעוד המקורי של התוסף פה:

https://github.com/Microsoft/azure-repos-vscode/blob/master/TFVC_README.md

וכן, זה סרטון שמראה בכמה דקות את האפשרויות בתוסף

https://www.youtube.com/watch?v=6IzJ2UPGmoQ

1. יש להוריד את התוסף Azure Repos
2. צריך להכנס ל visual studio code file=> preferences => settings ולהוסיף את ההגדרה הבאה:
    ```json
    "tfvc.location": "D:\\Program Files (x86)\\Visual Studio 2017\\Common7\\IDE\\CommonExtensions\\Microsoft\\TeamFoundation\\Team Explorer\\TF.exe",
    "tfvc.restrictWorkspace": true 
    ```
    זו הגדרה שאומרת, איפה במחשב יושבת ההתקנה של פקודות ה tfs ולכן המיקום יישתנה בין מחשב למחשב.
3. יש לפתוח את תיקיית הפרוייקט, לאחר שהוכנסה ל tfs ב vs code
4. כעת אפשר ללחוץ על ctrl+ shift + p וללחוץ על הפקודה Team:Signin לתת שם משתמש וסיסמה של ה windows

      ![teamsignin](../../screenshots/teamsignin.png)

5. אם הכל התחבר כראוי, אפשר לראות בשורה הכחולה בצד שמאל למטה את שם הפרוייקט ב tfs, ולנהל את הקבצים בחלון השינויים

    ![tfvcWin](../../screenshots/tfvcWin.JPG)

6. במקרה שעבדתם על הרבה פרוייקטים מול ה TFS , יכול להיות שתגרם איטיות בעבודה עם התוסף.

    ולכן עדיף לעבוד ב worspace נפרד.

##### השלבים להוספת workspace:
- יש להכנס ל team explorer דרך visual studio, ללחוץ על manage workspace, ושם להוסיף עוד worskspace.

    ![config](../../screenshots/workspace.jpg)
    
    כעת, כל העבודה מול אנגולר תעשה על ה workspace החדש.
- יש להעלות את התיקיה של פרוייקט האנגולר ל tfs דרך ה visual studio

    (יש לשים לב שאם  אין מיפוי לתיקיית האבא, לא יתאפשר להוסיף את הקבצים דרך ה workspace החדש, ונצטרך להוסיף אותם דרך ה workspace הכללי.)