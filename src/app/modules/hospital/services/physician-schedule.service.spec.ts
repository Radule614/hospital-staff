import { TestBed } from '@angular/core/testing';

import { PhysicianScheduleService } from './physician-schedule.service';

describe('PhysicianScheduleService', () => {
  let service: PhysicianScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhysicianScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
