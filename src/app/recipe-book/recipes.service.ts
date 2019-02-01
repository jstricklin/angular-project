import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
export class RecipesService {

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test',
            'https://www.eatwell101.com/wp-content/uploads/2017/08/best-butter-chicken-recipe-2.jpg'),
        new Recipe('A Test Recipe v2', 'This is simply another test',
            'https://www.eatwell101.com/wp-content/uploads/2017/08/best-butter-chicken-recipe-2.jpg'),
    ];

    getRecipes() {
        // below returns copy of array
        return this.recipes.slice();
    }
}
