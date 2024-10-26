import {Component, numberAttribute, output} from '@angular/core';
import {Input} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardTitle
} from '@angular/material/card';
import {MatButton, MatMiniFabButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';

interface Product {
  name: string;
  price: number;
  image?: string;
  quantity: number;
}

// class ProductImpl implements Product {
//   price = 0;
//   quantity = 0;
//   name: string = 'Nombre del producto';
//   image: string|undefined = 'https://img.freepik.com/vector-gratis/caja-papel-realista-aislada_1308-116513.jpg?t=st=1729868050~exp=1729871650~hmac=b4840c1298eb5a9ee6275a1bf3556b6be481d8ba05c2e4b1136d9806deb162a6&w=740';
//
//   constructor(price: number, quantity: number, name: string, image: string|undefined) {
//     this.price = price;
//     this.quantity = quantity;
//     this.name = name;
//     this.image = image
//   }
// }

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardActions,
    MatButton,
    MatCardContent,
    MatIcon,
    MatMiniFabButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatCardImage
  ],
  templateUrl: './product.component.html',
  styles: ``
})
export class ProductComponent {
  @Input() product: Product = {
    name: 'Nombre del producto',
    price: 0,
    image: 'https://img.freepik.com/vector-gratis/caja-papel-realista-aislada_1308-116513.jpg?t=st=1729868050~exp=1729871650~hmac=b4840c1298eb5a9ee6275a1bf3556b6be481d8ba05c2e4b1136d9806deb162a6&w=740',
    quantity: 0
  }

  increaseQuantity() {
    this.product.quantity++;
  }

  decreaseQuantity() {
    if (this.product.quantity > 0) {
      this.product.quantity--;
    }
  }
}
