import { ValidationErrors } from '@angular/forms/src/forms';
import { AbstractControl } from '@angular/forms/src/forms';

export class PasswordValidators {
    static passwordIsValid(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'abc') {
                    resolve(null);
                }
                else {
                    resolve({ passwordIsValid: true });                     
                }
            }, 2000);
        });
    }
}