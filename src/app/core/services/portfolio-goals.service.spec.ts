import { TestBed } from '@angular/core/testing';

import { PortfolioGoalsService } from './portfolio-goals.service';

describe('PortfolioGoalsService', () => {
  let service: PortfolioGoalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioGoalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
