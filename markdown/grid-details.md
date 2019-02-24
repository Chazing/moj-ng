### עריכת טבלה:

עריכת טבלה מתאפשרת ע"י חלון נפתח או ע"י panel מתחלף (עריכה inline תפורט בהמשך)

לעריכת טבלה יש לעטוף את הטבלה ב- moj-grid-panel ולשלוח לו editOptions ו- editService.

כמו כן יש להגדיר את כפתור ההוספה ועמודות לעריכה ומחיקה לפי הצורך.

דוגמא:
```html
<moj-grid-panel [editOptions]="gridEditOptions"
				[editService]="editService">
             <moj-grid-add-button></moj-grid-add-button>
             <ag-grid-angular style=" height: 230px;" class="ag-theme-balham" mojGridOptions
                         [rowData]="rowData" [columnDefs]="columns">
             </ag-grid-angular>
</moj-grid-panel>

```
```typescript
rowData;

columns: ColDef[];

editOptions: EditOptions = new EditOptions();

editService: EditServiceBase;

constructor(private gridService: GridService, private gridExampleService: GridExampleService) { }

ngOnInit() {

this.rowData = products;

this.columns = [

this.gridService.getMojColumn("ID"),

this.gridService.getMojColumn("ProductName"),

this.gridService.getEditColumn(),

this.gridService.getDeleteColumn(),

];

this.gridEditOptions.editComponentType = EditPopupExampleComponent;

this.editService = this.gridExampleService;

}

```
כפתור הוספה:

ניתן לשלוח פונקציה beforeAdd מאפשרת פתיחת עריכה בתנאים מסוימים.
במקרה שהפונקציה מחזירה false ההוספה לא תתבצע.

דוגמא:

```html
<moj-grid-add-button [beforeAdd]="beforeAdd"></moj-grid-add-button>
```

```typescript
beforeAdd(){
        if(...){
            return false;
        }
    }
```

*פרוט editOptions:*

1.  editComponentType – משתנה חובה, יש לשלוח את ה type של הקומפוננטה שתוצב בחלון
    הנפתח בזמן עריכה

2.  saveUrl – url לפונקצית web api שתקרא בזמן שמירת רשומה

3.  deleteUrl – url לפונקצית web api שתקרא בזמן מחיקת שורה

4.  hideTableOnEdit – האם להסתיר את הטבלה בזמן עריכה. ברירת מחדל false.

5.  editInDialog – האם לערוך את הטבלה בחלון קופץ. ברירת מחדך true.

6.  editDialogTitle – כותרת לחלון קופץ בעריכת טבלה

7.  editDialogWidth – רוחב החלון הקופץ

דוגמא למימוש EditComponentBase
```typescript
export class EditDialogExampleComponent extends EditComponentBase {
}
```
```html
<div *ngIf="editedItem">
    <form #form="ngForm">
        <moj-line>
            <moj-textbox [(ngModel)]="editedItem.ID" name="productID" [required]="true" labelWidthColumns="1"
                         controlWidthColumns="2">
            </moj-textbox>

            <moj-textbox [(ngModel)]="editedItem.ProductName" name="productName" [required]="true" labelWidthColumns="1"
                         controlWidthColumns="2">
            </moj-textbox>

            <moj-textbox [(ngModel)]="editedItem.UnitPrice" name="unitPrice" [required]="true" labelWidthColumns="1"
                         controlWidthColumns="2">
            </moj-textbox>
        </moj-line>
        <moj-buttons-line>
            <moj-grid-cancel-button></moj-grid-cancel-button>
            <moj-grid-save-button></moj-grid-save-button>
        </moj-buttons-line>
    </form>
</div>
```

*פרוט editService:*

editService הוא service שמכיל את כל פונקציות העריכה של הטבלה.

במקרה שאין גישה לשרת בזמן עריכה ואין הגדרות מיוחדות, אין צורך לשלוח service.

בד"כ יש צורך להגדיר הגדרות שונות ולכך יש ליצור service היורש מ- EditServiceBase,
בו ניתנות למימוש הפונקציות הבאות:

1.  initItem – אתחול האוביקט בהוספת שורה חדשה.

2.  beforeSave – פונקציה שתקרא לפני שמירת רשומה, במקרה שיוחזר false תתבטל
    השמירה.

3.  save – פונקציה שמממשת שמירה, מקבלת את האוביקט לשמירה והאם הוא חדש או לא
    וצריכה להחזיר את האוביקט המעודכן.

4.  afterSave – פונקציה שנקראת לאחר ששמירה התבצעה בהצלחה, מקבלת את האוביקט
    המעודכן.

5.  Delete – פונקצית מחיקה, מקבלת את האוביקט ומחזירה true/false האם המחיקה
    הצליחה.

6.  afterDelete – פונקציה הנקראת לאחר שמחיקה בוצעה בהצלחה, מקבלת את האוביקט
    שנמחק.

דוגמא למימוש service כזה:

