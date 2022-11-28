import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInDialogComponent } from './logged-in-dialog.component';

describe('LoggedInDialogComponent', () => {
  let component: LoggedInDialogComponent;
  let fixture: ComponentFixture<LoggedInDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedInDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggedInDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
