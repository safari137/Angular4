import { AbstractControl } from '@angular/forms/src/forms';
import { PasswordValidators } from './../new-course-form/oldPassword.validators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {
  form = new FormGroup({
    oldPassword: new FormControl('', [Validators.required], [PasswordValidators.passwordIsValid]),
    newPassword: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  private passwordsMatch: boolean = false;

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword(): AbstractControl {
    return this.form.get('confirmPassword');
  }

  checkIfPasswordsMatch(confirmPassword: string) {
    if (this.confirmPassword.value != this.newPassword.value) {
      this.confirmPassword.setErrors({ passwordsMatch : true });
    }
    else {
      this.confirmPassword.setErrors(null);
    }
  }
}
