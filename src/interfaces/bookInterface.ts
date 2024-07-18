/**
 * @fileoverview
 * @version
 * @module
 */

export interface IBook {
  _id?: string;
  title: string;
  author: string;
  publicationDate: Date;
  genre: string;
  summary?: string;
  ISBN: string;
}
