import { Routes } from '@angular/router';
import {Ejercicio1Component} from '../components/ejercicio1/ejercicio1.component';
import {Ejercicio2Component} from '../components/ejercicio2/ejercicio2.component';
import {Ejercicio3Component} from '../components/ejercicio3/ejercicio3.component';
import {Ejercicio4Component} from '../components/ejercicio4/ejercicio4.component';
import {Ejercicio5Component} from '../components/ejercicio5/ejercicio5.component';
import {Ejercicio6Component} from '../components/ejercicio6/ejercicio6.component';

export const routes: Routes = [
  {path: '', redirectTo: 'ejercicio1', pathMatch: 'full'},
  {'path': 'ejercicio1', 'component': Ejercicio1Component},
  {'path': 'ejercicio2', 'component': Ejercicio2Component},
  {'path': 'ejercicio3', 'component': Ejercicio3Component},
  {'path': 'ejercicio4', 'component': Ejercicio4Component},
  {'path': 'ejercicio5', 'component': Ejercicio5Component},
  {'path': 'ejercicio6', 'component': Ejercicio6Component},
  {'path': '**', 'component': Ejercicio1Component}
];
