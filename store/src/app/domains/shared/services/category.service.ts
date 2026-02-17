import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http = inject(HttpClient);

  // 👇 URL de tu API deployada
  private apiUrl = 'https://api-store-pfjt.onrender.com';

  constructor() { }

  getAll() {
    return this.http.get<Category[]>(`${this.apiUrl}/categories`);
  }
}
