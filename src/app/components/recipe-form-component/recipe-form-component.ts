// recipe-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormArray, Validators } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { RecipeBasicStepComponent } from '../recipe-basic-step-component/recipe-basic-step-component';
import { RecipeIngredientsStepComponent } from '../recipe-ingredients-step-component/recipe-ingredients-step-component';
import { RecipePreparationStepComponent } from '../recipe-preparation-step-component/recipe-preparation-step-component';

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatStepperModule,
    MatButtonModule,
    RecipeBasicStepComponent,
    RecipeIngredientsStepComponent,
    RecipePreparationStepComponent,
  ],
  templateUrl: './recipe-form-component.html',
})
export class RecipeFormComponent {
  recipeForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.recipeForm = this.fb.group({
      basic: this.fb.group({
        title: ['', Validators.required],
        description: [''],
      }),
      ingredients: this.fb.array([]),
      preparation: this.fb.array([]),
    });
  }

  get ingredients() {
    return this.recipeForm.get('ingredients');
  }

  get preparation() {
    return this.recipeForm.get('preparation');
  }

  onSubmit(): void {
    console.log(this.recipeForm.value);
  }
}
