import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAverageDurationOfExamSingleExaminationStepComponent } from './show-average-duration-of-exam-single-examination-step.component';

describe('ShowAverageDurationOfExamSingleExaminationStepComponent', () => {
  let component: ShowAverageDurationOfExamSingleExaminationStepComponent;
  let fixture: ComponentFixture<ShowAverageDurationOfExamSingleExaminationStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAverageDurationOfExamSingleExaminationStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAverageDurationOfExamSingleExaminationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
