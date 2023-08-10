import { Component } from '@angular/core';
import { IShoppingItem } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})
export class ShoppingBasketComponent {

  items: any = [
    {desc: "Abstract picture", price: 30},
    {desc: "Mare", price: 50},
    {desc: "Food picture", price: 80},
    {desc: "Drinks and more", price: 300},
    {desc: "My first....", price: 40}
  ];
  
  total() {
    return this.items.reduce((total:any, item: any) => total + item.price, 0);
  }
  
  removeItem(item: IShoppingItem) {
    this.items = this.items.filter((i: any) => i !== item);
  }

}
