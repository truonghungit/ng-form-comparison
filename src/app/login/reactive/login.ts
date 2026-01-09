import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AlertDialog } from '../../common/alert-dialog/alert-dialog';

@Component({
  selector: 'app-login-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginReactiveForm {
  private readonly dialog: MatDialog = inject(MatDialog);

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  get email() {
    return this.loginForm.get('email') as FormControl;
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  onSubmit() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) {
      return;
    }
    const credentials = this.loginForm.value;

    // TODO: Implement actual login logic here
    this.dialog.open(AlertDialog, {
      data: {
        title: 'Login Successful',
        message:
          '<div>You have successfully logged in!</div>' + JSON.stringify(credentials, null, 2),
      },
    });
  }
}
