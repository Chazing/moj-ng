import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MojSnackbarComponent } from './moj-snackbar.component';

describe('MojSnackbarComponent', () => {
  let component: MojSnackbarComponent;
  let fixture: ComponentFixture<MojSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MojSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MojSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
