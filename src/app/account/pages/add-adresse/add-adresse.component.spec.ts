import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdresseComponent } from './add-adresse.component';

describe('AddAdresseComponent', () => {
  let component: AddAdresseComponent;
  let fixture: ComponentFixture<AddAdresseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAdresseComponent]
    });
    fixture = TestBed.createComponent(AddAdresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
