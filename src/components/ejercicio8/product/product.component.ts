import {Component, numberAttribute} from '@angular/core';
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
  @Input() name: string = 'Nombre del producto';
  @Input() price: number = 0;
  @Input() image: string|undefined = 'https://img.freepik.com/vector-gratis/caja-papel-realista-aislada_1308-116513.jpg?t=st=1729868050~exp=1729871650~hmac=b4840c1298eb5a9ee6275a1bf3556b6be481d8ba05c2e4b1136d9806deb162a6&w=740';
  @Input() quantity: number = 0;
}
