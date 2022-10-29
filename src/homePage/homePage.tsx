import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import BookCardRow from '../bookCardRow/bookCardRow';
import './homePage.css';

interface Book {
  img: string;
  name: string;
  author: string;
  price: number;
}

function HomePage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [authors, setAuthors] = useState([]);

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
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/authors')
      .then((response: AxiosResponse) => {
        setAuthors(response.data);
      })
      .catch((err: any) => console.log(err));
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
