import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { email, form, minLength, required, validate, Field, submit } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialog } from '../../common/alert-dialog/alert-dialog';

type RegisterData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

@Component({
  selector: 'app-register-signal-form',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, Field],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterSignalForm {
  private readonly dialog = inject(MatDialog);

  registerModel = signal<RegisterData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  registerForm = form(this.registerModel, (schema) => {
    // Name validations
    required(schema.name, { message: 'Name is required.' });

    // Email validations
    required(schema.email, { message: 'Email is required.' });
    email(schema.email, { message: 'Please enter a valid email address.' });

    // Password validations
    required(schema.password, { message: 'Password is required.' });
    minLength(schema.password, 6, { message: 'Password must be at least 6 characters.' });
    validate(schema.password, ({ value }) => {
      const password = value();
      if (!password) {
        return null;
      }

      const hasUpperCase = /[A-Z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const valid = hasUpperCase && hasNumber;
      if (!valid) {
        return {
          kind: 'strength',
          message: 'Password must contain at least one uppercase letter and one number.',
        };
      }
      return null;
    });

    // Confirm Password validations
    required(schema.confirmPassword, { message: 'Confirm Password is required.' });

    validate(schema.confirmPassword, ({ value, valueOf }) => {
      console.log('Validating password match...');
      const password = valueOf(schema.password);
      const confirmPassword = value();

      if (!confirmPassword) {
        return null;
      }

      if (password !== confirmPassword) {
        return {
          kind: 'passwordMismatch',
          message: 'Passwords do not match.',
        };
      }

      return null;
    });
  });

   async onSubmit(event: Event) {
    event.preventDefault();

     await submit(this.registerForm, async () => {
      const registerData = this.registerModel();
      console.log('Registering with:', registerData);
    });
  }
}
