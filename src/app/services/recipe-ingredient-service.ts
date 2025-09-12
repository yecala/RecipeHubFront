import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeIngredient } from '../models/recipeIngredient';

@Injectable({
  providedIn: 'root'
})
export class RecipeIngredientService {
  private apiUrl = 'http://localhost:8080/api/recipe-ingredients';

  constructor(private http: HttpClient) {}

  getByRecipe(recipeId: number): Observable<RecipeIngredient[]> {
    return this.http.get<RecipeIngredient[]>(`${this.apiUrl}/recipe/${recipeId}/details`);
  }

  create(recipeIngredient: RecipeIngredient): Observable<RecipeIngredient> {
    return this.http.post<RecipeIngredient>(this.apiUrl, recipeIngredient);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
