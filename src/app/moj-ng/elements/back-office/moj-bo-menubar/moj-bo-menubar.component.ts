import { Component, OnInit, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

import { SelectItem } from 'primeng/components/common/selectitem';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'moj-bo-menubar',
  templateUrl: './moj-bo-menubar.component.html',
  styleUrls: ['./moj-bo-menubar.component.css']
})
export class MojBoMenubarComponent implements OnInit {
  @Input() barItems: MenuItem[];
  @Input() searchItems: SelectItem[];
  @Input() addSearch: boolean = true;
  @Input() searchPlaceholder: string;
  @Output() searchClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() searchComboChanged: EventEmitter<any> = new EventEmitter<any>();
  selectedSearch: SelectItem;
  searchInput: string;
  searchSystemText: string = 'searchSystem';
  showSearchCombo: boolean;

  constructor(private elRef: ElementRef, private translateService: TranslateService) {}

  ngOnInit() {
    setTimeout(() => {
      this.searchPlaceholder = this.searchPlaceholder || this.translateService.instant('MojTexts.search');
      this.searchSystemText = this.translateService.instant('MojTexts.searchSystem');
    }, 500);
    this.showSearchCombo = this.searchItems && this.searchItems.length > 0;
  }

  search(e) {
    console.log('Search clicked!');
    if (this.searchClick) {
      this.searchClick.emit({ event: e, item: this.selectedSearch, searchInput: this.searchInput });
    }
  }

  onclick(event) {
    let elements = this.elRef.nativeElement.querySelectorAll('.ui-state-active');

    for (var i = 0; elements != null && i < elements.length; i++) {
      elements[i].classList.remove('ui-state-active');
    }
    if (event.target.parentElement.classList.contains('ui-menuitem-link')) {
      event.target.parentElement.classList.add('ui-state-active');
    }
  }

  searchComboChange(e) {
    this.searchComboChanged.emit(e);
  }
}
