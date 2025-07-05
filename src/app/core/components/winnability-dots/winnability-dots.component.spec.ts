import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnabilityDotsComponent } from './winnability-dots.component';

describe('WinnabilityDotsComponent', () => {
  let component: WinnabilityDotsComponent;
  let fixture: ComponentFixture<WinnabilityDotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinnabilityDotsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinnabilityDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
