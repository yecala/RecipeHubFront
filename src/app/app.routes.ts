import { Routes } from '@angular/router';
import { RecipeListComponent } from './components/recipe-list-component/recipe-list-component';
import { RecipeDetailComponent } from './components/recipe-detail-component/recipe-detail-component';

export const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'recipes/:id', component: RecipeDetailComponent }
];
