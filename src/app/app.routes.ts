import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { SignupComponent } from './pages/signup/signup';
import { HomeComponent } from './pages/home/home';
import { CartComponent } from './pages/cart/cart';
import { ProductDetailsComponent } from './pages/product-details/product-details';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  // 🔒 Protected Routes
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'cart', component: CartComponent, canActivate: [authGuard] },
  { path: 'product/:id', component: ProductDetailsComponent, canActivate: [authGuard] },

  { path: '**', redirectTo: 'login' }
];
