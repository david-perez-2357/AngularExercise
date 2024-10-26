import { Component } from '@angular/core';
import {Ejercicio7Component} from '../ejercicio7/ejercicio7.component';
import {ProductComponent} from './product/product.component';
import {of} from 'rxjs';
import {NgForOf, NgIf} from '@angular/common';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';

interface Product {
  name: string;
  price: number;
  image?: string;
  quantity: number;
}

@Component({
  selector: 'app-ejercicio8',
  standalone: true,
  imports: [
    ProductComponent,
    NgForOf,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    NgIf
  ],
  templateUrl: './ejercicio8.component.html',
  styles: ``
})
export class Ejercicio8Component {
  products: Product[] = [
    {
      name: 'Producto 1',
      price: 100,
      image: 'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202309/20/00194612300684____12__440x440.jpg',
      quantity: 0
    },
    {
      name: 'Producto 2',
      price: 200,
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-13-pro-max-graphite-2023?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1679072989055',
      quantity: 0
    },
    {
      name: 'Producto 3',
      price: 300,
      image: 'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202211/24/00194610601190____8__1200x1200.jpg',
      quantity: 0
    }
  ];

  getTotal(): number {
    return this.products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  }
}
