import { RecipeService } from "./recipe.service";
import { Recipe } from "./recipe.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.css"],
  providers: [RecipeService]
})
export class RecipeComponent implements OnInit {
  recipe: Recipe;
  constructor(private reciperService: RecipeService) {}

  ngOnInit() {
    this.reciperService.recipeSelected.subscribe((recipe: Recipe) => {
      this.recipe = recipe;
    });
  }
}
