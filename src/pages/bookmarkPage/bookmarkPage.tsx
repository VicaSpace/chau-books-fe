import './bookmarkPage.css';
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import BookmarkItem from '../../components/bookmarkItem/bookmarkItem';

import { Book } from '../../interface/Book';

function BookmarkPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/books')
      .then((response: AxiosResponse) => {
        setBooks(
          response.data.map((bookData: any) => {
            const book: Book = {
              ...bookData,
              author: bookData.author.name,
            };
            return book;
          })
        );
      })
      .catch((err: any) => console.log(err));
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
