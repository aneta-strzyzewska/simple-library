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

  constructor (private libraryService: LibraryService, private route: ActivatedRoute) { }

  ngOnInit() {
    const isbn = this.route.snapshot.paramMap.get('isbn');
    if (isbn) {
      this.book = this.libraryService.getByIsbn(isbn);
    }

    if (!this.book) {
      console.error("Book not found")
    }
  }
}
