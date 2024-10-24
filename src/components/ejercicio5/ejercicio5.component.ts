import {Component, inject} from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {CommentComponent} from './comment/comment.component';
import {CommentInputComponent} from './comment-input/comment-input.component';
import {NgForOf, NgIf} from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-ejercicio5',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    CommentComponent,
    CommentInputComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './ejercicio5.component.html',
})
export class Ejercicio5Component {
  comments: string[] = [];
  private _snackBar = inject(MatSnackBar);

  createComment(content: string) {
    this.comments = [content].concat(this.comments);
    this._snackBar.open('Comentario añadido', 'Cerrar', {
      duration: 2000,
      horizontalPosition: 'center',
      panelClass: ['snackbar']
    });
  }
}
