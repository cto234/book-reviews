import React from 'react';
import './review.css'
import { useParams } from 'react-router-dom';
import renderStars from './renderStars';

const Review = ({ books }) => {
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="review-page">
      <div className='left-half'>
        <div className="cover-section">
          <img src={book.cover} alt={book.title} />
        </div>
        <div className="info-section">
          <h1 className="book-title">{book.title}</h1>
          <div className="star-rating">{renderStars(book.score)}</div>
        </div>
      </div>
      <div className="review-section">
        <p className="book-review">{book.review}</p>
      </div>
    </div>
  );
};

export default Review;
