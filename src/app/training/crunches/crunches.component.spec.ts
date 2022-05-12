import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrunchesComponent } from './crunches.component';

describe('CrunchesComponent', () => {
  let component: CrunchesComponent;
  let fixture: ComponentFixture<CrunchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrunchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
