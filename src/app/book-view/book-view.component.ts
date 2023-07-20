import { Component, Input } from '@angular/core';
import { Book } from '../types';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent {
  @Input() book: Book;
}
