import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListUsersComponent } from './page-list-users.component';

describe('PageListUsersComponent', () => {
  let component: PageListUsersComponent;
  let fixture: ComponentFixture<PageListUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageListUsersComponent]
    });
    fixture = TestBed.createComponent(PageListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
