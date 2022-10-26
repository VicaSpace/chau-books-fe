import { Search2Icon } from '@chakra-ui/icons';
import {
  HStack,
  VStack,
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  IconButton,
} from '@chakra-ui/react';
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import BookCard from '../bookCard/bookCard';
import './searchPage.css';

function SearchPage() {
  const [books, setBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/books')
      .then((response: AxiosResponse) => {
        setBooks(response.data);
        setSearchBooks(response.data);
      })
      .catch((err: any) => console.log(err));
  }, []);

  return (
    <div>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <IconButton
            aria-label="search"
            icon={<Search2Icon />}
            onClick={(value) => console.log(value)}
          />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={({ target }) => setSearchText(target.value)}
        />
      </InputGroup>

      <Box className="title">Search Books</Box>
      <HStack overflowY="scroll">
        {searchBooks.map((book: any, i) => (
          <BookCard
            key={i}
            name={book.name}
            img={book.img}
            author={book.author.name}
            price={book.price}
          />
        ))}
      </HStack>
      <Box className="title">All Books</Box>
      <HStack overflowY="scroll">
        {books.map((book: any, i) => (
          <BookCard
            key={i}
            name={book.name}
            img={book.img}
            author={book.author.name}
            price={book.price}
          />
        ))}
      </HStack>
    </div>
  );
}

export default SearchPage;
