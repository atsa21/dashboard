import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailsHeaderComponent } from './account-details-header.component';

describe('AccountDetailsHeaderComponent', () => {
  let component: AccountDetailsHeaderComponent;
  let fixture: ComponentFixture<AccountDetailsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountDetailsHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
