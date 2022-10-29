import { useEffect, useState } from 'react';
import BookCardRow from '../../components/bookCardRow/bookCardRow';
import './homePage.css';

import { Book } from '../../interface/Book';
import { getAuthors, getBooks } from '../../utils/api';

function HomePage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getBooks().then(setBooks).catch(console.log);
  }, []);

  useEffect(() => {
    getAuthors().then(setAuthors).catch(console.log);
  }, []);

  return (
    <div className="homepage">
      <div className="greet-title">Hi Chau</div>
      <div className="greet-subtitle">What are you reading today?</div>
      <div className="books-section">
        <BookCardRow bookData={books} />
      </div>

      <div className="premium-banner">
        <div className="premium-text">Premium free for the next 3 Months</div>
        <div className="premium-icon" />
      </div>

      <div className="popular-authors-title">Popular authors</div>
      <div className="authors-section">
        {authors.map((author: any, i) => (
          <img key={i} className="author-img" src={author.img} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
