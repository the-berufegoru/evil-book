/**
 * @fileoverview
 * @version
 * @module
 */
import { IAuthor } from '../interfaces';

interface IAuthorDto {
  _id: string;
  firstName: string;
  lastName: string;
}

const toAuthorDto = (author: IAuthor): IAuthorDto => ({
  _id: author['_id'],
  firstName: author['firstName'],
  lastName: author['lastName'],
});

export { IAuthorDto, toAuthorDto };
