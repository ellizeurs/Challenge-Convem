import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionalFormComponent } from './promotional-form.component';

describe('PromotionalFormComponent', () => {
  let component: PromotionalFormComponent;
  let fixture: ComponentFixture<PromotionalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionalFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
