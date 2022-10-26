import { Box, Button, Image, VStack, HStack } from '@chakra-ui/react';
import './bookmarkPage.css';
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';

function BookmarkPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/books')
      .then((response: AxiosResponse) => {
        setBooks(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <VStack>
      <Box className="bookmark-page-title">My Books</Box>
      <Box className="button-section">
        <Button className="tab-button active">Rated Books</Button>
        <Button className="tab-button">Bookmarked</Button>
      </Box>
      <Box className="book-list" overflow="auto">
        {books.map((book, i) => (
          <HStack key={i} h="90px" padding="20px">
            <Image
              padding={'5px'}
              w={'57.94px'}
              h={'78.54px'}
              src={(book as any).img}
              alt={(book as any).name}
            />

            <VStack>
              <Box className="book-title">
                <LinesEllipsis
                  text={(book as any).name}
                  maxLine={2}
                  ellipsis="..."
                  trimRight
                  basedOn="letters"
                />
              </Box>
              <Box className="book-author">{(book as any).author.name}</Box>
            </VStack>

            <Box>${(book as any).price}</Box>
          </HStack>
        ))}
      </Box>
    </VStack>
  );
}

export default BookmarkPage;
