import { TestBed } from '@angular/core/testing';

import { CoffeeOrderingService } from './coffee-ordering.service';

describe('CoffeeOrderingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoffeeOrderingService = TestBed.get(CoffeeOrderingService);
    expect(service).toBeTruthy();
  });
});
