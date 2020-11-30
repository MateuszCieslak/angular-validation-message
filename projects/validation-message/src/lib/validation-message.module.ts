import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ValidationMessageTemplateComponent } from './validation-message/validation-message-template/validation-message-template.component';
import { ValidationMessageComponent } from './validation-message/validation-message.component';

@NgModule({
  declarations: [ValidationMessageComponent, ValidationMessageTemplateComponent],
  imports: [
    CommonModule
  ],
  exports: [ValidationMessageComponent, ValidationMessageTemplateComponent]
})
export class ValidationMessageModule { }
