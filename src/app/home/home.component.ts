import { Component } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { Book } from '../types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  latestThree: Book[];

  constructor (private libraryService: LibraryService) {
    this.latestThree = libraryService.getLatestThree()
  }
}
