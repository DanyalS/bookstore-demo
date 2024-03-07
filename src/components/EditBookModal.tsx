import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editBook } from "../actions/bookActions";
import { Book } from "../types/types";

interface Props {
  book: Book;
}

const EditBookModal: React.FC<Props> = ({ book }) => {
  const [name, setName] = useState(book.name);
  const [price, setPrice] = useState(String(book.price));
  const [category, setCategory] = useState(book.category);
  const [description, setDescription] = useState(book.description);

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const editedBook: Book = {
      id: book.id,
      name,
      price: parseFloat(price),
      category,
      description,
    };

    dispatch(editBook(editedBook));
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditBookModal;
