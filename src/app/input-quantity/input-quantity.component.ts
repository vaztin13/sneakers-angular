import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-quantity',
  templateUrl: './input-quantity.component.html',
  styleUrls: ['./input-quantity.component.scss']
})
export class InputQuantityComponent implements OnInit {

  error: Boolean = false;

  @Input()
  quantity: number;
  @Input()
  max: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  setQuantity(action: string) {
    if (action === 'sum') {
      if (this.quantity < this.max) {
        this.quantity++;
        this.error = false;
        this.quantityChange.emit(this.quantity);
      }
      else {
        this.maxReached.emit("Este es el maximo de stock" );
      }
    }
    if (action === 'res') {
      if (this.quantity > 1) {
        this.quantity--;
      }
    }


  }

  quantityChangeInput() {
    if (isNaN(Number(this.quantity))) {
      this.error = false;
      this.quantity = 0;
      this.quantityChange.emit(this.quantity);
    }
    else {
      if (Number(this.quantity) > this.max) {
        this.error = true;
      }
      else {
        this.quantity = Number(this.quantity);
        this.quantityChange.emit(this.quantity);
      }
    }
  }

}
