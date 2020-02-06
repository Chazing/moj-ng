import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelsDemoComponent } from './labels-demo.component';

describe('LabelsDemoComponent', () => {
  let component: LabelsDemoComponent;
  let fixture: ComponentFixture<LabelsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
