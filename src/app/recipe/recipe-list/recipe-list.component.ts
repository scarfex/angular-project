import { Recipe } from "./../recipe.model";
import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
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
  @Output() theRecipe = new EventEmitter<Recipe>();
  ngOnInit() {}

  onRecipeSelect(recipe: Recipe) {
    this.theRecipe.emit(recipe);
  }
}
