import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomInputComponent } from './atom-input.component';

describe('AtomInputComponent', () => {
  let component: AtomInputComponent;
  let fixture: ComponentFixture<AtomInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
