import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibraryService } from '../../services/library.service';
import { Book } from '../../types';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  book: Book | undefined;
  isbn: string | null;

  constructor (private libraryService: LibraryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.isbn = this.route.snapshot.paramMap.get('isbn');
    if (this.isbn) {
      this.book = this.libraryService.getByIsbn(this.isbn);
    }

    if (!this.book) {
      console.error("Book not found")
    }
  }
}
