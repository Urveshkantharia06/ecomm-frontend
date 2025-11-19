import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';
import { ProductCardComponent } from '../../components/product-card/product-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule,ProductCardComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {



  selectedCategory: string = '';
  searchText: string = '';
  products: any[] = [];
  filteredProducts: any[] = [];
  categories: string[] = [];

  constructor(private productService: ProductService,
     private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  loadCategories() {
    this.productService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  searchProducts() {
    const search = this.searchText.toLowerCase();
    this.filteredProducts = this.products.filter(p =>
      (!this.selectedCategory || p.category === this.selectedCategory) &&
      p.title.toLowerCase().includes(search)
    );
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.searchProducts();
  }

  // ⭐ Add to cart functionality
  addToCart(product: any) {
  this.cartService.addToCart(product);
  alert('Added to cart!');
}


@Output() showDetails = new EventEmitter<any>();

}
