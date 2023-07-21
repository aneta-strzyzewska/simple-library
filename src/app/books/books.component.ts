import { Component } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { Book } from '../types';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  books: Book[] = [];

  constructor(private libraryService: LibraryService) {}

  ngOnInit() {
    this.books = this.libraryService.getBooks();
  }

}
