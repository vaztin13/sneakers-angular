import { Injectable } from '@angular/core';
import { Sneaker } from './models/sneaker';

@Injectable({
  providedIn: 'root'
})

export class SneakerCartService {
  
  cartList: Sneaker[] = [];

  addToCart(sneaker: Sneaker) {
    let item: Sneaker = this.cartList.find((v1) => v1.name == sneaker.name)!;
    if (!item) {
      this.cartList.push({... sneaker})
    } else {
      item.quantity += sneaker.quantity;
    }
  }

  constructor() { }
}
