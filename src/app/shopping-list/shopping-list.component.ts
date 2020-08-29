import { LoggingService } from './../logging.service';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-shopping-list',
    templateUrl: 'shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit, OnDestroy{
    ingredients: Ingredient[];
    private igChangeSub: Subscription;

    constructor(private slService: ShoppingListService, private loggingService: LoggingService){

    }

    ngOnInit() {
      this.ingredients = this.slService.getIngredients();
      this.igChangeSub = this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
      this.loggingService.printLog('Hello form Shopping List');

    }

    ngOnDestroy(): void {
      this.igChangeSub.unsubscribe();
    }

    onEditItem(index: number): void {
      this.slService.startedEditing.next(index);
    }

}
