import { TestBed } from '@angular/core/testing';

import { LibraryService } from './library.service';

describe('LibraryService', () => {
  let service: LibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return three books', () => {
    const books = service.getLatestThree();
    expect(books.length).toEqual(3);
    expect(books.at(0)?.title).toEqual("Guards! Guards!");
    expect(books.at(1)?.title).toEqual("Uprooted");
    expect(books.at(2)?.title).toEqual("Ancillary Justice");
  })

});
