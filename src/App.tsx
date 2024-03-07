import React from "react";
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="bookstore">
      <BookList />
      <AddBookForm />
    </div>
  );
};

export default App;
