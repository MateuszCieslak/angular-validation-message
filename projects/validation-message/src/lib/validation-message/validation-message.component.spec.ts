import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ValidationMessageTemplateComponent } from './validation-message-template/validation-message-template.component';

import { ValidationMessageComponent } from './validation-message.component';

describe('ValidationMessageComponent', () => {
    let component: ValidationMessageComponent;
    let fixture: ComponentFixture<ValidationMessageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ValidationMessageComponent, ValidationMessageTemplateComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ValidationMessageComponent);
        component = fixture.componentInstance;
        component.control = new FormControl('text1', [Validators.required, Validators.maxLength(3)])
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.validation-message'))
            .nativeElement.hasAttribute('hidden'))
            .toBeTrue();
    });

    it('Should be shown because values are incorrect', () => {
        const rootElement = fixture.debugElement.query(By.css('.validation-message')).nativeElement;

        component.control.setValue('to long value');
        component.control.markAsTouched();
        fixture.detectChanges();
        expect(rootElement.hasAttribute('hidden')).toBeFalse();

        component.control.setValue('');
        component.control.markAsTouched();
        fixture.detectChanges();
        expect(rootElement.hasAttribute('hidden')).toBeFalse();
    });
});
