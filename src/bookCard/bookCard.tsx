import React from 'react';
import { Image, Box } from '@chakra-ui/react';
import './bookCard.css';
import LinesEllipsis from 'react-lines-ellipsis';

function BookCard(props: any) {
  const { img, name, author, price } = props;
  return (
    <Box className="book-card">
      <Image w="111.54px" h="151.19px" src={img} />
      <Box className="book-name">
        <LinesEllipsis
          text={name}
          maxLine={2}
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      </Box>
      <Box className="book-author">{author}</Box>
      <Box className="book-price">${price.toFixed(2)}</Box>
    </Box>
  );
}

export default BookCard;
