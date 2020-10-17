import { Injectable } from '@angular/core';

import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Poduct 1', 'this is the product 1', 100),
    new Product(2, 'Poduct 2', 'this is the product 2', 200),
    new Product(3, 'Poduct 3', 'this is the product 3', 300),
    new Product(4, 'Poduct 4', 'this is the product 4', 400),
    new Product(5, 'Poduct 5', 'this is the product 5', 500),
    new Product(6, 'Poduct 6', 'this is the product 6', 600),
    
  ]

  constructor() { }

  getProducts(): Product[]{
      //should come from an API db in the future and returns values
    return this.products
  }
}

