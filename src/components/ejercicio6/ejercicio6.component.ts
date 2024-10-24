import {Component, inject, output} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {MatDialog, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInput} from '@angular/material/input';
import {Dialog} from '@angular/cdk/dialog';

interface Product {
  image: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-ejercicio6',
  standalone: true,
  imports: [
    MatButton,
    NgIf,
    NgOptimizedImage,
    NgForOf
  ],
  templateUrl: './ejercicio6.component.html',
  styles: ``
})

export class Ejercicio6Component {
  products : Product[] = [];
  readonly dialog = inject(MatDialog);

  addProduct(product: Product) {
    this.products.push(product);
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateProduct);
    dialogRef.componentInstance.productAdded.subscribe((product: Product) => {
      this.addProduct(product);
    });
  }

  deleteProduct(product: Product) {
    this.products = this.products.filter(p => p !== product);
  }
}

@Component({
  selector: 'create-product',
  standalone: true,
  templateUrl: './create-product.html',
  imports: [
    MatDialogContent,
    MatDialogTitle,
    MatLabel,
    MatFormField,
    MatDialogActions,
    MatButton,
    MatInput,
    FormsModule
  ]
})

export class CreateProduct {
  product: Product = {
    image: '',
    name: '',
    price: 0
  };
  productAdded = output<Product>();
  readonly dialogRef = inject(MatDialogRef<Dialog>);

  onNoClick(): void {
    this.dialogRef.close();
  }

  createProduct() {
    console.log(this.product);
    if (!this.product.image.trim() || !this.product.name.trim() || !this.product.price) return;
    this.productAdded.emit(this.product);
    this.product = {
      image: '',
      name: '',
      price: 0
    };
    this.onNoClick();
  }

}



