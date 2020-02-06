import { BehaviorSubject } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoSharedService {
  currentItem = new BehaviorSubject(null);
  currentCategory = new BehaviorSubject(null);
  menuItems: demoMenuItem[] = [
    {
      label: 'פקדי input', iconClass: "fal fa-file-signature", items: [
        { label: 'Auto Complete', routerLink: ['/components/autocomplete-demo'], tfsLink: "components-demo/autocomplete-demo/autocomplete-demo.component.html" },
        { label: 'Dropdown', routerLink: ['/components/dropdown-demo'], keyWords: ['בחירה'], tfsLink: "components-demo/dropdown-demo/dropdown-demo.component.html" },
        { label: 'Multiselect', routerLink: ['/components/multiselect-demo'], keyWords: ['בחירה מרובה'], tfsLink: "components-demo/multiselect-demo/multiselect-demo.component.html" },
        { label: 'Checkbox', routerLink: ['/components/checkbox-demo'], tfsLink: "components-demo/checkbox-demo/checkbox-demo.component.html" },
        { label: 'On-Off Switch', routerLink: ['/components/moj-on-off-switch'], tfsLink: "components-demo/on-off-switch-demo/on-off-switch-demo.component.html" },
        { label: 'Radiobutton', routerLink: ['/components/radiobutton-demo'], tfsLink: "components-demo/radiobutton-demo/radiobutton-demo.component.html" },
        { label: 'Date Picker', routerLink: ['/components/datepicker-demo'], keyWords: ['Calendar', "תאריכון", "תאריך"], tfsLink: "components-demo/datepicker-demo/datepicker-demo.component.html" },
        { label: 'Textbox', routerLink: ['/components/textbox-demo'], tfsLink: "components-demo/textbox-demo/textbox-demo.component.html" },
        { label: 'TextArea', routerLink: ['components/text-area-demo'], tfsLink: "components-demo/text-area-demo/text-area-demo.component.html" },
        { label: 'Slider', routerLink: ['components/moj-slider-demo'], tfsLink: "components-demo/moj-slider-demo/moj-slider-demo.component.html" },
        { label: 'Editor', iconClass: "fal fa-upload", routerLink: ['/components/editor-demo'], keyWords: ['editor', "עורך"], tfsLink: "components-demo/editor-demo/editor-demo.component.html" },
        { label: 'File upload', iconClass: "fal fa-upload", routerLink: ['/components/fileupload-demo'], keyWords: ['העלאת מסמך'], tfsLink: "components-demo/file-upload-demo/file-upload-demo.component.html" },
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
      ]
    },


    {
      label: "פריסת תוכן", iconClass: 'fal fa-album-collection', items: [
        { label: "טאבים להצגת מידע", iconClass: 'fal fa-album-collection', routerLink: ['/content-layout/tabs-demo'], keyWords: ['tabs', "טאבים"] },
        { label: "Wizard", routerLink: ['/content-layout/wizard-demo'], keyWords: ['תהליך', "steps", "wizard"] },
        { label: "פאנלים", routerLink: ['/content-layout/panels-demo/moj-expansion-panel'], keyWords: ["פאנלים", "panels", "פנל"] },
        { label: "Cards", routerLink: ['/cards-demo/options-card'], keyWords: ["כרטיס", "panels"] }
      ]
    },
    {
      label: 'overlay', items:
        [{ label: 'PopUp', iconClass: "fal fa-spinner", routerLink: ['/overlay/popup-demo'], keyWords: ['popup', 'חלונית', 'חלון', 'הודעות', 'message'] },
        { label: "פאנל צף", iconClass: "fal fa-shield-check", routerLink: ['/overlay/sliding-menu-demo'], keyWords: ['sliding', 'צף', 'פאנל צף'] }
        ]
    },
    {
      label: 'טפסים & ולידציות', iconClass: "fab fa-wpforms", items: [
        { label: 'טפסים - טקסט צד', routerLink: ['forms/form-validations-demo'], keyWords: ['טופס', 'Form', "validations", "וולידציות"] },
        { label: 'טפסים - טקסט עליון', routerLink: ['forms/form-validations-demo2'], keyWords: ['טופס', 'Form', "validations", "וולידציות"] },
        // { label: 'ולידציות', iconClass: "fal fa-exclamation-circle", routerLink: ['forms/form-validations-demo2'], keyWords: ['validations'] }
      ]
    },
    { label: "כפתורים", iconClass: 'fal fa-rectangle-wide', routerLink: ['/buttons/buttons-demo'], keyWords: ['button', "כפתורים"], tfsLink: "buttons-demo/buttons-demo/buttons-demo.component.html" },
    { label: "טקסטים", iconClass: "fal fa-text", routerLink: ['components/labels-demo'], keyWords: ['labels', "headers", "כותרות"] },

    {
      label: 'כללי', items:
        [{ label: "Progress", iconClass: "fal fa-spinner-third", routerLink: ['/misc/progress-demo'], tfsLink: "misc-demo/progress-demo/progress-demo.component.html", compodocLink: "components/MojProgressComponent.html#info" },
        { label: 'Loading', iconClass: "fal fa-spinner", routerLink: ['/misc/loading-demo'], tfsLink: "misc-demo/moj-loading-demo/moj-loading-demo.component.ts", compodocLink: "injectables/MojLoadingService.html", keyWords: ['spinner', 'טעינה'] },
        { label: "Recaptcha", iconClass: "fal fa-shield-check", routerLink: ['/misc/recaptcha-demo'], tfsLink: 'misc-demo/recaptcha-demo/recaptcha-demo.component.html', compodocLink: 'components/MojRecaptchaComponent.html#readme', keyWords: ['קפצה', 'רקפצה'] },
        { label: "Invisible Recaptcha", iconClass: "fal fa-shield-check", routerLink: ['/misc/invisible-recaptcha-demo'], tfsLink: 'misc-demo/invisible-recaptcha-demo/invisible-recaptcha-demo.component.html', compodocLink: 'components/MojRecaptchaComponent.html#readme', keyWords: ['קפצה', 'רקפצה'] },
        { label: "Resize", iconClass: "fal fa-shield-check", routerLink: ['/misc/resize-demo'], tfsLink: 'misc-demo/invisible-recaptcha-demo/invisible-recaptcha-demo.component.html', compodocLink: 'components/MojRecaptchaComponent.html#readme', keyWords: ['resize'] },
        { label: "Filter", iconClass: "fal fa-shield-check", routerLink: ['/misc/filter-demo'], tfsLink: 'misc-demo/invisible-recaptcha-demo/filter-demo.component.html', compodocLink: 'components/MojFilterComponent.html#readme', keyWords: ['filter', 'פילטר', 'סינון',] }
        ]
    }


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
