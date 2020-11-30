import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationMessageTemplateComponent } from './validation-message-template.component';

describe('ValidationMessageTemplateComponent', () => {
  let component: ValidationMessageTemplateComponent;
  let fixture: ComponentFixture<ValidationMessageTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ValidationMessageTemplateComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationMessageTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
