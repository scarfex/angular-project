import { Ingredient } from "./../shared/ingredients.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients = [new Ingredient("Tomato", 10), new Ingredient("Avacado", 3)];
  constructor() {}

  ngOnInit() {}
}
