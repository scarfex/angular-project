import { Recipe } from "./recipe.model";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Summer Salad",
      "Using this recipe you can prepare a delicious salad.",
      "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/epic-summer-salad.jpg"
    ),
    new Recipe(
      "Another Salad",
      "Using this recipe you can prepare a delicious salad.",
      "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/epic-summer-salad.jpg"
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
