import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesItemComponent } from './policies-item.component';

describe('PoliciesItemComponent', () => {
  let component: PoliciesItemComponent;
  let fixture: ComponentFixture<PoliciesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliciesItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliciesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
