import { Injectable } from '@angular/core';
import { Book } from '../types';
import { books } from './data'

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private books: Book[]

  constructor() {
    this.books = books;
  }

  getBooks(): Book[] {
    return this.books;
  }

  getLatestThree(): Book[] {
    //we are naively assuming that the books are pre-sorted
    return this.books.slice(0, 3);
  }

  getByIsbn(isbn: string): Book | undefined {
    return this.books.find((book) => book.isbn === isbn)
  }

  searchByTitle(title: string): Book | undefined {
    if (title.trim().length !== 0) {
      return this.books.find(book => book.title.toLocaleLowerCase().includes(title));
    }
    return;
  }
}
