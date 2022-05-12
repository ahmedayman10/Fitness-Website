import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideLungesComponent } from './side-lunges.component';

describe('SideLungesComponent', () => {
  let component: SideLungesComponent;
  let fixture: ComponentFixture<SideLungesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideLungesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideLungesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
