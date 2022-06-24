import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousCakesDetailsComponent } from './previous-cakes-details.component';

describe('PreviousCakesDetailsComponent', () => {
  let component: PreviousCakesDetailsComponent;
  let fixture: ComponentFixture<PreviousCakesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousCakesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousCakesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
