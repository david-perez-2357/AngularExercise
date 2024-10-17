import { Routes } from '@angular/router';
import {Ejercicio1Component} from '../components/ejercicio1/ejercicio1.component';

export const routes: Routes = [
  {path: '', redirectTo: 'ejercicio1', pathMatch: 'full'},
  {'path': 'ejercicio1', 'component': Ejercicio1Component},
];
