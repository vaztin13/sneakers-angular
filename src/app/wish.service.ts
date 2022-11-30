import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Sneaker } from './models/sneaker';
import { Wish } from './models/wish';

@Injectable({
  providedIn: 'root'
})
export class WishService {
  
  
  public _wishlist: Wish[] = [];
  wishlist: BehaviorSubject<Wish[]> = new BehaviorSubject(this._wishlist);
  
  constructor() { }
  
  addToWishlistService(sneaker: Wish):void {
    let item = this._wishlist.find((v1) => v1.name == sneaker.name)
    if (!item) {
      this._wishlist.push({... sneaker});
    } 
    this.wishlist.next(this._wishlist);
  }

  removeFromWishlistService(sneaker: Wish):void {
    let item = this._wishlist.find((v1) => v1.name == sneaker.name)
    const index = this._wishlist.indexOf(item!);
    if (index > -1) { 
      this._wishlist.splice(index, 1); 
    }
    this.wishlist.next(this._wishlist);
  }

}
