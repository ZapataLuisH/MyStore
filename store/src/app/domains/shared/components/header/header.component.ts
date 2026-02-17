import { Component, inject, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  // 👇 MOBILE MENU
  hideMobileMenu = signal(true);

  toggleMobileMenu() {
    this.hideMobileMenu.update(prev => !prev);
  }

  // 👇 CART MENU
  hideSideMenu = signal(true);

  private cartService = inject(CartService);

  cart = this.cartService.cart;
  total = this.cartService.total;

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

  remove(product: Product) {
    this.cartService.removeFromCart(product);
  }

  checkout() {
    this.cartService.sendOrderToWhatsApp();
  }

}
