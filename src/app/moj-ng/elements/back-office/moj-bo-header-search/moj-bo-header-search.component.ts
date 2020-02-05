import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'moj-bo-header-search',
    templateUrl: './moj-bo-header-search.component.html',
    styleUrls: ['./moj-bo-header-search.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MojBoHeaderSearchComponent implements OnInit {
    @Input() searchItems: SelectItem[];
    @Input() addSearch: boolean = true;
    @Input() searchPlaceholder: string;
    @Input() searchInputMaxLength: number;
    @Input() disabledSearch : boolean = false;
    @Input() selectedSearch: SelectItem;
    @Output() searchClick: EventEmitter<any> = new EventEmitter<any>();
    @Output() searchComboChanged: EventEmitter<any> = new EventEmitter<any>();
    searchInput: string;
    searchSystemText: string = 'searchSystem';
    showSearchCombo: boolean;

    constructor(private translateService: TranslateService) { }

    ngOnInit() {
        this.searchPlaceholder = this.searchPlaceholder || this.translateService.instant('MojTexts.search');
        this.searchSystemText = this.translateService.instant('MojTexts.searchSystem');
        this.showSearchCombo = this.searchItems && this.searchItems.length > 0;
    }

    search(e) {
        console.log('Search clicked!');
        if (this.searchClick) {
            this.searchClick.emit({ event: e, item: this.selectedSearch, searchInput: this.searchInput });
        }
    }

    searchComboChange(e) {
        this.searchComboChanged.emit(e);
    }

}
