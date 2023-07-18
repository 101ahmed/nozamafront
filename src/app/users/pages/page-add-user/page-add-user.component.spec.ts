import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddUserComponent } from './page-add-user.component';

describe('PageAddUserComponent', () => {
  let component: PageAddUserComponent;
  let fixture: ComponentFixture<PageAddUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAddUserComponent]
    });
    fixture = TestBed.createComponent(PageAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
