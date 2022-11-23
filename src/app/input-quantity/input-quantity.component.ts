import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-quantity',
  templateUrl: './input-quantity.component.html',
  styleUrls: ['./input-quantity.component.scss']
})
export class InputQuantityComponent implements OnInit {

  @Input()
  quantity: number;
  @Input()
  max: number;
  
  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  setQuantity(action: string ){
    if(action === 'sum'){
      if(this.quantity < this.max){
        this.quantity++;
        this.maxReached.emit(false);
      }
      else {
        this.maxReached.emit(true)
      }
    }
    if(action === 'res'){
      if(this.quantity > 0){
        this.quantity--;
        this.maxReached.emit(false);  
      }
    }

    this.quantityChange.emit(this.quantity);
    /* if(action === 'inp'){
      event.preventDefault();
      const val = event.target.value; 
      console.log(val)
      if((val < item.stock)&&(val > 0)){
        item.quantity = val;
      }
    } */
  }

}
