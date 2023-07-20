import { Injectable } from '@angular/core';
import { Book } from '../types';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  books: Book[] = []

  constructor() { }

  getBooks(): Book[] {
    return this.books;
  }

  getLatestThree(): Book[] {
    //we are naively assuming that the books are pre-sorted
    return this.books.slice(0, 3);
  }

  searchByTitle(title: string): Book | undefined {
    return this.books.find(book => book.title.toLocaleLowerCase().includes(title))
  }
}
