import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss']
})
export class CartComponent implements OnInit {

  cart: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.cart;
  }

  increase(item: any) {
    this.cartService.increase(item);
  }

  decrease(item: any) {
    this.cartService.decrease(item);
  }

  remove(productId: number) {
    this.cartService.removeFromCart(productId);
    this.cart = this.cartService.cart;
  }

  getTotal() {
    return this.cartService.getTotal();
  }
}
