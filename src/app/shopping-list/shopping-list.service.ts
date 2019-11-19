import { Ingredient } from "./../shared/ingredients.model";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  private ingredients = [new Ingredient("Tomato", 10), new Ingredient("Avacado", 3)];
  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
