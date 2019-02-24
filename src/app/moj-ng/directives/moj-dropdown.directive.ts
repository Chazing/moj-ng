import {
    forwardRef,
    Inject,
    Directive,
    Input,
    Output,
    EventEmitter,
    ElementRef,
    ContentChild,
    NgZone,
    Renderer2,
    OnInit
  } from '@angular/core';

  @Directive({
    selector: '[ngbDropdownMenu]',
    host: {'class': 'dropdown-menu', '[class.show]': 'dropdown.isOpen()'}
  })
  export class NgbDropdownMenu {
    isOpen = false;
  
    constructor(
        @Inject(forwardRef(() => NgbDropdown)) 
        public dropdown, 
        private _elementRef: ElementRef) {}
  
    isEventFrom($event) { return this._elementRef.nativeElement.contains($event.target); }
  }
  
  
  @Directive({
    selector: '[ngbDropdownAnchor]',
    host: {'class': 'dropdown-toggle', 'aria-haspopup': 'true', '[attr.aria-expanded]': 'dropdown.isOpen()'}
  })
  export class NgbDropdownAnchor {
    anchorEl;
  
    constructor(@Inject(forwardRef(() => NgbDropdown)) public dropdown, private _elementRef: ElementRef) {
      this.anchorEl = _elementRef.nativeElement;
    }
  
    isEventFrom($event) { return this._elementRef.nativeElement.contains($event.target); }
  }
  
  /**
   * Allows the dropdown to be toggled via click. This directive is optional: you can use NgbDropdownAnchor as an
   * alternative.
   */
  @Directive({
    selector: '[ngbDropdownToggle]',
    host: {
      'class': 'dropdown-toggle',
      'aria-haspopup': 'true',
      '[attr.aria-expanded]': 'dropdown.isOpen()',
      '(click)': 'toggleOpen()'
    },
    providers: [{provide: NgbDropdownAnchor, useExisting: forwardRef(() => NgbDropdownToggle)}]
  })
  export class NgbDropdownToggle extends NgbDropdownAnchor {
    constructor(@Inject(forwardRef(() => NgbDropdown)) dropdown, 
        elementRef: ElementRef) { 
        super(dropdown, elementRef); 
    }
  
    toggleOpen() { 
      this.dropdown.toggle();
      this.anchorEl.parentElement.classList.add("active");
      this.anchorEl.parentElement.parentElement.parentElement.classList.add("active");
    }
  }
  
  /**
   * Transforms a node into a dropdown.
   */
  @Directive({
    selector: '[ngbDropdown]',
    exportAs: 'ngbDropdown',
    host: {
        'class': 'dropdown',
        '[class.show]': 'isOpen()',
        '(keyup.esc)': 'closeFromOutsideEsc()',
        '(document:click)': 'closeFromClick($event)'
    }   
  })
  export class NgbDropdown {
    @ContentChild(NgbDropdownMenu) 
    private _menu: NgbDropdownMenu;
  
    @ContentChild(NgbDropdownAnchor) 
    private _anchor: NgbDropdownAnchor;
  
    /**
     * Indicates that dropdown should be closed when selecting one of dropdown items (click) or pressing ESC.
     * When it is true (default) dropdowns are automatically closed on both outside and inside (menu) clicks.
     * When it is false dropdowns are never automatically closed.
     * When it is 'outside' dropdowns are automatically closed on outside clicks but not on menu clicks.
     * When it is 'inside' dropdowns are automatically on menu clicks but not on outside clicks.
     */
    @Input() autoClose: boolean | 'outside' | 'inside';
  
    /**
     *  Defines whether or not the dropdown-menu is open initially.
     */
    @Input('open') _open = false;
  
    /**
     *  An event fired when the dropdown is opened or closed.
     *  Event's payload equals whether dropdown is open.
     */
    @Output() openChange = new EventEmitter();
  
    constructor() {
      this.autoClose = true;
    }

    /**
     * Checks if the dropdown menu is open or not.
     */
    isOpen(): boolean { return this._open; }
  
    /**
     * Opens the dropdown menu of a given navbar or tabbed navigation.
     */
    open(): void {
      if (!this._open) {
        this._open = true;
        this.openChange.emit(true);
      }
    }
  
    /**
     * Closes the dropdown menu of a given navbar or tabbed navigation.
     */
    close(): void {
      if (this._open) {
        this._open = false;
        this.openChange.emit(false);
      }
    }
  
    /**
     * Toggles the dropdown menu of a given navbar or tabbed navigation.
     */
    toggle(): void {
      if (this.isOpen()) {
        this.close();
      } else {
        this.open();
      }
    }
  
    closeFromClick($event) {
      if (this.autoClose && $event.button !== 2 && !this._isEventFromToggle($event)) {
        if (this.autoClose === true) {
          this.close();
        } else if (this.autoClose === 'inside' && this._isEventFromMenu($event)) {
          this.close();
        } else if (this.autoClose === 'outside' && !this._isEventFromMenu($event)) {
          this.close();
        }
      }
    }
  
    closeFromOutsideEsc() {
      if (this.autoClose) {
        this.close();
      }
    }
  
    private _isEventFromToggle($event) { return this._anchor.isEventFrom($event); }
  
    private _isEventFromMenu($event) { return this._menu ? this._menu.isEventFrom($event) : false; }

  }



  @Directive({
    selector: '[goBackToggle]',
    host: {
      '(click)': 'toggleOpen()'
    }
  })
  export class goBackToggle {
    constructor(@Inject(forwardRef(() => NgbDropdown)) dropdown, 
        private elementRef: ElementRef) { 
    }
  
    toggleOpen() { 
      this.elementRef.nativeElement.parentElement.parentElement.parentElement.classList.remove("active")
      this.elementRef.nativeElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove("active")
    }
  }