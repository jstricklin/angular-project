import { Component, OnInit, Output, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

    constructor(private shoppingListService: ShoppingListService) { }
    @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;

    onIngredientAdd() {
        const ingName = this.nameInputRef.nativeElement.value;
        const ingAmount = this.amountInputRef.nativeElement.value;
        const newIng = new Ingredient(ingName, ingAmount);
        this.shoppingListService.addIngredient(newIng);
    }

    ngOnInit() {
    }

}
