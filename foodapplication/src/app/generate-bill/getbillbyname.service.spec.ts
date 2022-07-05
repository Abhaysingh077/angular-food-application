import { TestBed } from '@angular/core/testing';

import { GetbillbynameService } from './getbillbyname.service';

describe('GetbillbynameService', () => {
  let service: GetbillbynameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetbillbynameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
