import { TestBed } from '@angular/core/testing';

import { WinnabilityService } from './winnability.service';

describe('WinnabilityService', () => {
  let service: WinnabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WinnabilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
