import { TestBed } from '@angular/core/testing';

import { TradeItemsService } from './trade-items.service';

describe('TradeItemsService', () => {
  let service: TradeItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradeItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
