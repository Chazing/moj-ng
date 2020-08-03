import { Component, OnInit, Input, ViewEncapsulation, Output, ViewChild, ContentChildren, ContentChild, EventEmitter } from '@angular/core';
import { FlipCardEditComponent } from './flip-card-edit/flip-card-edit.component';
import { transition, state, style, trigger, animate } from '@angular/animations';

@Component({
  selector: 'moj-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('contentHeigt', [
      state('hide', style({ display: 'none' })),
      state('show', style({ display: 'block' })),
      transition('expanded => hide', [animate("0.4s")]),
      transition('hide => expanded', [animate("0.4s")])
    ]),
    trigger('contentOpacity', [
      state('hide', style({ opacity: '0' })),
      state('show', style({ opacity: '1' })),
      transition('show => hide', [animate("0.35s")]),
      transition('hide => show', [animate("0.35s")])
    ])],
})
export class MojFlipCardComponent implements OnInit {
  @Input() iconClass: string;
  @Input() textKey: string;
  @Input() isEditMode: boolean;

  @Output() isEditModeChange: EventEmitter<boolean> = new EventEmitter();

  isEditable: boolean;
  @ContentChild(FlipCardEditComponent, { static: true }) editComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.isEditable = !!this.editComponent;
  }

  click() {
    if (!this.isEditMode && this.isEditable) {
      this.isEditMode = true;
      this.isEditModeChange.emit(true)
    }
  }

  closeEdit(event) {
    this.isEditMode = false;
    this.isEditModeChange.emit(false)
    event.stopPropagation();
  }
}

