import { Component } from '@angular/core';
import {MatChipListbox, MatChipOption, MatChipSet} from '@angular/material/chips';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [
    MatChipListbox,
    MatChipOption,
    MatChipSet,
    MatFormField,
    MatLabel,
    MatInput,
    FormsModule
  ],
  templateUrl: './ejercicio3.component.html',
})
export class Ejercicio3Component {
  tasks: string[] = ['Pasear al perro', 'Hacer la compra', 'Estudiar Angular'];
  newTask: string = '';

  addTask(task: string) {
    if (task === '') {
      return;
    }
    this.tasks.push(task);
    this.newTask = '';
  }
}
