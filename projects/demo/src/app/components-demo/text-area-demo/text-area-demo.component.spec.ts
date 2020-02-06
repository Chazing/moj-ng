import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaDemoComponent } from './text-area-demo.component';

describe('TextAreaDemoComponent', () => {
  let component: TextAreaDemoComponent;
  let fixture: ComponentFixture<TextAreaDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAreaDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAreaDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