```typescript
\@Injectable()

export class GridExampleService extends EditServiceBase {

constructor(protected http: HttpClient, private messagesService:
MojMessagesService) {

super(http);

}

initItem() {

let product = new Product();

product.ProductName = 'Chai';

return product;

}

save(product: Product) {

return this.http.post('http://localhost:62060/api/Grid/Post', product);

}

delete(product: Product) {

return this.http.delete('http://localhost:62060/api/Grid/Delete/' + product.ID);

}

afterDelete(product: Product) {

alert("after delete");

}

beforeSave(product: Product): boolean {

if (product.ID == 1) {

this.messagesService.confirm("מוצר זה אינו יכול להישמר",
"אישור").subscribe((result) =\> {

})

return false;

}

}

afterSave(product: Product): void {

this.messagesService.confirm("נשמר", "אישור").subscribe((result) =\> {

})

}

}
```

**עריכה inline:**

עריכה inline מאופשרת לפי עמודות (ag-grid: column.editable = true)

לשימוש בפקדי moj בתוך הטבלה יש להגדיר את העמודות המתאימות.

הפקדים המאופשרים בתוך טבלה הם:

moj-textbox, moj-textarea, moj-dropdownlist, moj-multiselect, moj-datepicker, moj-autocomplete

דוגמא:

```typescript
@Component({
    selector: "grid-edit-inline-example",
    templateUrl: "grid-edit-inline-example.component.html"
})
export class GridEditInlineExampleComponent implements OnInit {
    rowData;
    columns: ColDef[];
    gridOptions: GridOptions;

    categories: any[] = [
        { "CategoryID": 1, "CategoryName": "Beverages", "Description": "Soft drinks, coffees, teas, beers, and ales" },
        { "CategoryID": 2, "CategoryName": "Condiments", "Description": "Sweet and savory sauces, relishes, spreads, and seasonings" }
      ];
    
    constructor(private gridService: GridService) {
    }

    ngOnInit() {
        this.rowData = products;
        this.columns = [
            this.gridService.getMojTextBoxColumn("ID", {validators:[Validators.required,Validators.maxLength(3)], maxlength: 5 }),
            this.gridService.getMojDropdownColumn("Category", {items :this.categories, fieldName:'CategoryName'}),
            this.gridService.getMojDatePickerColumn("FirstOrderedOn", {validators:[Validators.required]}, {headerName:'תאריך הזמנה'}),
            this.gridService.getMojMultiSelectColumn("Categories", {items:this.categories, fieldName:'CategoryName'}),
            this.gridService.getMojAutoCompleteColumn("Category", {items:this.categories, fieldName:'CategoryName', filterType:FilterType.includes}),
        ];
        
        this.gridOptions = this.gridService.getMojGridOptions();
    }
}
```

לפונקציות אלו ניתן לשלוח field, coldef כמו בעמודות רגילות,

וכן ניתן לשלוח אוביקט מסוג EditColumnOptions המכיל הגדרות נוספות הקשורות לעריכת השדה:

לדוגמא - validators:

```typescript
this.gridService.getMojTextBoxColumn("ID", {validators:[Validators.required,Validators.maxLength(3)]});
```

משתנים נוספים (מקביל ל- Input@ שבתוך הפקדים)
לדוגמא:

```typescript
this.gridService.getMojAutoCompleteColumn("Category", {items:this.categories, fieldName:'CategoryName', filterType:FilterType.includes})
```

לתשומת לב:
בפקדים dropdown, autocomplete, multiselect הערך הנבחר הוא אוביקט/אוביקטים ולכן יש לשלוח items ו- fieldName ללא fieldID.

ניתן גם לשלוח משתנים מסוג @Output לדוגמא:

```typescript
this.gridService.getMojMultiSelectColumn("Categories", {items:this.categories, fieldName:'CategoryName', onChange:this.multiselectChange})

multiselectChange = (event, element)=>{
    element.items = element.items.slice(1,5);
}
```

כמו כן ניתן להשתמש בכל האפשרויות של ag-grid. ניתן לשלוח לפרמטר coldef

לדוגמא ארוע בשינוי ערך השדה onCellValueChanged:

```typescript
this.gridService.getMojMultiSelectColumn("Categories", {items:this.categories, fieldName:'CategoryName'},{colDef:{onCellValueChanged:this.clickLink}});
```

לשימוש בתוך הפונקציה במשתנים של הקומפוננטה - ניתן להגדיר את הפונקציה בצורה כזו

```typescript
categories: any[] = [
        { "CategoryID": 1, "CategoryName": "Beverages", "Description": "Soft drinks, coffees, teas, beers, and ales" },
        { "CategoryID": 2, "CategoryName": "Condiments", "Description": "Sweet and savory sauces, relishes, spreads, and seasonings" }
      ];

ngOnInit() {
    this.rowData = products;
    this.columns = [
        this.gridService.getMojMultiSelectColumn("Categories", {items:this.categories, fieldName:'CategoryName'},{colDef{onCellValueChanged:this.clickLink}})
    ];
}

clickLink=()=>{
    console.log(this.categories);
}
```

**מחיקה**

ניתן להשתמש כרגיל בעמודה getDeleteColumn

**הוספה**

יש להגדיר סוג עריכה inline.

```typescript
this.editOptions.editType = EditType.Inline;
```

כאשר רוצים ללת אוביקט ברירת מחדל או ערכי ברירת מחדל לשורה החדשה יש לממש פונקציה initInlineItem

 דוגמה:

```typescript
this.editOptions.initInlineItem = function(){ 
    return new Product();
}
```