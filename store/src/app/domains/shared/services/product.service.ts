import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  // 👇 URL base de tu API
  private apiUrl = 'https://api-store-pfjt.onrender.com';

  constructor() { }

  getProducts(category_id?: string){

    const url = new URL(`${this.apiUrl}/products`);

    if (category_id){
      url.searchParams.set('categoryId', category_id);
    }

    return this.http.get<Product[]>(url.toString());
  }

  getOne(id: string){
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }

}
