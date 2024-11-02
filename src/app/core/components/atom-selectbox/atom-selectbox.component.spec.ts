import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomSelectboxComponent } from './atom-selectbox.component';

describe('AtomSelectboxComponent', () => {
  let component: AtomSelectboxComponent;
  let fixture: ComponentFixture<AtomSelectboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomSelectboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtomSelectboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
