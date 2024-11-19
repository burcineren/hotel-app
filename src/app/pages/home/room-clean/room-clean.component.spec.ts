import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCleanComponent } from './room-clean.component';

describe('RoomCleanComponent', () => {
  let component: RoomCleanComponent;
  let fixture: ComponentFixture<RoomCleanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomCleanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomCleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
