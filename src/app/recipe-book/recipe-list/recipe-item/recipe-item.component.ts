import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { RecipesService } from '../../recipes.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor(private recipesService: RecipesService) { }

    @Input() recipe: Recipe;

    onSelectRecipe() {
        this.recipesService.recipeSelected.emit(this.recipe);
    }

  ngOnInit() {
  }

}
