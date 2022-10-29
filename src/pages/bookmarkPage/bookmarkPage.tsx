import './bookmarkPage.css';
import { useEffect, useState } from 'react';
import BookmarkItem from '../../components/bookmarkItem/bookmarkItem';

import { Book } from '../../interface/Book';
import { getBooks } from '../../utils/api';

function BookmarkPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(setBooks).catch(console.log);
  }, []);

  return (
    <div className="bookmark-page">
      <div className="bookmark-page-title">My Books</div>
      <div className="button-section">
        <button className="tab-button active">Rated Books</button>
        <button className="tab-button">Bookmarked</button>
      </div>
      <div className="book-list">
        {books.map((book: Book, i) => (
          <BookmarkItem key={i} {...book} />
        ))}
      </div>
    </div>
  );
}

export default BookmarkPage;
