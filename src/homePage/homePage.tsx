import { HStack, VStack, Box } from '@chakra-ui/react';
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import BookCard from '../bookCard/bookCard';
import './homePage.css';

function HomePage() {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/books')
      .then((response: AxiosResponse) => {
        setBooks(response.data);
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
    <VStack>
      <Box className="greet-title">Hi Chau</Box>
      <Box className="greet-subtitle">What are you reading today?</Box>
      <HStack overflow="auto" className="books-section">
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
    </VStack>
  );
}

export default HomePage;
