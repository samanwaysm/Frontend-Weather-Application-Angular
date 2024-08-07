import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServiceService } from '../../../shared/services/auth-service.service';
import { catchError, tap } from 'rxjs';
import { AdminLogin } from '../../../shared/models/admin.interface';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  loginForm!: FormGroup;
  isFormSubmited: boolean = false;
  constructor(private AuthServiceService: AuthServiceService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^[A-Za-z0-9]+@gmail\.com$/)]),
      password: new FormControl('', [Validators.required])
    })
  }
  onSubmit(): void {
    
    if (!this.loginForm.valid || this.isFormSubmited) return this.loginForm.markAllAsTouched();

    this.isFormSubmited = true;

    const adminData: AdminLogin = this.loginForm.value;

    this.AuthServiceService.login(adminData).pipe(
      tap((res) => {
        this.isFormSubmited = false;
        if (res) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/adminHome']);
        }
      }),
      catchError((err: any) => {
        this.isFormSubmited = false;
        if (err?.error) {
          const errFieldObj: { [key: string]: boolean } = {};
          const fieldName = err.error.errOpt as string;
          errFieldObj[fieldName] = true;
          this.loginForm.get(err.error.err)?.setErrors(errFieldObj);
        }

        return [];
      })
    ).subscribe();
  }
}
