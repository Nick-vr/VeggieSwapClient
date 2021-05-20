import { TestBed } from '@angular/core/testing';

import { UserTradeItemsService } from './user-trade-items.service';

describe('UserTradeItemsService', () => {
  let service: UserTradeItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserTradeItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
