import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickActionComponent } from './quick-action.component';

describe('QuickActionComponent', () => {
  let component: QuickActionComponent;
  let fixture: ComponentFixture<QuickActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickActionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuickActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
