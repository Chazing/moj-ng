import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionCardDemoComponent } from './selection-card-demo.component';

describe('SelectionCardDemoComponent', () => {
  let component: SelectionCardDemoComponent;
  let fixture: ComponentFixture<SelectionCardDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionCardDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionCardDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
