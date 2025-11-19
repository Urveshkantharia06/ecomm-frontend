import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.scss']
})
export class SignupComponent {

  name: string = '';
  email: string = '';
  password: string = '';
  loading = false;

  constructor(private router: Router, private auth: AuthService) {}

  signup() {
    this.loading = true;

    const data = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.auth.signup(data).subscribe({
      next: (res) => {
        alert("Account created! Please login.");
        this.router.navigate(['/login']);
      },
      error: (err) => {
        alert(err.error?.message || "Signup failed");
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
