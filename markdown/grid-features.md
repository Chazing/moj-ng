# תכונות נוספות בטבלה:

## ייצוא לאקסל
ברמת הגריד יש לממש את האירוע gridReady ולכתוב פונקציה שתקבל את ה gridApi
```html
<ag-grid-angular class="ag-theme-balham"
                             [gridOptions]=gridOptions
                             [rowData]="rowData"
                             [columnDefs]="columns"
                             [gridAutoHeight]="true"
                             (gridReady)="onGridReady($event)">
            </ag-grid-angular>
```
```typescript
private gridApi;
onGridReady(params) {
        this.gridApi = params.api;
    }
```

בשביל לקבל כפתור ייצור לאקסל יש להציב בhtml  קומפוננטה:
```html
<moj-grid-xls-export (exportClick)="onBtExport()"></moj-grid-xls-export>
```
באירוע קליק של קומפוננטה זו יש לקרוא לapi  של הייצוא לאקסל כך:
```typescript
onBtExport(){
        this.gridApi.exportDataAsExcel();
    }
```
ניתן לשלוח פרמטרים רבים לייצוא לאקסל (שם הקובץ, שם הגליון, הסתרת עמודות כותרת עליונה, תחתית וכד') ניתן לראות הכל בתיעוד של ag-grid
https://www.ag-grid.com/javascript-grid-excel/

דוגמה לפרמטרים:
```typescript
onBtExport(){
        var params = {
            skipHeader: false,
            onlySelected: true,
            fileName: "exportGridExample",
            sheetName: "sheet1"
          };
        this.gridApi.exportDataAsExcel(params);
    }
```


## הדפסת גריד

כדי להדפיס את עמודות הגריד, יש להשתמש בכפתור הדפסה ולהעביר לו את הגריד כפרמטר

```html
<moj-grid-print-button [grid]="grid"></moj-grid-print-button>
<ag-grid-angular #grid class="ag-theme-balham" [gridOptions]=gridOptions               [rowData]="rowData1" [columnDefs]="columns1">
</ag-grid-angular>
```

### הסתרת עמודות מסויימות במצב הדפסה
אם יש עמודות שמוצגות בגריד, ולא אמורות להראות בהדפסה, יש לשלוח לעמודה את הפרמטר isHideOnPrint
```typescript
this.gridService.getStateColumn({isHideOnPrint:true})
```
### פילטר ראשי

לסינון לפי כל העמודות בטבלה ניתן להשתמש בקומפוננטה quickFilter

```html
  <moj-grid-panel [editOptions]="editOptions" [gridDescription]="'רשימת מוצרים'">
        <moj-line>
            <moj-quick-filter></moj-quick-filter>
        </moj-line>
        <moj-line>
        <ag-grid-angular class="ag-theme-balham" [gridOptions]=gridOptions [rowData]="rowData" [columnDefs]="columns">
        </ag-grid-angular>
    </moj-line>
</moj-grid-panel>
```

ניתן לשלוח filterText.


## פילטור עמודות
בברירת מחדל לא מופיע כפתור התפריט עם הפילטר על כותרות העמודות.

כדי שיופיע כפתור הפילטר בכותרת העמודה, יש להשתמש במאפיין supressMenu=false של  ה colDef. 

יש אפשרות לשנות את התפריט הנפתח, ניתן להראות את אפשרויות ה columnMenu באתר של ag-grid

### גרירת מסמך לטבלת מסמכים

תכונה זו ניתנת למימוש בטבלה המכילה רשימת מסמכים ויש לה אופציה להוספת מסמך ע"י הפקד moj-file-upload

ע"י המימוש תתאפשר גרירת מסמך לטבלה, הגרירה תגרום לפתיחת מסך ההוספה כאשר המסמך מוצב בתוך פקד בחירת המסמכים.

-  mojDragAndDrop: יש לשים את ה  mojDragAndDrop directive  על האזור בתוך moj-grid-panel שאליו רוצים לגרור

- הקומפוננטה הנפתחת לעריכה צריכה לרשת מ: EditComponentWithFileBase (בקומפוננטה זו יש משתנה בשם files הניתן לשימוש, ראה סעיף הבא)

- במסך הנפתח יש לשים את הקומפוננטה moj-file-upload ולתת לה כ input את המשתנה files (ראה סעיף קודם)

דוגמה:

```html
<moj-grid-panel [editOptions]="editOptions" [gridDescription]="'קבצים'">
	<moj-line>
	<moj-grid-add-button></moj-grid-add-button>
	<div mojDragAndDrop>
		<ag-grid-angular
			class="ag-theme-balham"
			[gridOptions]="gridOptions"
			[rowData]="rowData"
			[columnDefs]="columns"
			[gridAutoHeight]="true">
		</ag-grid-angular>
	</div>
</moj-line>
</moj-grid-panel>
```

```typescript
ngOnInit() {
        this.rowData=[{fileDate:new Date(), fileType:'doc', fileName:'שם מסמך', ticNum:'1'}];
        
        this.columns = [
            this.gridService.getMojDateColumn("fileDate"),
            this.gridService.getMojColumn("fileType"),
            this.gridService.getMojColumn("fileName")
        ];

        this.gridOptions = this.gridService.getMojGridOptions();
        this.editOptions.editComponentType = NewFileComponent;
    }
```

המסך הנפתח:

```html
<div *ngIf="editedItem">
    <form #form="ngForm">
        <moj-line>
            <moj-datepicker [(ngModel)]="editedItem.fileDate" name="fileDate" labelTextKey="'תאריך'" labelWidthColumns="3"
                         controlWidthColumns="7">
            </moj-datepicker>
        </moj-line>
        <moj-line>
            <moj-textbox [(ngModel)]="editedItem.fileType" name="fileType" [required]="true" labelTextKey="'סוג קובץ'" labelWidthColumns="3"
                         controlWidthColumns="7">
            </moj-textbox>
        </moj-line>
        <moj-line>
            <moj-file-upload [id]="'fldold1'" [enabledFileTypes]="'pdf|png'" [(files)]="files" [sendFilesOnUpload]="false" [multiple]="false"></moj-file-upload>
        </moj-line>

        <moj-buttons-line>
            <moj-grid-cancel-button></moj-grid-cancel-button>
            <moj-grid-save-button [disabled]="false" (saveClick)="saveFile()"></moj-grid-save-button>
        </moj-buttons-line>
    </form>
</div>
```

```typescript
@Component({
    selector: "new-file",
    templateUrl: "new-file.component.html"
})
export class NewFileComponent extends EditComponentWithFileBase implements OnInit{

    constructor(mojUploadService: MojFileUploadService){
        super(mojUploadService);
    }
    ngOnInit(){
        if(!this.editedItem){
            this.editedItem = {};
        }
    }
}
```


## שמירת מצב טבלה לצורך routing

כאשר מבצעים ניווט באתר יש צורך לשמור את מצב המסך.
כאשר המשתמש עזב את המסך באמצע עריכת טבלה נרצה להחזירו לעריכה.

לצורך זה קימות 2 פונקציות ב-GridService:
1. getGridState - לשימוש בכניסה למסך
2. setGridState - לשימוש ביציאה מהמסך

דוגמא:

store:
```typescript
@Injectable()
export class StoreService{
    private gridExampleState:GridState;

    getGridExampleState(){
        return this.gridExampleState;
    }

    setGridExampleState(gridState:GridState){
        this.gridExampleState = gridState;
    }
}
```

component:
```typescript
export class GridExampleComponent{
    @ViewChild('grid') grid:MojGridPanelComponent;

    onGridReady(params) {
        this.gridService.getGridState(this.grid,this.store.getGridExampleState());
    }

    setGridState(){
        this.store.setGridExampleState(this.gridService.setGridState(this.grid));
    }
}
```

guard:
```typescript
@Injectable()
export class GridExampleGuard implements CanDeactivate<GridExampleComponent> {
  constructor() {}
  
  canDeactivate(component: GridExampleComponent) {
    component.setGridState();
    return true;
  }
}
```