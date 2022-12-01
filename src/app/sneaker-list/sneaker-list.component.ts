import { Component, OnInit } from '@angular/core';
import { Sneaker } from '../models/sneaker';
import { SneakerCartService } from '../sneaker-cart.service';

@Component({
  selector: 'app-sneaker-list',
  templateUrl: './sneaker-list.component.html',
  styleUrls: ['./sneaker-list.component.scss']
})
export class SneakerListComponent implements OnInit {

  sneakers: Sneaker[] = [
  {
    name : "Nike Air Force 1 Low Icon Clash White",
    type : "air",
    price : 200,
    stock : 3,
    image : "https://raw.githubusercontent.com/vaztin13/sneakers-angular/master/src/assets/img/air-force-low-icon.jpg",
    quantity: 1
  },
  {
    name : "Jordan 4 Retro Royalty",
    type : "jordan",
    price : 400,
    stock : 1,
    image : "https://raw.githubusercontent.com/vaztin13/sneakers-angular/master/src/assets/img/jordan-4-royalty.jpg",
    quantity: 1
  },
  {
    name : "Nike Air More Uptempo Scottie Pippen",
    type : "air",
    price : 190,
    stock : 2,
    image : "https://raw.githubusercontent.com/vaztin13/sneakers-angular/master/src/assets/img/air-uptempo-scottie.jpg",
    quantity: 1
  },
  {
    name : "Jordan 4 Retro Pure Money",
    type : "jordan",
    price : 210,
    stock : 0,
    image : "https://raw.githubusercontent.com/vaztin13/sneakers-angular/master/src/assets/img/jordan-pure-money.jpg",
    quantity: 1
  },
  {
    name : "Jordan 1 Mid Triple White",
    type : "jordan",
    price : 223,
    stock : 5,
    image : "https://raw.githubusercontent.com/vaztin13/sneakers-angular/master/src/assets/img/jordan-triple-white.jpg",
    quantity: 1
  },
  {
    name : "Yeezy Boost 350 V2 Zebra",
    type : "yeezy",
    price : 300,
    stock : 0,
    image : "https://raw.githubusercontent.com/vaztin13/sneakers-angular/master/src/assets/img/yeezy-350.jpg",
    quantity: 1
  },
  {
    name : "Jordan 11 Retro Playoffs Bred",
    type : "jordan",
    price : 340,
    stock : 1,
    image : "https://raw.githubusercontent.com/vaztin13/sneakers-angular/master/src/assets/img/jordan-playoff.jpg",
    quantity: 1
  },
  {
    name : "Jordan 1 Retro High OG Hyper Royal",
    type : "jordan",
    price : 360,
    stock : 4,
    image : "https://raw.githubusercontent.com/vaztin13/sneakers-angular/master/src/assets/img/jordan-high-og.jpg",
    quantity: 1
  },
];
  


  constructor(private cart : SneakerCartService) { 
  }

  ngOnInit(): void {
  }

  addToCart(sneaker: Sneaker): void {
    if ((sneaker.stock >= sneaker.quantity)&&(sneaker.quantity > 0)) {
      this.cart.addToCart(sneaker);
      this.cart.totalPriceItems();
      sneaker.stock -= sneaker.quantity;
      sneaker.quantity = 0;
    }
  }

  maxReachedAlert(m: string){
    alert(m);
  }


}
