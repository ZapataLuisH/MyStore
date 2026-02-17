import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);

  total = computed(()=>{
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price,0);
  });

  constructor() { }

  addtoCart(product: Product){
    this.cart.update(state => [...state, product]);
  }

  removeFromCart(product: Product){
    this.cart.update(state => state.filter(p => p !== product));
  }

  // ✅ DEBE ESTAR AQUÍ DENTRO
  sendOrderToWhatsApp(){

    const phone = '573227358997';

    const cart = this.cart();

    if(cart.length === 0){
      alert('El carrito está vacío');
      return;
    }

    const productList = cart
      .map(p => `- ${p.title} ($${p.price})`)
      .join('%0A');

    const total = this.total();

    const message =
`Hola, quiero finalizar esta compra:%0A%0A${productList}%0A%0ATotal: $${total}`;

    const url = `https://wa.me/${phone}?text=${message}`;

    window.open(url, '_blank');
  }

}
