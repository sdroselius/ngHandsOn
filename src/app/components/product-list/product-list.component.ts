import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  products: Product[] = [];

  display = true;
  clickCount = 0;
  title = '';
  newProduct: Product = new Product();

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.index();
  }
  getNumberOfProducts(): number {
    return this.products.length;
  }

  log(msg: any): void {
    console.log(this.clickCount++ + ' ' + msg);
  }

  onSubmit(product: Product) {
    console.log(product);
    this.productService.create(product);
    this.newProduct = new Product();
  }

}
