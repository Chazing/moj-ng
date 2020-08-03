import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy, forwardRef, EventEmitter, ElementRef, Injector, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ElementBase } from '../base/element.base';
import { PermissionService } from '../../permissions/permission.service';

@Component({
  selector: 'moj-selection-card',
  templateUrl: './selection-card.component.html',
  styleUrls: ['./selection-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MojSelectionCardComponent),
    multi: true
  }, { provide: ElementBase, useExisting: forwardRef(() => MojSelectionCardComponent) }]

})
export class MojSelectionCardComponent  extends ElementBase<boolean> {
  @Input() titleTextKey: string;
  @Input() iconClass;
  @Output()
  onChange = new EventEmitter();

  constructor(el: ElementRef, _injector: Injector, permissionService: PermissionService) {
      super(el, _injector, permissionService);
  }

  onFocusIn($event?: any) {
      $event.target.select();
      super.onFocusIn($event);
  }

  onchange(event: any) {
      this.onChange.emit(event);
  }
}
