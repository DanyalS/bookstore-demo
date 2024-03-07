import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, Book } from "../types/types"; // Import RootState type

import { deleteBook } from "../actions/bookActions";

const BookList: React.FC = () => {
  const books: Book[] = useSelector((state: RootState) => state); // Specify type of books

  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteBook(id));
  };

  return (
    <div>
      <ul>
        {books.map(
          (
            book: Book // Specify type of book
          ) => (
            <li key={book.id}>
              {book.name} - {book.price} - {book.category}
              <button onClick={() => handleDelete(book.id)}>Delete</button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default BookList;
