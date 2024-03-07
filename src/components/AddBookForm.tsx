import React, { useState } from "react";

interface Book {
  id: number;
  name: string;
  price: string;
  category: string;
  description: string;
}

const AddBookForm: React.FC = () => {
  const [showInputs, setShowInputs] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const [bookDetails, setBookDetails] = useState<Book>({
    id: 0,
    name: "",
    price: "",
    category: "",
    description: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAddBook = () => {
    // Generate a unique id for the new book
    const id = Math.floor(Math.random() * 10000);

    const newBook: Book = { ...bookDetails, id };
    setBooks([...books, newBook]);

    // Clear input fields after adding the book
    setBookDetails({
      id: 0,
      name: "",
      price: "",
      category: "",
      description: "",
    });

    setShowInputs(false);
  };

  const handleDeleteBook = (id: number) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
  };

  const handleCancel = () => {
    setSelectedBook(null);
    setShowInputs(false);
    setBookDetails({
      id: 0,
      name: "",
      price: "",
      category: "",
      description: "",
    });
  };

  const handleSaveChanges = () => {
    if (selectedBook) {
      const updatedBooks = books.map((book) =>
        book.id === selectedBook.id
          ? {
              ...book,
              name: bookDetails.name !== "" ? bookDetails.name : book.name,
              price: bookDetails.price !== "" ? bookDetails.price : book.price,
              category: bookDetails.category !== "" ? bookDetails.category : book.category,
              description: bookDetails.description !== "" ? bookDetails.description : book.description,
            }
          : book
      );
      setBooks(updatedBooks);
      setSelectedBook(null);
      setBookDetails({
        id: 0,
        name: "",
        price: "",
        category: "",
        description: "",
      });
    }
  };

  return (
    <div>
      <div className="header-container">
        <h1>Bookstore</h1>
        <button onClick={() => setShowInputs(true)}>Add New Book</button>
      </div>
      {showInputs && (
        <div className="book-popup">
          <h3>Add New Book</h3>
          <label>Name:</label>
          <input type="text" name="name" value={bookDetails.name} onChange={handleInputChange} />

          <label>Price:</label>
          <input type="text" name="price" value={bookDetails.price} onChange={handleInputChange} />

          <label>Category:</label>
          <input type="text" name="category" value={bookDetails.category} onChange={handleInputChange} />

          <label>Description:</label>
          <input type="text" name="description" value={bookDetails.description} onChange={handleInputChange} />

          <button onClick={handleAddBook}>Add Book</button>
          <button className="button-red" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      )}
      <div>
        <h3>My Library</h3>
        <hr />
        {books.length === 0 && (
          <div className="no-books-placeholder">
            <p>No Books Added</p>
          </div>
        )}
        {books.map((book) => (
          <div
            className="book-card"
            key={book.id}
            style={{ border: selectedBook?.id === book.id ? "2px solid blue" : "1px solid black", padding: "10px", marginBottom: "10px", cursor: "pointer" }}
            onClick={() => handleBookClick(book)}
          >
            <p>
              <span>Name:</span> {book.name}
            </p>
            <p>
              <span>Price:</span> {book.price}
            </p>
            <p>
              <span>Category:</span> {book.category}
            </p>
            <p>
              <span>Description:</span> {book.description}
            </p>
            <button
              className="button-red"
              onClick={(e) => {
                e.stopPropagation(); // Stop event propagation
                handleDeleteBook(book.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      {selectedBook && (
        <div className="book-popup">
          <h3>Modify Book</h3>
          <label>Name:</label>
          <input type="text" name="name" value={bookDetails.name} onChange={handleInputChange} />

          <label>Price:</label>
          <input type="text" name="price" value={bookDetails.price} onChange={handleInputChange} />

          <label>Category:</label>
          <input type="text" name="category" value={bookDetails.category} onChange={handleInputChange} />

          <label>Description:</label>
          <input type="text" name="description" value={bookDetails.description} onChange={handleInputChange} />

          <button onClick={handleSaveChanges}>Save Changes</button>
          <button className="button-red" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default AddBookForm;
