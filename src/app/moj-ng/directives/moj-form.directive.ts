import { Directive, ElementRef, ContentChildren, QueryList, OnDestroy } from '@angular/core';
import { MojGridPanelComponent } from '../elements/grid/moj-grid-panel';
import { MojButtonsLineComponent } from '../elements/general/moj-buttons-line.component';
import { takeWhile } from 'rxjs/operators';
import { MojFormService } from './moj-form.service';

@Directive({
  selector: '[mojForm]',
  providers: [MojFormService]
})
export class MojFormDirective implements OnDestroy {
  private getFocuseElements: string[] = ['INPUT', 'A']
  private alive: boolean = true;
  @ContentChildren(MojGridPanelComponent, { descendants: true }) gridPanels: QueryList<MojGridPanelComponent>;
  @ContentChildren(MojButtonsLineComponent, { descendants: true, }) buttonsLine: QueryList<MojButtonsLineComponent>;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    for (var i = 0; this.el.nativeElement.elements[i] && this.getFocuseElements.indexOf(this.el.nativeElement.elements[i].nodeName) < 0; i++);
    this.el.nativeElement.elements[i].focus();
  }

  ngAfterContentInit() {
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
