import { TestBed } from '@angular/core/testing';

import { RoomdetailsService } from './roomdetails.service';

describe('RoomdetailsService', () => {
  let service: RoomdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
