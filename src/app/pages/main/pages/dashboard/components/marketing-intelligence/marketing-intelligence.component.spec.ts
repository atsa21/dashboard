import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingIntelligenceComponent } from './marketing-intelligence.component';

describe('MarketingIntelligenceComponent', () => {
  let component: MarketingIntelligenceComponent;
  let fixture: ComponentFixture<MarketingIntelligenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketingIntelligenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingIntelligenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
