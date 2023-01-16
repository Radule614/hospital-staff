import { TestBed } from '@angular/core/testing';

import { ExaminationReportService } from './examination-report.service';

describe('ExaminationReportService', () => {
  let service: ExaminationReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExaminationReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
