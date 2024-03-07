import { Book } from "../types/types";

export const ADD_BOOK = "ADD_BOOK";
export const EDIT_BOOK = "EDIT_BOOK";
export const DELETE_BOOK = "DELETE_BOOK";

export const addBook = (book: Book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const editBook = (book: Book) => ({
  type: EDIT_BOOK,
  payload: book,
});

export const deleteBook = (id: number) => ({
  type: DELETE_BOOK,
  payload: id,
});
