import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'moj-entity-header',
  templateUrl: './moj-entity-header.component.html',
  styleUrls: ['./moj-entity-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MojEntityHeaderComponent implements OnInit {
  @Input() isEditMode: boolean;
  @Output() isEditModeChange: EventEmitter<boolean> = new EventEmitter();
  @Input() showEditButton: boolean;
  @Input() asideIconClass: string;
  @Input() asideTitle: string;
  @Input()
  asideBottomData: { [key: string]: string, styleClass: string };
  @Input()
  headerData: [{ [key: string]: string, styleClass: string }];
  @Input()
  bodyData: [{ [key: string]: string, styleClass: string, colWidth: string }];

  @Output() editButtonClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  editClick() {
    this.isEditMode = true;
    this.isEditModeChange.emit(true);
  }
}
