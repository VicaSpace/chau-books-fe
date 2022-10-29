import React from 'react';
import './bookmarkItem.css';
import LinesEllipsis from 'react-lines-ellipsis';
import bookmarkIcon from './bookmark.png';

import { Book } from '../interface/Book';

const BookmarkItem: React.FC<Book> = ({ img, name, author, price }) => {
  return (
    <div className="bookmark-item">
      <img className="bookmark-img" src={img} />
      <div className="rating-title-author-col">
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
      </div>
      <div className="icon-price-col">
        <div className="bookmark-icon">
          <img src={bookmarkIcon} />
        </div>
        <div className="book-price">${price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default BookmarkItem;
