import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Sneaker } from './models/sneaker';

@Injectable({
  providedIn: 'root'
})

export class SneakerCartService {
  
  private _cartList: Sneaker[] = [];
  
  cartList: BehaviorSubject<Sneaker[]> =  new BehaviorSubject(this._cartList);

  constructor() { }
  
  addToCart(sneaker: Sneaker) {
    let item: Sneaker = this._cartList.find((v1) => v1.name == sneaker.name)!;
    if (!item) {
      this._cartList.push({... sneaker})
    } else {
      item.quantity += sneaker.quantity;
    }
    
    this.cartList.next(this._cartList);
  }


}
