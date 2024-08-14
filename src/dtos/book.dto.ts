/**
 * @fileoverview
 * @version
 * @module
 */
import { IBook } from '../interfaces';

interface IBookDto {
  _id: string;
  title: string;
  publicationDate: Date;
  genre: string;
  summary: string;
  ISBN: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  };
}

const toBookDto = (book: IBook): IBookDto => ({
  _id: book['_id'],
  title: book['title'],
  publicationDate: book['publicationDate'],
  genre: book['genre'],
  summary: book['summary'],
  ISBN: book['ISBN'],
  author: {
    _id: book['author']['_id'],
    firstName: book['author']['firstName'],
    lastName: book['author']['lastName'],
  },
});

export { IBookDto, toBookDto };
