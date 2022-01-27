import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewProvinciaComponent } from './add-new-provincia.component';

describe('AddNewProvinciaComponent', () => {
  let component: AddNewProvinciaComponent;
  let fixture: ComponentFixture<AddNewProvinciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewProvinciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
