import { Component, Inject, Input, SimpleChanges, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import {CommonModule} from '@angular/common';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, CartService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);

  @Input({required: true}) cart: Product[] = [];
  private cartService = Inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.cart;

  toogleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState);
  }

}
