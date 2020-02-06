import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab2Side1Component } from './tab2-side1.component';

describe('Tab2Side1Component', () => {
  let component: Tab2Side1Component;
  let fixture: ComponentFixture<Tab2Side1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab2Side1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab2Side1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
