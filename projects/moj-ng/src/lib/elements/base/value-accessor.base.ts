import { Injector, ChangeDetectorRef, ElementRef } from '@angular/core';
import { ControlValueAccessor } from "@angular/forms";

export abstract class ValueAccessorBase implements ControlValueAccessor {
  private innerValue: any;
  private valueAccessorCdr: ChangeDetectorRef;
  private valueAccessorElementRef: ElementRef;

  propagateChange: any = () => { };
  propagateTouched: any = () => { };

  get value() {
    return this.innerValue;
  }

  constructor(private injector: Injector) {
    this.valueAccessorCdr = injector.get(ChangeDetectorRef);
    this.valueAccessorElementRef = injector.get(ElementRef);
  }

  set value(value) {
    this.innerValue = value;
    this.propagateChange(value);
    this.propagateTouched();
  }

  writeValue(value) {
    if (
      value !== undefined ||
      (value === undefined && this.innerValue !== undefined)
    ) {
      this.innerValue = value;
    }
    //for angular bug see https://github.com/angular/angular/issues/21780
    if (!(<any>this.valueAccessorCdr).destroyed) {
      if (this.valueAccessorElementRef.nativeElement.getElementsByTagName('input').length == 0)
        this.valueAccessorCdr.detectChanges();
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.propagateTouched = fn;
  }
}
