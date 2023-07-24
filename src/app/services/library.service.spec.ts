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

  describe('getLatestThree', () => {

    it('should return three books', () => {
      const books = service.getLatestThree();
      expect(books.length).toEqual(3);
      expect(books.at(0)?.title).toEqual('Guards! Guards!');
      expect(books.at(1)?.title).toEqual('Uprooted');
      expect(books.at(2)?.title).toEqual('Ancillary Justice');
    })
  })

  describe('searchByTitle', () => {
    it('should find one book by title', () => {
      expect(service.searchByTitle('guards')?.title).toEqual('Guards! Guards!')
      expect(service.searchByTitle('ancillary')?.title).toEqual('Ancillary Justice')
      expect(service.searchByTitle('root')?.title).toEqual('Uprooted')
    })

    it('should return undefined for an empty string', () => {
      expect(service.searchByTitle('   ')).toBe(undefined);
      expect(service.searchByTitle('')).toBe(undefined);
    })
  })
  
  describe('getByIsbn', () => {
    it('should return a book for given ISBN', () => {
      expect(service.getByIsbn('9780061020643')?.title).toEqual('Guards! Guards!')
    })

    it('should return undefined for non-existing ISBN', () => {
      expect(service.getByIsbn('0000000000000')).toBe(undefined)
    })
  })

});
