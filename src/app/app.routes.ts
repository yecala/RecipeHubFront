import { Routes } from '@angular/router';
import { RecipeListComponent } from './components/recipe-list-component/recipe-list-component';
import { RecipeDetailComponent } from './components/recipe-detail-component/recipe-detail-component';
import { RecipeFormComponent } from './components/recipe-form-component/recipe-form-component';
import { DynamicInputsComponent } from './components/dynamic-inputs-component/dynamic-inputs-component';
import { RecipeBasicStepComponent } from './components/recipe-basic-step-component/recipe-basic-step-component';
import { RecipeIngredientsStepComponent } from './components/recipe-ingredients-step-component/recipe-ingredients-step-component';
import { RecipePreparationStepComponent } from './components/recipe-preparation-step-component/recipe-preparation-step-component';

export const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'recipes/:id', component: RecipeDetailComponent },
  { path: 'newRecipe', component: RecipeFormComponent},
  { path: 'dynamicInputs', component: DynamicInputsComponent},
  { path: 'RecipeBasicStep', component: RecipeBasicStepComponent},
  { path: 'RecipeIngredientsStep', component: RecipeIngredientsStepComponent},
  { path: 'RecipePreparationStep', component: RecipePreparationStepComponent},
];
