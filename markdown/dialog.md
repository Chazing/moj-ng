## שימוש ב Dialog
כדי לפתוח חלון יש להשתמש ב [MojDialogService](../../injectables/MojDialogService.html)

דוגמה לפונקציה לפתיחת חלון:
```typescript
constructor(private dialogService: MojDialogService) { }

public openContentDialog() {
        this.dialogService.openDialog("Texts.dialogTitle", DialogExampleComponent, 400)
    }
```
הפונקציה מקבלת כותרת, את סוג הקומפוננטה שתיפתח בתוך החלון ועוד.

כדי לשלוח פרמטרים (inputs) לתוך הקומפוננטה:

- יש להגדיר בקומפוננטה שמתארחת בחלון Input בשם data
- יש לשלוח לפונקציה openDialog את האובייקט שרוצים להכניס ,בפרמטר componentInputData.

כמו בדוגמה:

```typescript
@Component({
  selector: 'dialog-example',
  templateUrl: './dialog-example.component.html'
})
export class DialogExampleComponent implements OnInit {
  firstName: string;
  lastName: string;
  password: string;
  @Input() data:any;
}

export class SomeComponent{
  public openContentDialog() {
        this.dialogService.openDialog("Texts.dialogTitle", DialogExampleComponent, 400, {a:"aa", b: "bb"})
  }
}
```

כדי לעשות פעולות נוספות בסגירת החלון, יש להאזין לפרמטר DialogResult של ה MojDialogService
כמו בדוגמה:

```typescript
public openContentDialog() {
        this.dialogService.openDialog("Texts.dialogTitle", DialogExampleComponent, 400, {a:"aa", b: "bb"})
        this.dialogService.dialogResult.subscribe((res)=>{
            alert(JSON.stringify(res));
        })
    }
```

כדי לסגור את החלון ולהחזיר ערכים מתוך הקומפוננטה שמתארחת בpopup:

יש להוסיף לקומפוננטה שבתוך החלון  EventEmitter Output בשם closeDialog מסוג DialogResult.
ולעשות לו emit עם הערכים המוחזרים.

הOutput אמור להחזיר האם ok\ cancel, ובמידת הצורך אובייקט data עם הערכים שצריך להחזיר מהקומפוננטה שבחלון.

כמו בדוגמה:
```html
<moj-cancel-button (click)="onCancel($event)"></moj-cancel-button>
```

```typescript

@Component({
  selector: 'dialog-example',
  templateUrl: './dialog-example.component.html'
})
export class DialogExampleComponent implements OnInit {
  firstName: string;
  lastName: string;
  password: string;
  @Input() data:any;
  @Output() closeDialog: EventEmitter<DialogResult> = new EventEmitter<DialogResult>();

  ngOnInit() {
  }

  onCancel(event) {
    this.closeDialog.emit({ dialogResultType: DialogResultEnum.Cancel, data: { selectedValue: 1, description: "פריט מספר 1" } });
  }
}

```
### שימוש ב footer
לחלון יש אזור תחתון המיועד לכפתורי הפעולה של המסך.
ברירת מחדל בפתיחת חלון, זה שהאזור מופיע. כדי לבטל את זה, יש לשלוח את הפרמטר isAddFooter=false.


כדי למקם את כפתורי הפעולה של המסך בתוך הfooter של החלון, יש לשים על שורת הכפתורים, את ההגדרה isInDialogFooter, כמו בדגמה-
```html
<moj-buttons-line [isInDialogFooter]=true>
        <moj-cancel-button (click)="onCancel($event)"></moj-cancel-button>
</moj-buttons-line>
``` 
