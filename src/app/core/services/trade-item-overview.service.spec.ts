import { TestBed } from '@angular/core/testing';

import { TradeItemOverviewService } from './trade-item-overview.service';

describe('TradeItemOverviewService', () => {
  let service: TradeItemOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradeItemOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
