import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationReportSearchComponent } from './examination-report-search.component';

describe('ExaminationReportSearchComponent', () => {
  let component: ExaminationReportSearchComponent;
  let fixture: ComponentFixture<ExaminationReportSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExaminationReportSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExaminationReportSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
