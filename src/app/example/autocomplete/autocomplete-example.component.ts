import { Component } from "@angular/core";
import { MojMessagesService } from "../../moj-ng/messages/moj-messages.service";
import { PropertyItem } from "../example-component/model/property.model";
import { EventItem } from "../example-component/model/event.model";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "moj-autocomplete-example",
    templateUrl: "autocomplete-example.component.html"
})
export class AutocompleteExampleComponent {
    autocompleteValue;
    autocompleteValueDropDown;
    autocompleteValueMultiple;
    ddValue = {key:0,value:""};
    public listItems = [
        { value: "ישdddddddddddddddddddddראל", key: 1 },
        { value: "אלבניה", key: 2 },
        { value: "אמריקה", key: 3 },
        { value: "אוסטריה", key: 4 },
        { value: "רוסיה", key: 5 },
        { value: "בריטניה", key: 6 },
        { value: "גרמניה", key: 7 },
        { value: "דנמרק", key: 8 },
        { value: "טורקיה", key: 9 },
        { value: "ארצות הברית", key: 10 },
        { value: "מצרים", key: 11 },
        { value: "לוב", key: 12 },
        { value: "אוזבקיסטן", key: 13 },
        { value: "הולנד", key: 14 },
        { value: "בלגיה", key: 15 }
    ];

    properties: PropertyItem[] = [
        { name: "items", type: "array", default: "null", description: "מערך של נתונים להצגה" },
        { name: "itemsUrl", type: "string", default: "null", description: "נתיב לשרת להבאת נתונים בזמן חיפוש במקום להביא במשתנה items" },
        { name: "fieldName", type: "string", default: "value", description: "שדה לחיפוש והצגה ברשימה" },
        { name: "fieldKey", type: "string", default: "key", description: "שדה לקבל Key model" },
        { name: "placeholder", type: "string", default: "Texts.Choose - בחר", description: "placeholder" },
        { name: "minLength", type: "number", default: "1", description: "מינימום תווים להקלדה לחיפוש" },
        { name: "multiple", type: "boolean", default: "false", description: "בחירה מרובה" },
        { name: "dropdown", type: "boolean", default: "false", description: "רשימה נפתחת" },
        { name: "filterType", type: "FilterType", default: "startsWith", description: "סוג הפילטר (startWith/includes)" },
        { name: "forceSelection", type: "boolean", default: "true", description: "ביציאה מהפקד אם הוקלד ערך ולא נבחר, במקרה והערך קיים ברשימה הערך יבחר, אם אינו קיים השדה ינוקה" },
        { name: "dropdown", type: "boolean", default: "false", description: "רשימה נפתחת" },
        { name: "dropdownMode", type: "DropdownMode", default: "blank", description: "blank - בלחיצה על החץ יוצגו כל התוצאות, current - עם סינון לפי הטקסט" },
    ];

    events: EventItem[] = [
        { name: "focus", description: "" },
        { name: "blur", description: "" },
        { name: "onKeyUp", description: "" },
        { name: "onSelect", description: "" }
    ];

}