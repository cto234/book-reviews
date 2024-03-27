import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BookGrid from './components/Home';
import Review from './components/Review';
import books from './books'

const App = () => {
  return (
    <Router basename="/book-reviews">
      <div className='app-container'>
        <Header />
        <Routes>
          <Route path="/" element={<BookGrid books={books}/>} />
          <Route path="/review/:id" element={<Review books={books}/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
