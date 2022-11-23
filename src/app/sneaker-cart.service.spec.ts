import { TestBed } from '@angular/core/testing';

import { SneakerCartService } from './sneaker-cart.service';

describe('SneakerCartService', () => {
  let service: SneakerCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SneakerCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
