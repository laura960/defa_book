import { Subject } from 'rxjs';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe('A Test Recipe', 'Just a test',
  //     'https://live.staticflickr.com/4168/34641495421_038cd633ec_b.jpg',
  //     [
  //       new Ingredient('Pasta', 500),
  //       new Ingredient('vongole', 200)
  //     ]),

  //   new Recipe('A Test by Laura', 'Just a Laura test',
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVCjFJAXYIL7b0YslFA5ALoHUfhG3ZVtKJ1A&usqp=CAU',
  //     [
  //       new Ingredient('pancake', 5),
  //       new Ingredient('Blackberries', 100)
  //     ])
  // ];

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService){}

setRecipes(recipes: Recipe[]){
  this.recipes = recipes;
  this.recipesChanged.next(this.recipes.slice());
}

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
