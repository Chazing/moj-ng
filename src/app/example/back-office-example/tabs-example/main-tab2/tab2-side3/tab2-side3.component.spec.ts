import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab2Side3Component } from './tab2-side3.component';

describe('Tab2Side3Component', () => {
  let component: Tab2Side3Component;
  let fixture: ComponentFixture<Tab2Side3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab2Side3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab2Side3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
