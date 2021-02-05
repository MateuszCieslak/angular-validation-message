import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'bo-validation-message-template',
  templateUrl: './validation-message-template.component.html',
  styleUrls: ['./validation-message-template.component.scss'],
})
export class ValidationMessageTemplateComponent {
  @Input()
  public validator: string;

  @Input()
  public control: AbstractControl;

  @Input()
  public translation: string;

  public active = true;

  public get shown(): boolean {
    if (this.control && this.control.errors) {
      return !!this.control.errors[this.validator];
    }

    return false;
  }
}
