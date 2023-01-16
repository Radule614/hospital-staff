import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExaminationReportComponent } from './create-examination-report.component';

describe('CreateExaminationReportComponent', () => {
  let component: CreateExaminationReportComponent;
  let fixture: ComponentFixture<CreateExaminationReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExaminationReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateExaminationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
