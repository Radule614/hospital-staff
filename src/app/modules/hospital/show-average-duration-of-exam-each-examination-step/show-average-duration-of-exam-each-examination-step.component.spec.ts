import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAverageDurationOfExamEachExaminationStepComponent } from './show-average-duration-of-exam-each-examination-step.component';

describe('ShowAverageDurationOfExamEachExaminationStepComponent', () => {
  let component: ShowAverageDurationOfExamEachExaminationStepComponent;
  let fixture: ComponentFixture<ShowAverageDurationOfExamEachExaminationStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAverageDurationOfExamEachExaminationStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAverageDurationOfExamEachExaminationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
