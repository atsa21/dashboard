import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatioTargetComponent } from './ratio-target.component';

describe('RatioTargetComponent', () => {
  let component: RatioTargetComponent;
  let fixture: ComponentFixture<RatioTargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatioTargetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatioTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
