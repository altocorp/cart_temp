import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../models/product'
import { Observable } from 'rxjs'
import { productsUrl } from 'src/app/config/api'

//should come from an API db like python or mangodb
const apiUrl='http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient ) { }

  // if we specify datatype after observable we should keep specifying it in the function
  getProducts(): Observable<Product[]>{
      //should come from an API db in the future and returns values
    return this.http.get<Product[]>(productsUrl)
  }
}

