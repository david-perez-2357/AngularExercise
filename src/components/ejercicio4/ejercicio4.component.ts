import { Component } from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {MatButton} from '@angular/material/button';
import {ENTER} from '@angular/cdk/keycodes';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-ejercicio4',
  standalone: true,
  imports: [
    MatLabel,
    MatFormField,
    MatInput,
    FormsModule,
    MatProgressSpinner,
    MatButton,
    NgIf
  ],
  templateUrl: './ejercicio4.component.html',
})
export class Ejercicio4Component {
  seconds : number = 0;
  totalSeconds : number = 0;
  timerActive : boolean = false;
  interval : any;

  setTimer() {
    this.totalSeconds = this.seconds;
    this.timerActive = true;
    this.seconds--;
    this.interval = setInterval(() => {
      if (this.seconds <= 0) {
        this.clearTimer();
      } else {
        this.seconds--;
      }
    }, 1000);
  }
  clearTimer() {
    this.seconds = 0;
    this.totalSeconds = 0;
    clearInterval(this.interval);
    this.timerActive = false;
  }
}
