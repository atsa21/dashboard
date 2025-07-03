import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressRatioComponent } from './progress-ratio.component';

describe('ProgressRatioComponent', () => {
  let component: ProgressRatioComponent;
  let fixture: ComponentFixture<ProgressRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressRatioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
