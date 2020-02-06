import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsDemoComponent } from './buttons-demo.component';

describe('ButtonsDemoComponent', () => {
  let component: ButtonsDemoComponent;
  let fixture: ComponentFixture<ButtonsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
