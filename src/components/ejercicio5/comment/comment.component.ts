import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatIcon
  ],
  templateUrl: './comment.component.html',
  styles: ``
})
export class CommentComponent {
}
