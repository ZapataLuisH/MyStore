import { Component, signal } from '@angular/core';
import {ProductComponent} from './../../components/product/product.component'
import { CommonModule } from '@angular/common';
import {Product} from './../../../shared/models/product.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Product[]>([]);

  constructor(){
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=24',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=25',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=26',
        creationAt: new Date().toISOString()
      }
    ]
    this.products.set(initProducts);
  }

  fromChild(event: string){
    console.log('Este es un evento del padre');
    console.log(event);
  }
}
