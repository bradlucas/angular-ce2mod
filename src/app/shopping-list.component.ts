import { Component, Input } from '@angular/core';

@Component({
  selector: 'shopping-list',
  template: `
    <h1>Shopping List</h1>
    <ul>
      <li *ngFor="let item of shopping_list;"
          (click)="deleteItem(item)">
        {{item}}
      </li>
      </ul> 
    <input  [(ngModel)] = "newItem"/>
    <button (click)="addNewItem()" >Add</button>
  `,
  styles: [``],
})
export class ShoppingListComponent {
  shopping_list = ['Milk', 'Eggs'];

  newItem = '';

  addNewItem() {
    this.shopping_list.push(this.newItem);
    this.newItem = '';
  }

  deleteItem(item) {
    this.shopping_list = this.shopping_list.filter(cur => {
      return cur != item
    })
  }
}
