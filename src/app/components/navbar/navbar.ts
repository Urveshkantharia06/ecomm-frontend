import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent {

  constructor(
    public cartService: CartService,
    private router: Router
  ) {}

  logout() {
    localStorage.clear(); // remove token and login status
    this.router.navigate(['/login']); // go to login page
  }
}
