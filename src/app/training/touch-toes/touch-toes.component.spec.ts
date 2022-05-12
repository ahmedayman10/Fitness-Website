import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchToesComponent } from './touch-toes.component';

describe('TouchToesComponent', () => {
  let component: TouchToesComponent;
  let fixture: ComponentFixture<TouchToesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouchToesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchToesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
