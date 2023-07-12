import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageResetPasswordComponent } from './page-reset-password.component';

describe('PageResetPasswordComponent', () => {
  let component: PageResetPasswordComponent;
  let fixture: ComponentFixture<PageResetPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageResetPasswordComponent]
    });
    fixture = TestBed.createComponent(PageResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
