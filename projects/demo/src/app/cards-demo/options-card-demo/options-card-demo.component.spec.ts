import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsCardDemoComponent } from './options-card-demo.component';

describe('OptionsCardDemoComponent', () => {
  let component: OptionsCardDemoComponent;
  let fixture: ComponentFixture<OptionsCardDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsCardDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsCardDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
