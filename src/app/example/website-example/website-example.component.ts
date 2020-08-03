import { Component, OnInit } from '@angular/core';
import { ButtonStyle, MojCategoryFilter, MojDynamicCheckboxComponent, Link, LinkOpenType, MojLanguage, MojDirection, MojMessagesService } from '@moj/moj-ng';

@Component({
    selector: 'moj-website-example',
    templateUrl: './website-example.component.html',
    styleUrls: ['./website-example.component.css']
})
export class WebsiteExampleComponent {
    menuActive;
    activeMenuId: string;
    buttonStyle: ButtonStyle = ButtonStyle.Primary;
    filterConfig={
        categories: [
            new MojCategoryFilter(
                "תיקים", null, [
                    new MojCategoryFilter("תיקי בית משפט מחוזי", null, [
                            new MojCategoryFilter(
                                "בימ\"ש", [
                                    [{ name: "fld1", type: MojDynamicCheckboxComponent, value: true, labelTextKey: "חיפה"}],
                                    [{ name: "fld2", type: MojDynamicCheckboxComponent, labelTextKey: "ירושלים" }]
                                ]
                            )
                    ]
                    )])]
                            
    };
    links: Link[] = [
        { textKey: "angular 2", href: "https://angular.io/guide/quickstart", linkId: "angular2", linkOpenType:LinkOpenType.Browser },
        { textKey: "primeng", href: "https://www.primefaces.org/primeng/#/", linkId: "primeng", linkOpenType:LinkOpenType.None }
    ]

    links2: Link[] = [
        { textKey: "יציאה מהשירות", href: "/serviceLogout", linkId: "angular2", linkOpenType:LinkOpenType.Browser },
        { textKey: "יציאה מהשירות", href: "/serviceLogout", linkId: "angular2", linkOpenType:LinkOpenType.Browser },
        { textKey: "יציאה מהשירות", href: "/serviceLogout", linkId: "angular2", linkOpenType:LinkOpenType.Browser }
    ]

    languages: MojLanguage[] = [{ code: "he", value: "עברית", dir: MojDirection.rtl }, { code: "en", value: "English", dir: MojDirection.ltr }];

    onClick() {
        this.messageService.showMessage("שלום וברכה", "כותרת");
    }

    constructor(private messageService: MojMessagesService) {
    }

    onLinkClick(link: Link) {
        console.log(link)
        if (link.linkId === 'lnkId') {
            ///Whatever
            console.log(link)
        }
    }
    filterMyData(e)
    {

    }
}
