/* eslint-disable jsx-a11y/anchor-has-content */
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Books.css";
import { Link } from "react-router-dom";
import BooksDetails from "./BooksDetails";
const Books = (props) => {
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    try {
      const response = await fetch("http://localhost:4000/books");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);
  return (
    <>
      <div className="book-container" style={{ marginTop: "100px" }}>
        {books.map((book) => {
          return book ? (
            <div key={book.id} className="book-card">
              <h2>{book.title}</h2>
              <p>{book.author}</p>
              <p>{book.description}</p>
              <img src={book.image} alt="img" />
              <br />
              <Link
                to={`/details/${book.id}`}
                style={{ marginTop: "20px" }}
                className="btn btn-primary"
              >
                Details
              </Link>
            </div>
          ) : (
            <p>Loading product details...</p>
          ); // Loading state
        })}
      </div>
    </>
  );
};

export default Books;
