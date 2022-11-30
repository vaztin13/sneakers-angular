import { Component, OnInit } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Sneaker } from '../models/sneaker';
import { SneakerCartService } from '../sneaker-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faCartShopping = faCartShopping;

  cartList$: Observable<Sneaker[]>;
  totalPrice$: Observable<number>;
  router: any;
  
  constructor(private cart : SneakerCartService) {
    this.cartList$ = cart.cartList.asObservable();
    this.totalPrice$ = cart.totalPrice.asObservable();
  }

  ngOnInit(): void {
  }



}
