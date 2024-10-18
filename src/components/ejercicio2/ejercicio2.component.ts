import { Component } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {interval} from 'rxjs';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    MatGridListModule,
    MatButtonModule
  ],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})

export class Ejercicio2Component {
  hours: number = new Date().getHours();
  minutes: number = new Date().getMinutes();
  seconds: number = new Date().getSeconds();
  interval: any;
  clearInterval : any = () => {
    clearInterval(this.interval);
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.hours = new Date().getHours();
      this.minutes = new Date().getMinutes();
      this.seconds = new Date().getSeconds();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
