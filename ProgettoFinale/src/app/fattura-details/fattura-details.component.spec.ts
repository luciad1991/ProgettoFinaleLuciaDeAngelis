import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatturaDetailsComponent } from './fattura-details.component';

describe('FatturaDetailsComponent', () => {
  let component: FatturaDetailsComponent;
  let fixture: ComponentFixture<FatturaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatturaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatturaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
