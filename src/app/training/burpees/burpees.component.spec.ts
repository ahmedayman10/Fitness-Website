import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurpeesComponent } from './burpees.component';

describe('BurpeesComponent', () => {
  let component: BurpeesComponent;
  let fixture: ComponentFixture<BurpeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurpeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurpeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
