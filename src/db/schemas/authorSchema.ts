/**
 * @fileoverview
 * @version
 * @module
 */
import mongoose, { Document, Schema } from 'mongoose';
import { IAuthor } from '../../interfaces';

const AuthorSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
      default: null,
    },
    nationality: {
      type: String,
      default: null,
    },
    bio: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Author = mongoose.model<IAuthor & Document>('Author', AuthorSchema);

export default Author;
