import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { RecipeItemComponent } from "./recipe/recipe-item/recipe-item.component";
import { RecipeDetailComponent } from "./recipe/recipe-detail/recipe-detail.component";
import { RecipeListComponent } from "./recipe/recipe-list/recipe-list.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeListComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
