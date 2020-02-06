# תיעוד store
הstore בנוי כrepository שמתפקד כ dictionary כאשר לכל פריט יש key וה value זהו בעצם אוביקט דינאמי לפי סוג המידע אותו רוצים לאחסן.

אפשר להתייחס ל store ברמה אפליקטיבית ולומר שיש לנו מאגר אחד לכל המערכת ושם נשמרים כל הנתונים.
ואפשר להתייחס לstore ברמה מודולארית ולכל מודול לנהל מאגר מידע נפרד משל עצמו.

*בשתי ההתייחסויות הללו אין הבדל אם מדובר ב lazy או לא, מתנהג אותו דבר.

כאשר נתייחס לStore כאפליקטיבי נצטרך **להשתמש** בשירותי ה store שהתשתית מספקת,
לעומת התייחסות ל store כמודולארי שבו נצטרך **לרשת** את ה store שהתשתית מספקת ולפתוח בעצם store נוסף.

נקודה חשובה נוספת:

בכל store שהוא, ניתן לנהל מידע ב keys שונים ולכן אין משמעות לאיתחול של store על key מסוים כיון שאין הכרח להיצמד לאותו key לאורך כל הדרך.
ההיצמדות תהיה לאותו סוג מידע אבל לא לאותו key.
לדוגמה store של לקוחות יכול להכיל מידע על מסך איתור לקוחות (רשימת לקוחות שאותרו, נתוני הפילטור, לקוח מסוים שסומן מתוך התוצאות וכד')
במקרה כזה ה key יהיה אחד והrepository יעבוד מול אותו מידע.

לעומתו store של פרטי לקוח יכול להכיל מידע אודות לקוח מסוים (כל המידע על היישות) שזה יישמר עבור כל לקוח ולקוח בנפרד עם key שונה מזהה.
במקרה כזה ה key יהיה שונה ודינאמי בין היישויות וה Repository יהיה דינאמי בגודלו.

## Store Service
מכיל אוסף של שירותים להתנהלות מול ה repository

```typescript
getState(key: string): Observable<IState<T>>
```
מחזיר את המידע כולו מן המאגר לפי ה key
```typescript
getStateSnapshot(key: string): IState<T>
```
מחזיר העתק מוחלט של המידע כולו לפי ה Key

```typescript
addState(key: string, state: IState<T>)
```
מוסיף מידע חדש למאגר
```typescript
setState(key: string, state: IState<T>)
```
מציב מידע שלם חדש במקום המידע הקיים

```typescript
updateState(key: string, state: Partial<IState<Partial<T>>>): IState<T>
```
מעדכן חלק מתוך מידע קיים

```typescript
removeState(key: string)
```
מסיר מידע מן המאגר

```typescript
resetState(key: string)
```
מאפס את המידע למצבו ההתחלתי

```typescript
initState(key: string, initialData: T)
```
מאתחל מידע חדש (מבצע בעצם הוספה של מידע חדש)



## התייחסות לstore כאפליקטיבי
**יתרונות:**

הכל מנוהל במקום אחד ואין כמה מופעים נפרדים של store

**חסרונות:**

בכל פעם שמתבצע עדכון נזרק העתק חדש של כל המאגר (גם לחלקים שאינם קשורים בהחלט)

**צורת שימוש**

יש ליצור מחלקה עבור הstore הרצוי מבחינה לוגית ולהזריק אליה את ה store הכללי

לנהל את כל המתודות הפנימיות של המחלקה הזו דרך שימוש ב store הכללי שהוזרק 
אליה

את המחלקה הזו ניתן להגדיר כ providedIn root במידה ורוצים שהיא תהיה מוכרת מחוץ לגבולות המודול העסקי שלה או כ provider למודול מסוים במידה והיא רלוונטית בגזרת המודול שלה בלבד.

המידע עצמו ינוהל ברמת ה store הכללי ואין לזה השפעה מהגדרת ה provider.
לדוגמה:

אם במערכת יש לנו מודול לקוחות ומודול משימות, אנו נרצה להפריד את הקוד מבחינה לוגית לשתי מחלקות store שונות בשביל שכל מחלקה תנהל את השליפות וההשמות הרלוונטיות להתנהגות העסקית שלה.

אנו נכתוב שתי מחלקות customers.store.ts ו tasks.store.ts

בהתייחסות אפליקטיבית אנו נכתוב את הקוד כך:
```typescript
export class TasksData {
    tasks: Task[];
    tasksLoaded: boolean;
    selectedTaskID?: number;
}

@Injectable()
export class TasksStore  {
    constructor(public store: Store<TasksData>) {
    }
}
```

*שימו לב שהזרקנו את השירות של ה store למחלקה ומכאן והלאה נשתמש בו היכן שנצטרך.

*ה store מקבל את ה type של המידע אותו הוא מאחסן.

ניתן לאתחל את ה store בערכים דיפולטיביים בצורה כזו:
```typescript
const INITIAL_TASKS_DATA: TasksData = {
    tasks: [],
    tasksLoaded: false,
    selectedTaskID: 0
}

@Injectable()
export class TasksStore  {
    key: string = "[Tasks]";

    constructor(public store: Store<TasksData>) {
        this.store.initState(this.key, INITIAL_TASKS_DATA);
    }
}
```

*אין חובה לקרוא ל initState מכיון שכמו שהוזכר לעיל אין משמעות לkey 
מסוים כיון שיכול להיות כמה Keys שונים.

דוגמה לשימוש ב store לפי לוגיקה עסקית:

שירות loadTasks או addTask
```typescript
loadTasks() {
  let viewState = this.store.getStateSnapshot(this.key).data;
  if (viewState.tasksLoaded) return;
  //go to server
  let tasksFromServer = [
      { id: 1, name: "task 1" },
      { id: 2, name: "task 2" },
      { id: 3, name: "task 3" }
  ];

  this.store.updateState(this.key, { data: { tasks: tasksFromServer, tasksLoaded: true } });
}
```
דוגמה לשירות הוספת משימה
```typescript
addTask(task: Task) {
  //קבלת המידע המעודכן
  let state = this.store.getStateSnapshot(this.key);
  //הוספת המשימה למערך
  let newTasks = [...state.data.tasks, task];
  //קריאה לעדכון הstore
  this.store.updateState(this.key, { data: { tasks: newTasks } });
}
```

## התייחסות ל store כמודולארי
**יתרונות:**

הפרדת המידע ועדכון שלו בחלקים נפרדים

**חסרונות:**

כמה מופעים ל store, צריך לוודא שלא יהיה בלבול וכפילות (לא אמור להיות אם כותבים נכון)

**צורת שימוש**

יש ליצור מחלקה עבור הstore הרצוי מבחינה לוגית ולרשת בו את Store<T> לפי ה type לש המידע עליו נעבוד.

נוכל גם בצורה הזו לאתחל את הstore בערך כלשהו (ושוב, קראו הערה לעיל בענין איתחול)
```typescript
export class CustomersData {
    customers: string[];
    customersLoaded: boolean;
    searchCriterions: string[];
}

const INITIAL_DATA: CustomersData = { 
    customers: [] ,
    customersLoaded: false,
    searchCriterions: []
};

@Injectable()
export class CustomersStore extends Store<CustomersData> {
    key: "[Customers]";

    constructor() {
        super();
        this.initState(this.key, INITIAL_DATA);
    }

    getCustomers(): Observable<string[]> {
        return this.getState(this.key).pipe(map(state => state.data.customers));
    }

}
```

שימו לב, כל צורת השימוש הכל זהה פרט לעובדה המציינת האם זהו מופע חדש של store או שימוש ב store  הקיים, ובדוגמה הזו כיון שאנו יורשים את ה store ויש לנו מופע חדש של ה service יווצר כאן store מקביל.
