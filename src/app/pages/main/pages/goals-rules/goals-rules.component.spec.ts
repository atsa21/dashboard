import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsRulesComponent } from './goals-rules.component';

describe('GoalsRulesComponent', () => {
  let component: GoalsRulesComponent;
  let fixture: ComponentFixture<GoalsRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalsRulesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalsRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
