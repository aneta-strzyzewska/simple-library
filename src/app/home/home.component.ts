import { Component } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { Book } from '../types';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  latestThree: Book[];
  searchResult: Book | undefined;

  constructor (
    private libraryService: LibraryService, 
    private route: ActivatedRoute, 
    private router: Router
    ) { }

  ngOnInit() {
    this.latestThree = this.libraryService.getLatestThree();

    const title = this.route.snapshot.paramMap.get('title');
    if (title) {
      this.searchResult = this.libraryService.searchByTitle(title);
    }
  }

  searchByTitle(title: string) {
    this.router.navigate([`home/${title}`])
    this.searchResult = this.libraryService.searchByTitle(title);
  }

}
