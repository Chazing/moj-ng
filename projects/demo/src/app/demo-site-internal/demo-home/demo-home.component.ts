import { ENUMS, Enums } from './../../enums';
import { transition } from '@angular/animations';
import { takeUntil, takeWhile } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { DemoSharedService, demoMenuItem } from './../../common/services/demo-shared.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ButtonToggleItem, ButtonToggleStyle } from '@moj/moj-ng';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-demo-home',
    templateUrl: './demo-home.component.html',
    styleUrls: ['./demo-home.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DemoHomeComponent implements OnInit {
    alive: boolean = true;
    showInputs: boolean = false;
    buttonToggleStyleType = ButtonToggleStyle;
    searchTypes: ButtonToggleItem[] = [
        { id: 1, text: "לפי קטגוריה" },
        { id: 2, text: "לפי מילות חיפוש" }
    ];
    searchType: number = 1;
    categories: ButtonToggleItem[];
    currentButton: demoMenuItem;
    inputs: any[];
    searchItems: demoMenuItem[];
    searchValue;
    enums:Enums=ENUMS;
    constructor(private _router: Router, private demoService: DemoSharedService, private titleService: Title) {
        this.categories = demoService.menuItems.map((x, i) => { return { text: x.label, id: i, iconClass: x.iconClass } });
        this.searchItems = demoService.flatMenuItems;
        this.demoService.currentCategory.pipe(takeWhile(() => this.alive)).subscribe(res => {
            this.currentButton = this.demoService.menuItems[res];
            if (this.currentButton) {
                this.showInputs = this.currentButton.items && this.currentButton.items.length > 0;
                if (this.currentButton.routerLink) {
                    this._router.navigate(this.currentButton.routerLink)
                    this.demoService.currentCategory.next(-1);
                }
                else if (this.currentButton.items)
                    this.inputs = this.currentButton.items.map((x, i) => { return { text: x.label, id: i } });
            }
        })
    }

    ngOnInit() {
        this.titleService.setTitle("Moj Demo | Catalog");
    }

    changeCategory(id: number) {
        this.demoService.currentCategory.next(id);
    }

    changeInput(id: number) {
        // this.showInputs = false;
        var currentRoute = this.currentButton.items[id].routerLink;
        this._router.navigate(currentRoute);
    }

    onSearchSelect(item) {
        this._router.navigate(item.routerLink);
    }

    itemsFunction(term: string): Observable<demoMenuItem[]> {
        if (term) {
            term = term.toLowerCase();
            var filteredItems = this.searchItems.filter(x => (x.label.toLowerCase().indexOf(term) > -1 && x.routerLink) || (x.keyWords && x.keyWords.filter(y => y.toLowerCase().indexOf(term) > -1).length > 0));
            return of(filteredItems);
        }
        return of(this.searchItems);
    }

    ngOnDestroy() {
        this.alive = false;
    }
}





