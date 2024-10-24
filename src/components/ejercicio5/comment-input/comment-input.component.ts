import {Component, output} from '@angular/core';
import {comment} from 'postcss';
import {FormsModule} from '@angular/forms';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-comment-input',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    NgIf
  ],
  templateUrl: './comment-input.component.html',
  styles: ``
})

export class CommentInputComponent {
  comment : string = '';
  commentAdded = output<string>();

  addComment() {
    if (!this.comment.trim()) return;
    this.commentAdded.emit(this.comment);
    this.comment = '';
  }
}
