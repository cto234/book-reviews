import './home.css'
import React from 'react';
import { Link } from 'react-router-dom';
import renderStars from './renderStars';


const BookGrid = ({ books }) => {
  return (
    <div className="book-grid">
      {books
        .slice() //sort in reverse order to show newest items first
        .sort((a, b) => b.id - a.id) 
        .map((book) => (
          <Link key={book.id} to={`/review/${book.id}`} className="book-item-link">
            <div className="book-item">
              <img src={book.cover} alt={book.title} />
              <h2 className="book-title">{book.title}</h2>
              <div className="star-rating">{renderStars(book.score)}</div>
            </div>
          </Link>
        ))}
    </div>
  );
};


export default BookGrid;

