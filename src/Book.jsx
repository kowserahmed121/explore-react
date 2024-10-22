import { useState } from "react";
import "./style.css";
export default function Book() {
  const [book, setBook] = useState(0);
  const handleBook = () => {
    const newBook = book + 1;
    setBook(newBook);
  };

  const removeBook = () => {
    setBook(book - 1);
  };

  return (
    <div className="style">
      <h3>Book length : {book}</h3>
      <button onClick={handleBook}>update book</button>
      <button onClick={removeBook}>remove book</button>
    </div>
  );
}
