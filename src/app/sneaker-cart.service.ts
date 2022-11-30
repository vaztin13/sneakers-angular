import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Sneaker } from './models/sneaker';
import { Wish } from './models/wish';

@Injectable({
  providedIn: 'root'
})

export class SneakerCartService {
  
  private _cartList: Sneaker[] = [];
  
  cartList: BehaviorSubject<Sneaker[]> =  new BehaviorSubject(this._cartList);

  private _totalPrice: number = 0;
  
  totalPrice: BehaviorSubject<number> = new BehaviorSubject(this._totalPrice);

  _wishlist: Wish[] = [];

  wishlist: BehaviorSubject<Wish[]> = new BehaviorSubject(this._wishlist);

  constructor() { }
  

  // funcion añadir a carrito
  addToCart(sneaker: Sneaker) {
    let item: Sneaker = this._cartList.find((v1) => v1.name == sneaker.name)!;
    if (!item) {
      this._cartList.push({... sneaker})
    } else {
      item.quantity += sneaker.quantity;
    }
    
    this.cartList.next(this._cartList);
  }


  // funcion para calc total carrito
  totalPriceItems() {
    let total = 0;
    for (let i = 0; i < this._cartList.length; i++) {
      let sneakerPrice = this._cartList[i].price * this._cartList[i].quantity ;
      total += sneakerPrice;
    }
    this._totalPrice = total;
    this.totalPrice.next(this._totalPrice);
  }
  

}
