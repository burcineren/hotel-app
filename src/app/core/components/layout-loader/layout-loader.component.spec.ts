import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLoaderComponent } from './layout-loader.component';

describe('LayoutLoaderComponent', () => {
  let component: LayoutLoaderComponent;
  let fixture: ComponentFixture<LayoutLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutLoaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
