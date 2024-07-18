/**
 * @fileoverview
 * @version
 * @module
 */
import mongoose, { Document, Schema } from 'mongoose';
import { IBook } from '../../interfaces';

const BookSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'Author',
      required: true,
    },
    publicationDate: {
      type: Date,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      default: null,
    },
    ISBN: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model<IBook & Document>('Book', BookSchema);

export default Book;
