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
  styleUrls: ['./recipe-ingredients-step-component.scss'] 
})
export class RecipeIngredientsStepComponent {
  @Input() parentForm!: FormGroup;


  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    // nos aseguramos de que exista el array
    if (!this.parentForm.get('ingredients')) {
      this.parentForm.addControl('ingredients', this.fb.array([]));
    }
    this.addIngredient();
  }
    // 👇 Esto fuerza el tipo para que Angular no se queje en el template
  get basicGroup(): FormGroup {
    return this.parentForm.get('basic') as FormGroup;
  }

  get ingredients(): FormArray {
    return this.parentForm.get('ingredients') as FormArray;
  }

  addIngredient(): void {
    this.ingredients.push(
      this.fb.group({
        ingredientId: [''],
        quantity: [''],
      })
    );
  }

  removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }

  // 👇 trackBy para evitar recrear los controles en el DOM
  trackByIndex(index: number): number {
    return index;
  }
}
