import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextsDemoComponent } from './texts-demo.component';

describe('TextsDemoComponent', () => {
  let component: TextsDemoComponent;
  let fixture: ComponentFixture<TextsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
