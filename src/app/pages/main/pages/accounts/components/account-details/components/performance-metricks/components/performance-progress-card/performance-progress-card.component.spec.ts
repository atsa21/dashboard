import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceProgressCardComponent } from './performance-progress-card.component';

describe('PerformanceProgressCardComponent', () => {
  let component: PerformanceProgressCardComponent;
  let fixture: ComponentFixture<PerformanceProgressCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceProgressCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceProgressCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
