import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAverageNumberOfExaminationStepsComponent } from './show-average-number-of-examination-steps.component';

describe('ShowAverageNumberOfExaminationStepsComponent', () => {
  let component: ShowAverageNumberOfExaminationStepsComponent;
  let fixture: ComponentFixture<ShowAverageNumberOfExaminationStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAverageNumberOfExaminationStepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAverageNumberOfExaminationStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
