import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sneaker } from '../models/sneaker';
import { SneakerCartService } from '../sneaker-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

  cartList$: Observable<Sneaker[]>;
  totalPrice$: Observable<number>;
  
  constructor(private cart : SneakerCartService) {
    this.cartList$ = cart.cartList.asObservable();
    this.totalPrice$ = cart.totalPrice.asObservable();
   }

  ngOnInit(): void {
  }

}
