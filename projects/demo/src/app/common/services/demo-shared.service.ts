import { BehaviorSubject } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoSharedService {
  currentItem = new BehaviorSubject(null);
  currentCategory = new BehaviorSubject(null);
  currentModule = new BehaviorSubject(null);
  menuItems: demoMenuItem[] = [
    {
      label: 'פקדי input', iconClass: "fal fa-file-signature", items: [
        { label: 'Auto Complete', routerLink: ['/components/autocomplete-demo'], tfsLink: "components-demo/autocomplete-demo/autocomplete-demo.component.html", compodocLink: "components/MojAutoCompleteComponent.html" },
        { label: 'Dropdown', routerLink: ['/components/dropdown-demo'], keyWords: ['בחירה'], tfsLink: "components-demo/dropdown-demo/dropdown-demo.component.html", compodocLink: "components/MojDropdownListComponent.html" },
        { label: 'Multiselect', routerLink: ['/components/multiselect-demo'], keyWords: ['בחירה מרובה'], tfsLink: "components-demo/multiselect-demo/multiselect-demo.component.html", compodocLink: "components/MojMultiSelectComponent.html" },
        { label: 'Checkbox', routerLink: ['/components/checkbox-demo'], tfsLink: "components-demo/checkbox-demo/checkbox-demo.component.html", compodocLink: "components/MojCheckboxComponent.html" },
        { label: 'Selection Card', routerLink: ['/components/selection-card-demo'], tfsLink: "", compodocLink: "" },
        { label: 'On-Off Switch', routerLink: ['/components/moj-on-off-switch'], tfsLink: "components-demo/on-off-switch-demo/on-off-switch-demo.component.html" },
        { label: 'Radiobutton', routerLink: ['/components/radiobutton-demo'], tfsLink: "components-demo/radiobutton-demo/radiobutton-demo.component.html", compodocLink: "components/MojRadiobuttonComponent.html" },
        { label: 'Date Picker', routerLink: ['/components/datepicker-demo'], keyWords: ['Calendar', "תאריכון", "תאריך"], tfsLink: "components-demo/datepicker-demo/datepicker-demo.component.html", compodocLink: "components/MojDatePickerComponent.html" },
        { label: 'Textbox', routerLink: ['/components/textbox-demo'], tfsLink: "components-demo/textbox-demo/textbox-demo.component.html", compodocLink: "components/MojTextboxComponent.html" },
        { label: 'TextArea', routerLink: ['components/text-area-demo'], tfsLink: "components-demo/text-area-demo/text-area-demo.component.html", compodocLink: "components/MojTextAreaComponent.html" },
        { label: 'Slider', routerLink: ['components/moj-slider-demo'], tfsLink: "components-demo/moj-slider-demo/moj-slider-demo.component.html", compodocLink: "components/MojSliderComponent.html" },
        { label: 'Editor', iconClass: "fal fa-upload", routerLink: ['/components/editor-demo'], keyWords: ['editor', "עורך"], tfsLink: "components-demo/editor-demo/editor-demo.component.html", compodocLink: "components/MojEditorComponent.html" },
        { label: 'File upload', iconClass: "fal fa-upload", routerLink: ['/components/fileupload-demo'], keyWords: ['העלאת מסמך'], tfsLink: "components-demo/file-upload-demo/file-upload-demo.component.html", compodocLink: "components/MojFileUploadComponent.html#readme" },
      ]
    },
    {
      label: 'גרידים', iconClass: "fal fa-th", items: [
        { label: "גריד", routerLink: ['data/grid-demo/grid'], tfsLink: 'data-display-demo/grid/ag-grid/ag-grid-demo.component.html', compodocLink: 'additional-documentation/גריד/איך-עובדים-עם-גריד.html', keyWords: ['DataTable', "טבלה"] },
        { label: "גריד עם עריכה", routerLink: ['data/grid-demo/grid-edit'], tfsLink: 'data-display-demo/grid/edit-grid/edit-grid-demo.component.html&_a=contents', compodocLink: 'additional-documentation/גריד/איך-עובדים-עם-גריד.html', keyWords: ["Grid Edit"] },
        { label: "Edit Inline", routerLink: ['data/grid-demo/edit-inline'], compodocLink: 'additional-documentation/גריד/איך-עובדים-עם-גריד.html', tfsLink: 'data-display-demo/grid/edit-inline-demo/edit-inline-demo.component.html&_a=contents' },
        { label: "Edit Popup", routerLink: ['data/grid-demo/edit-popup'], compodocLink: 'additional-documentation/גריד/איך-עובדים-עם-גריד.html', tfsLink: 'data-display-demo/grid/edit-popup-demo/edit-popup-demo.component.html&_a=contents' },
        { label: "Quick Filter", routerLink: ['data/grid-demo/quick-filter'], compodocLink: 'additional-documentation/גריד/איך-עובדים-עם-גריד.html', tfsLink: 'data-display-demo/grid/quick-filter/quick-filter-demo.component.html&_a=contents', keyWords: ["סינון מהיר", "חיפוש"] },
        { label: "סוגי עמודות", routerLink: ['data/grid-demo/columns'], compodocLink: 'additional-documentation/גריד/איך-עובדים-עם-גריד.html', tfsLink: 'data-display-demo/grid/moj-columns-demo/moj-columns-demo.component.html&_a=contents', keyWords: ["Custom Columns", "עמודות"] },
      ]
    },
    {
      label: 'ליסטים', iconClass: "far fa-bars", items: [
        { label: "ליסטים בסיס", routerLink: ['data/list-demo/list-base'], tfsLink: 'data-display-demo/list-demo/list-base/list-demo.component.html' },
        { label: "ליסטים בסגנון של כותרת ופרטים", routerLink: ['data/list-demo/list-design'], tfsLink: 'data-display-demo/list-demo/list-design-demo/list-design-demo.component.html' },
        { label: "ליסטים בסגנון של פאנל מידע", routerLink: ['data/list-demo/list-design-panel'], tfsLink: 'data-display-demo/list-demo/list-design-panel-demo/list-design-panel-demo.component.html' },
        { label: "ליסטים למערכות BO", routerLink: ['data/list-demo/list-bo'], tfsLink: 'data-display-demo/list-demo/list-bo-demo/list-bo-demo.component.html' },
        { label: "מיון רשימה", routerLink: ['data/list-demo/sort'], tfsLink: 'data-display-demo/list-demo/sort/sort-demo.component.html', keyWords: ['sort', 'מיון'] },
        { label: "סינון", routerLink: ['data/list-demo/quick-filter'], tfsLink: 'data-display-demo/list-demo/list-filter/list-filter-demo.component.html', keyWords: ['filter', 'סינון'] },
      ]
    },
    {
      label: "פריסת תוכן", iconClass: 'fal fa-album-collection', items: [
        { label: "טאבים להצגת מידע", iconClass: 'fal fa-album-collection', routerLink: ['/content-layout/tabs-demo/tabs'], keyWords: ['tabs', "טאבים"], tfsLink: "content-layout-demo/tabs-visible-demo/tabs-visible-demo.component.html", compodocLink: "components/MojTabsComponent.html" },
        { label: "Wizard", routerLink: ['/content-layout/wizard-demo'], keyWords: ['תהליך', "steps", "wizard"], tfsLink: "content-layout-demo/wizard-demo/wizard-demo.component.html", compodocLink: "additional-documentation/תהליך-wizard.html" },
        { label: "פאנלים", routerLink: ['/content-layout/panels-demo/moj-expansion-panel'], keyWords: ["פאנלים", "panels", "פנל"], tfsLink: "content-layout-demo/panels-demo/moj-expansion-panel-demo/moj-expansion-panel-demo.component.html", compodocLink: "components/MojExpansionPanelComponent.html" },
        { label: "Options Card", routerLink: ['/cards-demo/options-card'], keyWords: ["כרטיס", "panels", "הזדהות", "identification", "options card"], tfsLink: "cards-demo/options-card-demo/options-card-demo.component.html", compodocLink: "components/MojOptionsCardComponent.html" },
        { label: "Flip Card", routerLink: ['/cards-demo/flip-card'], keyWords: ["כרטיס", "panels", "כרטיסיה מתחלפת", "flip card"], tfsLink: "cards-demo/flip-card-demo/flip-card-demo.component.html", compodocLink: "components/MojFlipCardComponent.html#readme" }
      ]
    },
    {
      label: 'overlay', items:
        [{ label: 'PopUp', iconClass: "fal fa-spinner", routerLink: ['/overlay/popup-demo'], keyWords: ['popup', 'חלונית', 'חלון', 'הודעות', 'message'], tfsLink: "overlay-demo/popup-demo/popup-demo.component.html", compodocLink: "injectables/MojMessagesService.html" },
        { label: "פאנל צף", iconClass: "fal fa-shield-check", routerLink: ['/overlay/sliding-menu-demo'], keyWords: ['sliding', 'צף', 'פאנל צף'], tfsLink: "overlay-demo/sliding-menu-demo/sliding-menu-demo.component.html", compodocLink: "components/SlidingMenuComponent.html" },
        { label: "Snackbar", iconClass: "fal fa-shield-check", routerLink: ['/overlay/snackbar-demo'], keyWords: ['toast', 'הודעה נדיפה'], tfsLink: "overlay-demo/snackbar-demo/snackbar-demo.component.html", compodocLink: "components/MojSnackbarComponent.html" }]
    },
    {
      label: 'טפסים & ולידציות', iconClass: "fab fa-wpforms", items: [
        { label: 'טפסים', routerLink: ['forms/form-validations-demo'], keyWords: ['טופס', 'Form', "validations", "וולידציות"], tfsLink: "forms-demo/form-validations-demo/form-validations-demo.component.html" },
        { label: 'טפסים - דוגמה נוספת', routerLink: ['forms/form-validations-demo2'], keyWords: ['טופס', 'Form', "validations", "וולידציות"] },
        // { label: 'ולידציות', iconClass: "fal fa-exclamation-circle", routerLink: ['forms/form-validations-demo2'], keyWords: ['validations'] }
      ]
    },
    { label: "כפתורים", iconClass: 'fal fa-rectangle-wide', routerLink: ['/buttons/buttons-demo'], keyWords: ['button', "כפתורים"], tfsLink: "buttons-demo/buttons-demo/buttons-demo.component.html", compodocLink: "components/MojButtonComponent.html" },
    {
      label: "טקסטים", iconClass: "fal fa-text", items: [
        { label: 'moj-dynamic-lable', routerLink: ['components/texts-demo'], keyWords: ['labels', "headers", "dynamic-lable", "כותרות"], tfsLink: "components-demo/texts-demo/texts-demo.component.html", compodocLink: "components/MojDynamicLabelComponent.html" },
        { label: 'moj-label', routerLink: ['components/labels-demo'], keyWords: ['labels', "headers", "label-for", "כותרות"], tfsLink: "components-demo/texts-demo/texts-demo.component.html", compodocLink: "components/MojDynamicLabelComponent.html" }]
    },
    {
      label: "הודעות", items: [
        { label: "שורת הודעה", iconClass: 'fal fa comment-alt-lines', routerLink: ['message/notification'], keyWords: ['message', 'notification', 'שורת הודעה'], tfsLink: "message-demo/notification-demo/notification-demo.component.html", compodocLink: "components/MojNotificationComponent.html#info" }
      ]
    },
    {
      label: 'כללי', items:
        [{ label: "Progress", iconClass: "fal fa-spinner-third", routerLink: ['/misc/progress-demo'], tfsLink: "misc-demo/progress-demo/progress-demo.component.html", compodocLink: "components/MojProgressComponent.html#info" },
        { label: 'Loading', iconClass: "fal fa-spinner", routerLink: ['/misc/loading-demo'], tfsLink: "misc-demo/moj-loading-demo/moj-loading-demo.component.ts", compodocLink: "injectables/MojLoadingService.html", keyWords: ['spinner', 'טעינה'] },
        { label: "Recaptcha", iconClass: "fal fa-shield-check", routerLink: ['/misc/recaptcha-demo'], tfsLink: 'misc-demo/recaptcha-demo/recaptcha-demo.component.html', compodocLink: 'components/MojRecaptchaComponent.html#readme', keyWords: ['קפצה', 'רקפצה'] },
        { label: "Invisible Recaptcha", iconClass: "fal fa-shield-check", routerLink: ['/misc/invisible-recaptcha-demo'], tfsLink: 'misc-demo/invisible-recaptcha-demo/invisible-recaptcha-demo.component.html', compodocLink: 'components/MojRecaptchaComponent.html#readme', keyWords: ['קפצה', 'רקפצה'] },
        { label: 'Chips', routerLink: ['/misc/moj-chips-demo'], tfsLink: 'misc-demo/moj-chips-demo.component.html', compodocLink: 'misc-demo/MojChipsComponent.html#readme', keyWords: ['chips', "צ'יפסים", 'תגיות',] },
        { label: 'Help-Info', routerLink: ['/misc/moj-help-info-demo'], tfsLink: 'misc-demo/moj-help-info-demo/moj-help-info-demo.component.html', compodocLink: 'misc-demo/MojChipsComponent.html#readme', keyWords: ['help', "עזרה", 'טקסט עזרה', 'info', 'מידע'] },
        { label: 'הנחיות', routerLink: ['/misc/guidelines-demo'], tfsLink: 'misc-demo/guidelines-demo.component.html', compodocLink: 'components/MojGuidelinesComponent.html#info', keyWords: ['guidelines', 'הנחיות'] },
        { label: 'כותרת ישות', routerLink: ['/cards-demo/entity-header-card'], tfsLink: 'cards-demo/entity-header-demo/entity-header-demo.component.html', compodocLink: 'components/MojEntityHeaderComponent.html#info', keyWords: ['entity-header'] }
          // { label: "Resize", iconClass: "fal fa-shield-check", routerLink: ['/misc/resize-demo'], tfsLink: 'misc-demo/invisible-recaptcha-demo/invisible-recaptcha-demo.component.html', compodocLink: 'components/MojRecaptchaComponent.html#readme', keyWords: ['resize'] },
          , { label: "Filter", iconClass: "fal fa-shield-check", routerLink: ['/misc/filter-demo'], tfsLink: 'misc-demo/invisible-recaptcha-demo/filter-demo.component.html', compodocLink: 'components/MojFilterComponent.html#readme', keyWords: ['filter', 'פילטר', 'סינון',] }
        ]
    }


  ]

  modulesItems: demoMenuItem[] = [
    { label: 'מודול מסמכים', iconClass: "fal fa-file-alt", routerLink: "http://gendocs/" },
    { label: 'מודול משימות', iconClass: "far fa-tasks", routerLink: "http://qa-srv12app7:60/#/tasks/search", keyWords: ['משימות'] },
    { label: 'מודול הנחיות', routerLink: ['http://qa-srv12app7:800/#/69'], iconClass: "fas fa-tasks-alt", keyWords: ['הנחיות', 'guidelines'] },
    { label: 'מודול מעבר לחנות', iconClass: "far fa-credit-card-front", routerLink: "http://generic-modules/Home/OnlinePayment" }
  ]

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        //var flatArray = [].concat.apply(this.menuItems, this.menuItems.map(x => x.items));
        var index = this.flatMenuItems.findIndex(x => x.routerLink && val.url.endsWith(x.routerLink[0]))
        this.currentItem.next(index >= 0 ? this.flatMenuItems[index] : null);
      }
    });
  }

  get flatMenuItems() {
    return [].concat.apply(this.menuItems, this.menuItems.filter(x => x.items).map(x => x.items));
  }
}

export interface demoMenuItem {
  label: string,
  routerLink?: any,
  iconClass?: string,
  items?: demoMenuItem[],
  tfsLink?: string,
  compodocLink?: string,
  keyWords?: string[];
}
