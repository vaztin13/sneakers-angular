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
  
  constructor(private cart : SneakerCartService) {
    this.cartList$ = cart.cartList.asObservable();
   }

  ngOnInit(): void {
  }

}
