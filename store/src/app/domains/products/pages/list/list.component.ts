import { Component } from '@angular/core';
import {ProductComponent} from './../../components/product/product.component'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  fromChild(event: string){
    console.log('Este es un evento del padre');
    console.log(event);
  }
}
