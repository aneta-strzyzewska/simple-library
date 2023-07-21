import { Injectable } from '@angular/core';
import { Book } from '../types';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private books: Book[] = [
    { 
      title: 'Guards! Guards!', 
      author: 'Terry Pratchett', 
      cover: '', 
      summary: `This is where the dragons went. They lie... not dead, not asleep, but... dormant. And although the space they occupy isn't like normal space, nevertheless they are packed in tightly. They could put you in mind of a can of sardines, if you thought sardines were huge and scaly. And presumably, somewhere, there's a key...`, 
      isbn: '9780061020643' 
    },
    { 
      title: 'Uprooted', 
      author: 'Naomi Novik', 
      cover: '', 
      summary: `“Our Dragon doesn't eat the girls he takes, no matter what stories they tell outside our valley. We hear them sometimes, from travelers passing through. They talk as though we were doing human sacrifice, and he were a real dragon. Of course that's not true: he may be a wizard and immortal, but he's still a man, and our fathers would band together and kill him if he wanted to eat one of us every ten years. He protects us against the Wood, and we're grateful, but not that grateful.”`, 
      isbn: '9780804179034' },
    { 
      title: 'Ancillary Justice', 
      author: 'Ann Leckie', 
      cover: '', 
      summary: `On a remote, icy planet, the soldier known as Breq is drawing closer to completing her quest. Once, she was the Justice of Toren - a colossal starship with an artificial intelligence linking thousands of soldiers in the service of the Radch, the empire that conquered the galaxy. Now, an act of treachery has ripped it all away, leaving her with one fragile human body, unanswered questions, and a burning desire for vengeance.`, 
      isbn: '9780316246620' },
    { title: '', author: '', cover: '', summary: ``, isbn: '' },
    { title: '', author: '', cover: '', summary: ``, isbn: '' },
    { title: '', author: '', cover: '', summary: ``, isbn: '' },
    { title: '', author: '', cover: '', summary: ``, isbn: '' },
    { title: '', author: '', cover: '', summary: ``, isbn: '' },
    { title: '', author: '', cover: '', summary: ``, isbn: '' },
    { title: '', author: '', cover: '', summary: ``, isbn: '' },
  ]

  constructor() { }

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
