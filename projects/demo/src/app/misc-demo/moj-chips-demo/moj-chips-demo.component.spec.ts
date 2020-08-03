import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MojChipsDemoComponent } from './moj-chips-demo.component';

describe('MojChipsDemoComponent', () => {
  let component: MojChipsDemoComponent;
  let fixture: ComponentFixture<MojChipsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MojChipsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MojChipsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
