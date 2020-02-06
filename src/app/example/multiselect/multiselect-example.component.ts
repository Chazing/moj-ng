import { Component, TemplateRef } from "@angular/core";
import { PropertyItem } from "../example-component/model/property.model";
import { EventItem } from "../example-component/model/event.model";


@Component({
    selector: "moj-multiselect-example",
    templateUrl: "multiselect-example.component.html"
})
export class MultiSelectExampleComponent {
    multiselectValue = [1, 2, 3];
    instructions = `פקד MutiSelect יכול לעבוד עם מערכי strings או מערכי אוביקטים.
כאשר עובדים עם אוביקטים ישנה אפשרות לקבל ערך ID מספרי או את האוביקט כולו.
יש לתת ערך fieldName ובמקרה של אוביקט גם fieldID.
ברירת מחדל אם לא נותנים פרמטרים אלו היא key,value`;

    properties: PropertyItem[] = [
        { name: "items", type: "array", default: "null", description: "מערך של נתונים להצגה" },
        { name: "fieldName", type: "string", default: "value", description: "שדה להצגה ברשימה" },
        { name: "fieldID", type: "string", default: "key", description: "שדה לקבל ID model" },
        { name: "placeholder", type: "string", default: "Texts.Choose - בחר", description: "placeholder" },
        { name: "filter", type: "boolean", default: "false", description: "חיפוש" },
        { name: "maxSelectedLabels", type: "number", default: "4", description: "כאשר נבחרו מספר זה של פריטים, במקום להציג את הרשימה יוצג: נבחרו 4 פריטים" }
    ];

    events: EventItem[] = [
        { name: "focus", description: "" },
        { name: "blur", description: "" },
        { name: "onChange", description: "" },
        { name: "onPanelShow", description: "" },
        { name: "onPanelHide", description: "" }
    ];

    public listItems = [
        { ProductName: "דדדדדדדדדדדדדדדדדדדדדדדדדAlbania", ID: 1 },
        { ProductName: "Andorra", ID: 2 },
        { ProductName: "Armenia", ID: 3 },
        { ProductName: "Austria", ID: 4 },
        { ProductName: "Azerbaijan", ID: 5 },
        { ProductName: "bb", ID: 6 },
        { ProductName: "bba", ID: 7 },
        { ProductName: "bbc", ID: 8 },
        { ProductName: "c", ID: 9 },
        { ProductName: "ca", ID: 10 }
    ];
}