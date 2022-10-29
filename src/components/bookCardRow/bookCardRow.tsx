import React from 'react';
import './bookCardRow.css';
import BookCard from '../bookCard/bookCard';

import { Book } from '../../interface/Book';

const BookCardRow: React.FC<{ bookData: Book[] }> = ({ bookData }) => {
  return (
    <div className="book-card-row">
      {bookData.map((book, i) => (
        <BookCard key={i} {...book} />
      ))}
    </div>
  );
};

export default BookCardRow;
