import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-recipe-basic-step',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './recipe-basic-step-component.html',
})
export class RecipeBasicStepComponent {
  @Input() parentForm!: FormGroup;

  // 👇 Esto fuerza el tipo para que Angular no se queje en el template
  get basicGroup(): FormGroup {
    return this.parentForm.get('basic') as FormGroup;
  }
}
