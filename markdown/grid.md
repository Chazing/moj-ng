# איך עובדים עם Grid?

Ag-grid היא טבלה שמקורה בjavascript , וניתנת לשימוש בשפות שונות

תוכלו להכנס לקישור ולראות כי ישנן אין סוף אפשרויות שתוכלו לממש במקרה הצורך.

<https://www.ag-grid.com/javascript-grid-features/>

להתחלת עבודה יש לייבא את _MojGridModule_

בקובץ angular-cli.json ב - "styles" יש להוסיף את הקבצים הבאים:

```json
"css/moj-ag-grid.scss"
```

במידה ורוצים את הגריד בעיצוב לאתר חיצוני יש לטעון את הקובץ

```json
"css/moj-website.css"
```

בנוסף לשאר קבצי התשתית שנטענים (לשים את הקובץ הזה בסוף הרשימה)

### החלת הגדרות ברירת מחדל על הגריד

   יש להגדיר בקומפוננטה אובייקט מסוג GridOptions, למלא אותו ע"י קריאה לפונקציה gridService.getMojGridOptions(), ולהניח את ההגדרות על הגריד.

   ניתן גם לדרוס הגדרות אם צריך.

   ניתן לראות את אפשרויות הקונפיגורציה של ag-grid בדף הזה:
    https://www.ag-grid.com/javascript-grid-properties/

```typescript
export class GridExampleComponent implements OnInit {
  rowData;
  columns: ColDef[];
  gridOptions: GridOptions;

  constructor(
    private gridExampleService: GridExampleService,
    private http: HttpClient,
    private gridService: GridService
  ) {}

  ngOnInit() {
    this.rowData = products;

    this.columns = [this.gridService.getMojColumn('ID')];
    this.gridOptions = this.gridService.getMojGridOptions();
    this.gridOptions.paginationPageSize = 5;
  }
}
```

    ```html
    <ag-grid-angular style=" height: 200px;" class="ag-theme-balham"
                                [gridOptions]=gridOptions
                                [rowData]="rowData"
                                [columnDefs]="columns">
    ```

### הגדרת עמודות בגריד

הגדרת העמודות על הגריד נעשית ע"י הצבת columnDefs על הגריד.

את האובייקט שמכיל את רשימת העמודות, מאתחלים בקומפוננטה.

להגדרת עמודות יש להשתמש ב GridService - service המספק עמודות מסוגים שונים,
לדוגמא: this.gridService.getMojColumn("ProductName")

דוגמא לשימוש רגיל בטבלה:

```html
<ag-grid-angular mojGridOptions [rowData]="rowData" [columnDefs]="columns"> </ag-grid-angular>
```

```typescript

constructor(private gridService: GridService) { }

ngOnInit() {

this.rowData = products;

this.columns = [

this.gridService.getMojColumn("ID"),

this.gridService.getMojColumn("ProductName"),

this.gridService.getMojColumn("UnitPrice", {colDef:{headerName: "price" }}),

this.gridService.getLinkColumn("ID", {clickLink:this.clickLink}),
];

}
```

### העמודות המוכנות לשימוש (נקראות מ- GridService):

כל העמודות מקבלות את שם השדה במודל של הגריד שאליו הן צמודות.

בברירת המחדל, התשתית תחפש בקבי התרגום, מפתח בשם העמודה, ותשים אותו בתור כותרת.

אם רוצים כותרת אחרת לעמודה יש לשלוח אובייקט colDef ולשים שם פרמטר בשדה headerName.

### רשימת העמודות

**getMojColumn** - עמודה רגילה

**getEditColumn**

- headerName – כותרת

- toolTiptextKey –טקסט ל tooltip

- cssClass – שינוי העיצוב כגון icon שונה

- colDef – כמו בכל העמודות

**getDeleteColumn**

- headerName – כותרת

- toolTiptextKey –טקסט ל tooltip

- cssClass – שינוי העיצוב כגון icon שונה

- confirmDeleteText – טקסט להודעה האם אתה רוצה למחוק

- colDef – כמו בכל העמודות

**getActionsPopupColumn**

- headerName – כותרת

- toolTiptextKey –טקסט ל tooltip

- cssClass – שינוי העיצוב כגון icon שונה

- items – מערך הפעולות שרוצים להציג בלחיצה על כפתור זה
  יש לשלוח מערך אוביקטים מסוג ActionPopUpItem לדוגמה:

```typescript
this.gridService.getActionsPopupColumn('', [
  { textKey: 'צפייה בבקשה', href: '/website-example/autocomplete', cssClass: 'request' },
  { textKey: 'צפייה בצו', href: '/website-example/recaptcha', cssClass: 'zzz' },
  { textKey: 'הגשת התנגדות', href: '/website-example/form', cssClass: 'refuse' }
]);
```

- colDef – כמו בכל העמודות

**getLinkColumn**

- clickLink – פונקציה שתקרא בזמן לחיצה מקבלת אוביקט עם פרטי הרשומה**.**

יש לשלוח פונקציה, לדוג':

```typescript
clickLink(product: Product) {

alert("Go to task " + product.ID);

}

this.gridService.getLinkColumn("ID", {clickLink:this.clickLink});
```

