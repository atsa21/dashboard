import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceMetricksComponent } from './performance-metricks.component';

describe('PerformanceMetricksComponent', () => {
  let component: PerformanceMetricksComponent;
  let fixture: ComponentFixture<PerformanceMetricksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceMetricksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceMetricksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
