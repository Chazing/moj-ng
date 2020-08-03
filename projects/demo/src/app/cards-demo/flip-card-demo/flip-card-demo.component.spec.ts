import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipCardDemoComponent } from './flip-card-demo.component';

describe('FlipCardDemoComponent', () => {
  let component: FlipCardDemoComponent;
  let fixture: ComponentFixture<FlipCardDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipCardDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipCardDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
