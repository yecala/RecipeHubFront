// recipe-ingredients-step.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-recipe-ingredients-step',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './recipe-ingredients-step-component.html',
})
export class RecipeIngredientsStepComponent {
  @Input() parentForm!: FormGroup;

  get ingredients(): FormArray {
    return this.parentForm.get('ingredients') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  addIngredient() {
    this.ingredients.push(
      this.fb.group({
        ingredientId: [''],
        quantity: [''],
      })
    );
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }
}
