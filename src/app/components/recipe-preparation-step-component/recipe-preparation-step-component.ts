// recipe-preparation-step.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-recipe-preparation-step',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './recipe-preparation-step-component.html',
})
export class RecipePreparationStepComponent {
  @Input() parentForm!: FormGroup;

  get steps(): FormArray {
    return this.parentForm.get('preparation') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  addStep() {
    this.steps.push(this.fb.group({ description: [''] }));
  }

  removeStep(index: number) {
    this.steps.removeAt(index);
  }
}
