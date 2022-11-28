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
  

  // funcion wishlist
  add2Wishlist(sneaker: Wish):void {
    debugger;
    let item = this._cartList.find((v1) => v1.name == sneaker.name)!;
    if (!item) {
      this._wishlist.push({... sneaker});
    } 
    this.wishlist.next(this._wishlist);
  }

  deleteWishlist(sneaker: Wish):void {
    let item = this._wishlist.find((v1) => v1.name == sneaker.name)
    const index = this._wishlist.indexOf(item!);
    if (index > -1) { // only splice array when item is found
      this._wishlist.splice(index, 1); // 2nd parameter means remove one item only
    }
    this.wishlist.next(this._wishlist);
  }


}
