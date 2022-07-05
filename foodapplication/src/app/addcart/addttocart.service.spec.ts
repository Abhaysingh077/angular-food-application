import { TestBed } from '@angular/core/testing';

import { AddttocartService } from './addttocart.service';

describe('AddttocartService', () => {
  let service: AddttocartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddttocartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
