import { Component } from '@angular/core';

@Component({
  // select: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html', // you can put real html here
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  ingredients: string[] = [];
  result: string;
  isCooked = false;

  addIngredient(p1: string) {
    if (!this.isCooked) {
      this.ingredients.push(p1);
    }
  }

  clear() {
    this.result = null;
    this.ingredients = [];
    this.isCooked = false;
  }

  cook() {
    if ((this.ingredients.includes('bread') && this.ingredients.includes('sausage') && this.ingredients.includes('lettuce')) || (this.ingredients.includes('bagel') && this.ingredients.includes('steak') && this.ingredients.includes('tomato')) || (this.ingredients.includes('english muffin') && this.ingredients.includes('egg') && this.ingredients.includes('avocado'))) {
      this.result = 'Yummy! Good Choice!';
    } else {
      this.result = 'Hmmm, The Receipt is not Supported Yet!';
    }
    this.isCooked = true;
  }
}
