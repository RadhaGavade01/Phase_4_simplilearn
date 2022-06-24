import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcakeComponent } from './addcake.component';

describe('AddcakeComponent', () => {
  let component: AddcakeComponent;
  let fixture: ComponentFixture<AddcakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
