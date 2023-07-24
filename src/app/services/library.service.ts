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
    return this.books.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      }
      return 0;
    }).slice(0, 3);
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
