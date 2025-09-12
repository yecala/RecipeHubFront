import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe-service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-list-component',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule],
  templateUrl: './recipe-list-component.html',
  styleUrls: ['./recipe-list-component.scss'] // 👈 CORREGIDO (plural)
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipeService.getAll().subscribe({
      next: (data) => {
        this.recipes = data;
        console.log('📌 Recipes loaded:', this.recipes); // 👈 Para debug
      },
      error: (err) => console.error('Error loading recipes', err)
    });
  }

  goToDetail(id: number) {
    this.router.navigate(['/recipes', id]);
  }

  getImageUrl(imageKey: string): string {
    return `http://localhost:8080/api/files/${imageKey}`;
  }
}
