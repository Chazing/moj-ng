import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';

/**
 * Example
  ```html
  <moj-progress [percent]=50></moj-progress>
  ```
 */
@Component({
  selector: 'moj-progress',
  templateUrl: './moj-progress.component.html',
  styleUrls: ['./moj-progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MojProgressComponent implements OnInit {
  public _percent: number = 0;
  public _percentText: string;

  @Input('percent')
  set percent(value: number) {
    this._percent = value
    if (!this._percentText)
      this._percentText = value.toString();
    //the settimeout is needed for the number wil change after the circle transition
    setTimeout(() => {
      this._percentText = value.toString();
      this.cdr.detectChanges();
    }, 1000);
  }

  get percent(): number {
    return this._percent;
  }

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }
}
