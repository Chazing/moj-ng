import { Directive, ElementRef, ContentChildren, QueryList, OnDestroy, HostListener } from '@angular/core';
import { MojGridPanelComponent } from '../elements/grid/moj-grid-panel.component';
import { MojButtonsLineComponent } from '../elements/general/moj-buttons-line.component';
import { takeWhile } from 'rxjs/operators';
import { MojFormService } from './moj-form.service';
import { PermissionService } from '../permissions/permission.service';

@Directive({
  selector: '[mojForm]',
  providers: [MojFormService]
})
export class MojFormDirective implements OnDestroy {
  private alive: boolean = true;
  private formWrapper: any;
  @ContentChildren(MojGridPanelComponent, { descendants: true }) gridPanels: QueryList<MojGridPanelComponent>;
  @ContentChildren(MojButtonsLineComponent, { descendants: true, }) buttonsLine: QueryList<MojButtonsLineComponent>;

  constructor(private el: ElementRef, private permissionService: PermissionService) { }

  ngAfterViewInit() {
    let firstInputElement = this.el.nativeElement.querySelector('.ui-inputtext, .ui-dropdown, .ui-multiselect, button, a');
    if (firstInputElement) {
      this.setFocus(firstInputElement);
    }
  }

  ngAfterContentInit() {
    this.setPermissions()
  }

  appendChild(node) {

    for (let i = 0; i < node.childNodes.length; i++) {

      this.formWrapper.appendChild(node.childNodes[i]);

      if (node.childNodes[i] == undefined) {

      }
      if (node.childNodes[i] && node.childNodes[i].childNodes.length) {

        this.appendChild(node.childNodes[i])
      }

    }

    this.formWrapper.setAttribute("style", true)
  }


  setPermissions() {

    let identifier = this.getIdentifier();
    if (identifier) {
      let result = this.permissionService.getControllerPermission(identifier);
      if (result && (!result.enable || !result.visible)) {
        this.wrappFormContent();
        if (!result.enable)
          this.formWrapper.setAttribute("disabled", true)
        if (!result.visible)
          this.formWrapper.style.display = "none";
      }


    }

  }

  wrappFormContent() {
    this.formWrapper = document.createElement('fieldset');   //create a div
    var ref = document.querySelector('form');
    this.appendChild(ref);
    ref.parentNode.replaceChild(this.formWrapper, ref);
  }

  private getIdentifier() {
    if (this.el.nativeElement.getAttribute("FormGroupName")) {
      return this.el.nativeElement.getAttribute("FormGroupName");
    }
    else {
      return this.el.nativeElement.getAttribute("name");
    }

  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  @HostListener('submit')
  onFormSubmit() {
    let invalidElement = this.el.nativeElement.querySelector('.moj-invalid .ui-inputtext, .moj-invalid .ui-dropdown, .moj-invalid .ui-multiselect');

    if (invalidElement) {
      this.setFocus(invalidElement);
    }
  }

  private setFocus(element) {
    if (element) {
      if (element.nodeName == 'DIV') { //div can get focus only with tabindex
        element.setAttribute("tabindex", 0);
      }
      element.focus();
    }
  }
}
