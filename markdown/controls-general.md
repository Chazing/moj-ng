# הנחיות כלליות לשימוש ברכיבים
## קומפוננטות המקבלות ערכים מ enums
כדי שיהיה אפשר לשלוח לקומפוננטות ערכים מ enums, ללא צורך להגדיר אותם בכל קומפוננטה מחדש,

יש אפשרות לשים מעל הקומפוננטה את ה decorator @MojEnumsDeclaration שיבצע את ההגדרה.


כמו בדוגמה:
```typescript
@Component({
  selector: "moj-form-example",
  templateUrl: "./form-example.component.html",
  styleUrls: ["./form-example.component.css"]
})
@MojEnumsDeclaration
export class FormExampleComponent {
  ngOnInit(): void {
    //this.loadingService.show(this.pnlGeneral);
  }
}
```
ואז ניתן ב html להעביר פרמטרים מה enums
```html
<moj-dynamic-label [textKey]="'Texts.mainItem1'" [fontSize]="FontSize.font16" [color]="MojColor.brightBlue" [fontWeight]="FontWeight.bold"></moj-dynamic-label>
```