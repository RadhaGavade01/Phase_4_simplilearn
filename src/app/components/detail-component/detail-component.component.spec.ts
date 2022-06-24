import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponentComponent } from './detail-component.component';

describe('DetailComponentComponent', () => {
  let component: DetailComponentComponent;
  let fixture: ComponentFixture<DetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
