import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {MatSnackBar} from '@angular/material/snack-bar';

interface Operador {
  name: string;
  execute: (a: number, b: number) => number;
}

@Component({
  selector: 'app-ejercicio7',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    FormsModule,
    MatOption,
    MatSelect
  ],
  templateUrl: './ejercicio7.component.html',
  styles: ``
})

export class Ejercicio7Component {
  private _snackBar = inject(MatSnackBar);
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;
  operadores: Operador[] = [
    {
      name: 'Sumar',
      execute: (a, b) => a + b
    },
    {
      name: 'Restar',
      execute: (a, b) => a - b
    },
    {
      name: 'Multiplicar',
      execute: (a, b) => a * b
    },
    {
      name: 'Dividir',
      execute: (a, b) => a / b
    }
  ];
  operadorActual: Operador = this.operadores[0];

  calcular() {
    this.resultado = this.operadorActual.execute(this.numero1, this.numero2);
    this._snackBar.open('El resultado es ' + this.resultado, 'Cerrar', {
      duration: 2000,
      horizontalPosition: 'center',
      panelClass: ['snackbar']
    });
  }
}
