import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Wish } from '../models/wish';
import { WishService } from '../wish.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wishlistList$: Observable<Wish[]>;


  constructor(private wishlist: WishService, private cart: WishService) {
    this.wishlistList$ = cart.wishlist.asObservable();
   }

  ngOnInit(): void {
  }



}
