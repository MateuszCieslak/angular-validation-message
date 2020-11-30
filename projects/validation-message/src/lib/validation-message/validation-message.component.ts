import { AfterViewInit, Component, ContentChildren, Input, QueryList, ViewChildren } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ValidationMessageTemplateComponent } from './validation-message-template/validation-message-template.component';

@Component({
  selector: 'bo-validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: [],
})
export class ValidationMessageComponent implements AfterViewInit {
  @Input()
  public control: AbstractControl;

  @Input()
  public fieldLabel: string;

  @ContentChildren(ValidationMessageTemplateComponent)
  private customTemplates: QueryList<ValidationMessageTemplateComponent>;

  @ViewChildren(ValidationMessageTemplateComponent)
  private genericTemplates: QueryList<ValidationMessageTemplateComponent>;

  ngAfterViewInit() {
    this.customTemplates.forEach((t) => {
      t.control = this.control;
      this.genericTemplates.filter((x) => x.validator === t.validator).forEach((x) => (x.active = false));
    });
  }
}
