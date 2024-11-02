import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomTableComponent } from './atom-table.component';

describe('AtomTableComponent', () => {
  let component: AtomTableComponent;
  let fixture: ComponentFixture<AtomTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtomTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
