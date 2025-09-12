import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../models/recipe';
import { RecipeIngredient } from '../../models/recipeIngredient';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RecipeService } from '../../services/recipe-service';
import { RecipeIngredientService } from '../../services/recipe-ingredient-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-detail-component',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule, MatListModule],
  templateUrl: './recipe-detail-component.html',
  styleUrl: './recipe-detail-component.scss'
})

export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  ingredients: RecipeIngredient[] = [];

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private recipeIngredientService: RecipeIngredientService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService.getById(id).subscribe(recipe => this.recipe = recipe);
    this.recipeIngredientService.getByRecipe(id).subscribe(ings => this.ingredients = ings);
  }

  getImageUrl(imageKey: string): string {
    return `http://localhost:8080/api/files/${imageKey}`;
  }
}
