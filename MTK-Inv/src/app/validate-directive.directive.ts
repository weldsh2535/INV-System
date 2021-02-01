import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomvalidationServiceService } from './Service/customvalidation-service.service';

@Directive({
  selector: '[appValidateDirective]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => ValidateDirective), multi: true }]
})
export class ValidateDirective {

  constructor(private customValidator:CustomvalidationServiceService) { }
  validate(control: AbstractControl): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> {
    return this.customValidator.userNameValidator(control);
  }
}
