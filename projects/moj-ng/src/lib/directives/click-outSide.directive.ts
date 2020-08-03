import {
  Directive, ElementRef, EventEmitter, Input,OnChanges, OnDestroy, OnInit, Output, SimpleChanges,Injectable,Inject,PLATFORM_ID
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

@Injectable()
@Directive({ selector: '[clickOutside]' })
export class ClickOutsideDirective implements OnInit, OnChanges, OnDestroy {
  @Input() delayClickOutsideInit: boolean = false;
  @Input() clickOutsideEvents: string = '';
  @Output() clickOutside: EventEmitter<Event> = new EventEmitter<Event>();
  private _nodesExcluded: Array<HTMLElement> = [];
  private _events: Array<string> = ['click'];

  constructor(private _el: ElementRef,
              @Inject(PLATFORM_ID) protected platformId: Object) {

    this._initOnClickBody = this._initOnClickBody.bind(this);
    this._onClickBody = this._onClickBody.bind(this);
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this._init();
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this._events.forEach(e => document.body.removeEventListener(e, this._onClickBody));
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (isPlatformBrowser(this.platformId)) {
      if (changes['attachOutsideOnClick'] || changes['exclude']) {
        this._init();
      }
    }
  }

  private _init() {
    if (this.clickOutsideEvents !== '') {
      this._events = this.clickOutsideEvents.split(' ');
    }
    this._initOnClickBody();
  }

  private _initOnClickBody() {
    if (this.delayClickOutsideInit) {
      setTimeout(this._initClickListeners.bind(this));
    } else {
      this._initClickListeners();
    }
  }

  private _initClickListeners() {
    this._events.forEach(e => document.body.addEventListener(e, this._onClickBody));
  }
  private _onClickBody(ev: Event) {


    if (!this._el.nativeElement.contains(ev.target) && !this._shouldExclude(ev.target)) {
         this.clickOutside.emit(ev);
    }
  }

  private _shouldExclude(target): boolean {
    for (let excludedNode of this._nodesExcluded) {
      if (excludedNode.contains(target)) {
        return true;
      }
    }
    return false;
  }
}