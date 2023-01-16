import { TestBed } from '@angular/core/testing';

import { EqTenderService } from './eq-tender.service';

describe('EqTenderService', () => {
  let service: EqTenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EqTenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
