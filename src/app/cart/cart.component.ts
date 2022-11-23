import { Component, OnInit } from '@angular/core';
import { SneakerCartService } from '../sneaker-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cart : SneakerCartService) { }

  ngOnInit(): void {
  }

}
