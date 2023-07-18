import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditUserComponent } from './page-edit-user.component';

describe('PageEditUserComponent', () => {
  let component: PageEditUserComponent;
  let fixture: ComponentFixture<PageEditUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageEditUserComponent]
    });
    fixture = TestBed.createComponent(PageEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
