import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationItemComponent } from './communication-item.component';

describe('CommunicationItemComponent', () => {
  let component: CommunicationItemComponent;
  let fixture: ComponentFixture<CommunicationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunicationItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunicationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
