import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectDemoComponent } from './multiselect-demo.component';

describe('MultiselectDemoComponent', () => {
  let component: MultiselectDemoComponent;
  let fixture: ComponentFixture<MultiselectDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiselectDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
