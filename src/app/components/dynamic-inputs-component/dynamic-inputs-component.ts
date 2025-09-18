import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dynamic-inputs-component',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './dynamic-inputs-component.html',
  styleUrl: './dynamic-inputs-component.scss'
})
export class DynamicInputsComponent {
  recetaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.recetaForm = this.fb.group({
      ingredientes: this.fb.array([]) // 👈 Arranca vacío
    });
  }

  get ingredientes(): FormArray {
    return this.recetaForm.get('ingredientes') as FormArray;
  }

  crearIngrediente(): FormGroup {
    return this.fb.group({
      nombre: ['', Validators.required],
      cantidad: ['', Validators.required]
    });
  }

  agregarIngrediente() {
    this.ingredientes.push(this.crearIngrediente());
  }

  eliminarIngrediente(index: number) {
    this.ingredientes.removeAt(index);
  }

  guardar() {
    console.log(this.recetaForm.value);
  }
}
