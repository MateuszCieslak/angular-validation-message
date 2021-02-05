import { AfterViewInit, Component, ContentChildren, Input, Optional, QueryList, Self, ViewChildren } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { ValidationMessageTemplateComponent } from './validation-message-template/validation-message-template.component';

@Component({
  selector: 'app-validation-message',
  templateUrl: './validation-message.component.html',
})
export class ValidationMessageComponent implements ControlValueAccessor, AfterViewInit {

  @Input()
  public fieldLabel: string;

  public get invalid(): boolean {
    return this.control ? this.control.invalid : false;
  }

  public get showError(): boolean {
    if (!this.control) {
      return false;
    }

    const { dirty, touched } = this.control;

    return this.invalid ? (dirty || touched) : false;
  }

  @ContentChildren(ValidationMessageTemplateComponent)
  private customTemplates: QueryList<ValidationMessageTemplateComponent>;

  @ViewChildren(ValidationMessageTemplateComponent)
  private genericTemplates: QueryList<ValidationMessageTemplateComponent>;

  constructor(@Self() @Optional() public control: NgControl) {
    this.control.valueAccessor = this;
  }

  ngAfterViewInit() {
    this.customTemplates.forEach((t) => {
      t.control = this.control.control;
      this.genericTemplates.filter((x) => x.validator === t.validator).forEach((x) => (x.active = false));
    });
  }

  public writeValue(value: any) {
  }

  public registerOnChange(fn: () => void): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(): void {}

  public setDisabledState(isDisabled: boolean): void {}

  private propagateChange: any = () => {};
}
