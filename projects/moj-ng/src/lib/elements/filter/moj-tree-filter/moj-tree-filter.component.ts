import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, ChangeDetectorRef, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { MojCategoryFilter } from "../moj-filter.model";
import { trigger, state, transition, animate, style } from "@angular/animations";
import { FormGroup } from "@angular/forms";
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { MojFilterService } from '../moj-filter.service';
import { fromEvent, Subject } from 'rxjs';
import { filter } from 'rxjs/internal/operators/filter';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { map } from 'rxjs/internal/operators/map';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';


const EXPANSION_PANEL_ANIMATION_TIMING = '500ms cubic-bezier(0.4,0.0,0.2,1)';

@Component({
  selector: 'moj-tree-filter',
  templateUrl: "./moj-tree-filter.component.html",
  animations: [
    trigger('bodyExpansion', [
      state('collapsed, void', style({ height: '0px', opacity: '0' })),
      state('expanded', style({ height: '*', opacity: '1' })),
      transition('expanded <=> collapsed, void => collapsed', animate(EXPANSION_PANEL_ANIMATION_TIMING))
    ])
  ]
})
export class MojTreeFilterComponent implements AfterViewInit{


  @ViewChild('searchInput', { read: ElementRef, static: false }) searchInput: ElementRef;

  @Input() form: FormGroup;

  @Input() nodes: MojCategoryFilter[];


  private _searchKeyup: Subject<{ value: string; category: MojCategoryFilter }> = new Subject();

  constructor(private filterService: MojFilterService) { }

  isString(category) {
    return typeof (category) == "string";
  }

  seeAll(category) {
    this.filterService.seeAllCategory.next(category);
  }

  getNodesByMaxRecords(category) {
    return category.sub_categories.slice(0, this.getCategoryRecords(category))
  }

  getCategoryRecords(category) {
    return category.maxRecords != null ? category.maxRecords : category.sub_categories.length;
  }

  searchKeyUp(str: string, category: MojCategoryFilter) {
    this._searchKeyup.next({ value: str, category: category });
  }

  ngAfterViewInit() {
      this._searchKeyup.pipe(
        filter(res => res.value == "" || res.value.length == 0 || res.value.length > 2),
        debounceTime(this.filterService.debounceTime),
        distinctUntilChanged()
      ).subscribe((searchObj: { value, category }) => {
        if (searchObj) {
          this.filterService.searchCategory.next(searchObj);
        }
      });
  }

  openCategory(category,isChangeMode)
  {
    if(isChangeMode)
    {
      category.isOpen = !category.isOpen;
      this.filterService.ExpandCategory.next(category);
    }
  }
}


