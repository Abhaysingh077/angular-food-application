import { TestBed } from '@angular/core/testing';

import { SouthindianService } from './southindian.service';

describe('SouthindianService', () => {
  let service: SouthindianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SouthindianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
