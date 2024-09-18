import { TestBed } from '@angular/core/testing';

import { AdDetailsService } from './ad-details.service';

describe('AdDetailsService', () => {
  let service: AdDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
