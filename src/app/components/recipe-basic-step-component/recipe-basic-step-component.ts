import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-recipe-basic-step',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIcon],
  templateUrl: './recipe-basic-step-component.html',
  styleUrls: ['./recipe-basic-step-component.scss'] 
})
export class RecipeBasicStepComponent {
  @Input() parentForm!: FormGroup;

  // 👇 Esto fuerza el tipo para que Angular no se queje en el template
  get basicGroup(): FormGroup {
    return this.parentForm.get('basic') as FormGroup;
  }

  previewUrl: string | ArrayBuffer | null = null;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      // Guardar en el formControl
      this.parentForm.get('basic')?.get('image')?.setValue(file);

      // Mostrar preview
      const reader = new FileReader();
      reader.onload = () => (this.previewUrl = reader.result);
      reader.readAsDataURL(file);
    }
  }
}
