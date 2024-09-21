import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreRoomComponent } from './explore-room.component';

describe('ExploreRoomComponent', () => {
  let component: ExploreRoomComponent;
  let fixture: ComponentFixture<ExploreRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreRoomComponent]
    });
    fixture = TestBed.createComponent(ExploreRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
