import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MojSliderDemoComponent } from './moj-slider-demo.component';

describe('MojSliderDemoComponent', () => {
  let component: MojSliderDemoComponent;
  let fixture: ComponentFixture<MojSliderDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MojSliderDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MojSliderDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
