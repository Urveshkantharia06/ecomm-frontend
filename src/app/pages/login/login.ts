import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  loading = false;

  constructor(
    private router: Router,
    private auth: AuthService
  ) {}

  login() {
    this.loading = true;

    const data = {
      email: this.email,
      password: this.password
    };

    this.auth.login(data).subscribe({
      next: (res) => {
        // Save token + login status
        this.auth.saveToken(res.token);

        alert("Login Successful!");

        this.router.navigate(['/home']);
      },
      error: (err) => {
        alert(err.error?.message || "Login failed");
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
}
