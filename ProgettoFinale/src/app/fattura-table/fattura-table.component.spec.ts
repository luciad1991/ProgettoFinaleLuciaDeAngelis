import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatturaTableComponent } from './fattura-table.component';

describe('FatturaTableComponent', () => {
  let component: FatturaTableComponent;
  let fixture: ComponentFixture<FatturaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatturaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatturaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
