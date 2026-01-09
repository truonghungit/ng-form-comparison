import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { form, Field, required, email, minLength, submit, customError } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

type LoginData = {
  email: string;
  password: string;
};

@Component({
  selector: 'app-login-signal-form',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, Field],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginSignalForm {
  loginModel = signal<LoginData>({
    email: '',
    password: '',
  });

  loginForm = form(this.loginModel, (schema) => {
    required(schema.email, { message: 'Email is required.' });
    email(schema.email, { message: 'Please enter a valid email address.' });

    required(schema.password, { message: 'Password is required.' });
    minLength(schema.password, 6, { message: 'Password must be at least 6 characters.' });
  });

  onSubmit(event: Event) {
    event.preventDefault();

    submit(this.loginForm, async (form) => {
      try {
        console.log('Logging in with:', form().value());
        return undefined;
      } catch (error) {
        return customError({
          message: 'Login failed. Please check your credentials and try again.',
          kind: 'submit',
        })
      }
    });
  }
}
