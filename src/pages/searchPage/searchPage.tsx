import { Search2Icon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import BookCardRow from '../../components/bookCardRow/bookCardRow';
import { getBooks } from '../../utils/api';
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
    getBooks()
      .then((books) => {
        setBooks(books);
        setSearchBooks(books);
      })
      .catch(console.log);
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
