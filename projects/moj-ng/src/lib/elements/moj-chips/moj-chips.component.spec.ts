import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MojChipsComponent } from './moj-chips.component';

describe('MojChipsComponent', () => {
  let component: MojChipsComponent;
  let fixture: ComponentFixture<MojChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MojChipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MojChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
