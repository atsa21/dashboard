import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnabilityGraphsComponent } from './winnability-graphs.component';

describe('WinnabilityGraphsComponent', () => {
  let component: WinnabilityGraphsComponent;
  let fixture: ComponentFixture<WinnabilityGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinnabilityGraphsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinnabilityGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
