import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Just a test',
      'https://live.staticflickr.com/4168/34641495421_038cd633ec_b.jpg',
      [
        new Ingredient('Pasta', 500),
        new Ingredient('vongole', 200)
      ]),

    new Recipe('A Test by Laura', 'Just a Laura test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVCjFJAXYIL7b0YslFA5ALoHUfhG3ZVtKJ1A&usqp=CAU',
      [
        new Ingredient('pancake', 5),
        new Ingredient('Blackberries', 100)
      ])
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

}
