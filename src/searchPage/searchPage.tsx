import { Search2Icon } from '@chakra-ui/icons';
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import BookCardRow from '../bookCardRow/bookCardRow';
import './searchPage.css';

interface Book {
  img: string;
  name: string;
  author: string;
  price: number;
}

function SearchPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchBooks, setSearchBooks] = useState<Book[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/books')
      .then((response: AxiosResponse) => {
        const books = response.data.map((bookData: any) => {
          const book: Book = {
            ...bookData,
            author: bookData.author.name,
          };
          return book;
        });
        return books;
      })
      .then((books) => {
        setBooks(books);
        setSearchBooks(books);
      })
      .catch((err: any) => console.log(err));
  }, []);

  return (
    <div className="search-page">
      <div className="input-group">
        <Search2Icon className="search-icon" />
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={({ target }) => setSearchText(target.value)}
        />
      </div>

      <div className="result-books">
        <div className="title">Search Books</div>
        <BookCardRow bookData={searchBooks} />
      </div>

      <div className="all-books">
        <div className="title">All Books</div>
        <BookCardRow bookData={books} />
      </div>
    </div>
  );
}

export default SearchPage;