(במקרה שבפונקציה יש שימוש במשתנים של this יש לשלוח:

```typescript
this.clickLink.bind(this));
```

**getMojIconColumn**

- icon – משתנה מסוג GridIconParams או פונקציה המחזירה אוביקט מסוג זה

  (למקרים שרוצים איקון דינאמי או שדות שונים לפי תנאים יש להשתמש בפונקציה )

  האוביקט מכיל את המאפינים הבאים:

  css class - iconClass אפשר לשלוח יותר מקלאס אחד אם רוצים צבע וכדומה

  field - לתצוגת טקסט של שדה מהטבלה

  text - לתצוגת טקסט סטטי

  clickLink - פונקציה שתקרא בלחיצה על האייקון

  tooltip

- iconWithText - למקרה שרוצים להוסיף טקסט לעמודה (טקסט סטטי או field) יש לשלוח true

  דוגמאות:

  ```typescript
  this.gridService.getMojIconColumn({icon: {{iconClass:"far fa-smile",tooltip:"please smile!"}}),
  this.gridService.getMojIconColumn({icon: {field: "ProductName", iconClass:"far fa-arrow-alt-circle-down orange1", clickLink: this.clickLink},iconWithText: true}),

  clickLink(product: Product) {
      alert("Go to task " + product.ID);
  }
  ```

  דוגמא לפונקציה:

  ```typescript
  this.gridService.getMojIconColumn({icon: this.getIcon.bind(this),iconWithText: true});

  getIcon(params){
      if(params.data.ProductName == "Chef Anton's Gumbo Mix"){
          return {
              iconClass: "fas fa-trash-alt",
              tooltip: "one",
              text:"delete"
          }
      }
      else{
          return {
              iconClass:"fas fa-pencil-alt",
              field:"ProductName",
              clickLink:this.clickLink
          }
      }
  }
  ```

**getMojDocumentFormatColumn**

- field

- clickLink

- tooltip

- fileTypes - למקרה שיש צורך לפורמט שאינו נמצא ברשימה או לדריסת איקון של פורמט מסוים ניתן לשלוח נתונים למערך זה

דוגמאות:

```typescript
this.gridService.getMojDocumentFormatColumn('Format');
```

```typescript
fileTypes: FileType[] = [
    { extension: "pdf", iconClass: 'fas fa-trash-alt' },
    { extension: "folder", iconClass: 'fas fa-folder redd' }];

this.gridService.getMojDocumentFormatColumn("Format",  {clickLink:this.clickLink, tooltip:"Texts.aa", fileTypes:this.fileTypes});

clickLink(product: Product) {
    alert("Go to task " + product.ID);
}
```

**getDuplicateColumn**

כפתור שכפול לרשומה בטבלה

- setDuplicatedData - למקרה שיש צורך בעת השכפול לשנות את האוביקט העומד להשתכפל כגון איפוס id יש לשלוח פונקציה המקבלת את הרשומה החדשה ומחזירה אותה אחרי השינוי

```typescript
this.gridService.getDuplicateColumn({setDuplicatedData:this.setDuplicate})

setDuplicate(data){
    data.ProductName = 'hi';
    return data;
}

```

**getMojCheckBoxColumn**

עמודה לבחירה מרובה.

יש לשים לב, לשלוח לפונקציה getMojGridOptions פרמטר כדי לאפשר בחירה מרובה.

```typescript
this.gridService.getMojCheckBoxColumn('Discontinued'), (this.gridOptions = this.gridService.getMojGridOptions(true));
```

כדי לקחת את השורות הבחורות אפשר להשתמש באחת משתי האפשרויות הבאות:

```typescript
gridApi.getSelectedRows();
```
או להשתמש ב data שמחובר לעמודה שמתעדכן בבחירה.

**שימוש במידע המעודכן שבטבלה**

כיוון שהמשתנה rowData הוא input הוא אינו מתעדכן בהתאם לעדכונים הנעשים בטבלה.

לקבלת המידע המעודכן ניתן לקרוא לפונקציה gridService.getRowData.

```html
<ag-grid-angular class="ag-theme-balham" [gridOptions]=gridOptions [(rowData)]="rowData" [columnDefs]="columns" (gridReady)="onGridReady($event)>
</ag-grid-angular>
```

```typescript
onGridReady(params) {
    this.gridApi = params.api;
}

onSubmit() {
    console.log(this.gridService.getRowData(this.gridApi));
}
```

**Custom component**

כשיש צורך בהכנסת קומפוננטה אחרת לתוך עמודה, הוראות בקישור הבא:

<https://medium.com/ag-grid/ag-grid-v7-aot-angular-2-components-7130fdb8f480>

בקצרה: יש לשלוח ColDef שמכיל cellRendererFramework עם type של הקומפוננטה,

הקומפוננטה צריכה לרשת מ- AgRendererComponent ולממש את הפונקציות agInit, refresh

אם יש צורך בinput / output יש לשלוח לתוך האוביקט cellRendererParams את המשתנים
או את הפונקציות, והגישה אליהם בparams בפונקציה agInit. (דוגמאות ניתן לראות ב moj
columns)

כיון שהקומפוננטה נוצרת דינאמית יש להוסיפה ב module ל- entryComponents.

**Master details**

למימוש masterDetails הוראות בקישור הבא:

https://www.ag-grid.com/javascript-grid-master-detail/

לקריאת מידע מהטבלה כגון gridInSubmit שבסוף העריכה רוצים לקבל את הרשומות
המעודכנות:

על כל רשומה - כל אוביקט ב rowData שנעשה בו שינוי, יתוסף לו property: state עם סוג השינוי add/edited/deleted
