import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsWinnabilityComponent } from './details-winnability.component';

describe('DetailsWinnabilityComponent', () => {
  let component: DetailsWinnabilityComponent;
  let fixture: ComponentFixture<DetailsWinnabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsWinnabilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsWinnabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
