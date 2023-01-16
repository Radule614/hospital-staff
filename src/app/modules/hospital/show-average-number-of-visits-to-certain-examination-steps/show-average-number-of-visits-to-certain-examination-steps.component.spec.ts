import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAverageNumberOfVisitsToCertainExaminationStepsComponent } from './show-average-number-of-visits-to-certain-examination-steps.component';

describe('ShowAverageNumberOfVisitsToCertainExaminationStepsComponent', () => {
  let component: ShowAverageNumberOfVisitsToCertainExaminationStepsComponent;
  let fixture: ComponentFixture<ShowAverageNumberOfVisitsToCertainExaminationStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAverageNumberOfVisitsToCertainExaminationStepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAverageNumberOfVisitsToCertainExaminationStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
