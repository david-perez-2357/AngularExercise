import { Component } from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

const name = 'David';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    FormsModule
  ],
  templateUrl: './ejercicio1.component.html',
})
export class Ejercicio1Component {
  name: string = name;
}
