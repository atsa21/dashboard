import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilanceDocumentationComponent } from './compilance-documentation.component';

describe('CompilanceDocumentationComponent', () => {
  let component: CompilanceDocumentationComponent;
  let fixture: ComponentFixture<CompilanceDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompilanceDocumentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompilanceDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
