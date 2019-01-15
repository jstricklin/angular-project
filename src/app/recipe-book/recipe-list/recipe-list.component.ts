import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test',
            'https://www.eatwell101.com/wp-content/uploads/2017/08/best-butter-chicken-recipe-2.jpg'),
        new Recipe('A Test Recipe v2', 'This is simply another test',
            'https://www.eatwell101.com/wp-content/uploads/2017/08/best-butter-chicken-recipe-2.jpg'),
    ];

  constructor() { }

  ngOnInit() {
  }

}
