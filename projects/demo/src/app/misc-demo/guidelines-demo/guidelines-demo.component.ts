import { Component } from "@angular/core";
import { Guideline } from '@moj/moj-ng';

@Component({
    selector: "moj-guidelines-demo",
    templateUrl: "guidelines-demo.component.html",
    styleUrls: ["guidelines-demo.component.scss"]
})
export class GuidelinesDemoComponent {
    guidelines:Guideline[] = [
        {guidelineTitle:'תדריכים להגשת בקשות', guidelineMessage:'איתור גוש וחלקה לפי כתובת, ניתן לבצע באתר האינטרנט של המרכז'},
        {guidelineTitle:'הנחיה ראשונה', guidelineMessage:'לחיע ךלחיךלחע  גכע גכע גכעכע צעצנצ וןטעעיהכ ליעלחיעחלי לחיעלחיעיח ךיעע לחיךל '},
        {guidelineTitle:'הנחיה שלישית', guidelineMessage:'<p>דגכדגכ <a href="https://forums.asp.net/t/2096814.aspx?Where+do+I+find+system+web+Http" target="_blank">דגכשזדגכ </a></p>'},
        {guidelineTitle:'הנחיה שניה', guidelineMessage:'<p><span style="background-color: rgb(249, 249, 249); color: rgb(50, 50, 50);">בתדריכים מפורטים הנחיות ודגשים בנוגע להגשת הבקשות&nbsp;</span><a href="666666666666" target="_blank">666666666666</a></p><p>דגכדכג525gk</p><p>דגכדכג657657657</p><p>דגכדכ</p>'},
    ]
}