import { TestBed } from '@angular/core/testing';

import { RoomFacilityService } from './room-facility.service';

describe('RoomFacilityService', () => {
  let service: RoomFacilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomFacilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
