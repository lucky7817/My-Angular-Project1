import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent {

  @Input() item: any;
  @Output() onRemove = new EventEmitter<never>();

  constructor() {}
  
  remove() {
    this.onRemove.emit();
  }

}
