import React from 'react';
import './bookCard.css';
import LinesEllipsis from 'react-lines-ellipsis';

import { Book } from '../interface/Book';

const BookCard: React.FC<Book> = ({ img, name, author, price }) => {
  return (
    <div className="book-card">
      <img className="book-img" src={img} />
      <div className="book-name">
        <LinesEllipsis
          text={name}
          maxLine={2}
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      </div>
      <div className="book-author">{author}</div>
      <div className="book-price">${price.toFixed(2)}</div>
    </div>
  );
};

export default BookCard;
