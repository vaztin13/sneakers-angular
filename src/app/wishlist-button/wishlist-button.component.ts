import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Wish } from '../models/wish';
import { WishService } from '../wish.service';

@Component({
  selector: 'app-wishlist-button',
  templateUrl: './wishlist-button.component.html',
  styleUrls: ['./wishlist-button.component.scss']
})
export class WishlistButtonComponent implements OnInit {

  constructor(private wishlist: WishService) { }

  @Input()
  image!: string;

  @Input()
  name!: string;

  @Input()
  src: string = 'assets/img/addIcon.svg';

  @Output()
  srcChange: EventEmitter<string> = new EventEmitter<string>();
  
  ngOnInit(): void {
    this.start();
  }


  wishlistSneaker():void {
    if (this.src == 'assets/img/addIcon.svg') {
      this.src = 'assets/img/check.svg';
      this.srcChange.emit(this.src);
      this.addToWishlist();
  } else {
      this.src = 'assets/img/addIcon.svg';
      this.srcChange.emit(this.src);
      this.removeFromWishlist();
    }
  }

  addToWishlist(): void {
    let sneaker: Wish = { image: this.image, name: this.name };
    this.wishlist.addToWishlistService(sneaker);
  }

  removeFromWishlist(): void {
    let sneaker: Wish = { image: this.image, name: this.name };
    this.wishlist.removeFromWishlistService(sneaker);
  }

  start() {
    for (let index = 0; index < this.wishlist._wishlist.length; index++) {
      if (this.wishlist._wishlist[index].name == this.name) {
        this.src = 'assets/img/check.svg';
        this.srcChange.emit(this.src);
      }
    }
  }

}
