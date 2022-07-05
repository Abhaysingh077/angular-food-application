import { TestBed } from '@angular/core/testing';

import { ChinesefoodserviceService } from './chinesefoodservice.service';

describe('ChinesefoodserviceService', () => {
  let service: ChinesefoodserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChinesefoodserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
