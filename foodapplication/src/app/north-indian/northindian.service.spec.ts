import { TestBed } from '@angular/core/testing';

import { NorthindianService } from './northindian.service';

describe('NorthindianService', () => {
  let service: NorthindianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NorthindianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
