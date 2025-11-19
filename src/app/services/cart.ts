import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: any[] = [];

  constructor() {
    this.loadCart();
  }

  // Add item to cart
  addToCart(product: any) {
    const existing = this.cart.find(p => p.id === product.id);

    if (existing) {
      existing.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }

    this.saveCart();
  }

  // Remove item
  removeFromCart(productId: number) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveCart();
  }

  // Increase qty
  increase(product: any) {
    product.quantity++;
    this.saveCart();
  }

  // Decrease qty
  decrease(product: any) {
    if (product.quantity > 1) {
      product.quantity--;
    } else {
      this.removeFromCart(product.id);
    }
    this.saveCart();
  }

  // Total
  getTotal(): number {
    return this.cart.reduce((t, item) => t + (item.price * item.quantity), 0);
  }

  // Count items
  getItemCount(): number {
    return this.cart.reduce((t, item) => t + item.quantity, 0);
  }

  // Save
  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  // Load
  loadCart() {
    const saved = localStorage.getItem('cart');
    if (saved) {
      this.cart = JSON.parse(saved);
    }
  }
}
