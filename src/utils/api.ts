import { Book } from '../interface/Book';
import axios from 'axios';

export const getBooks = async () => {
  const localData = localStorage.getItem('books');

  if (localData == null) {
    const response = await axios.get('http://localhost:3001/api/books');
    const books = response.data.map((bookData: any) => {
      const book: Book = {
        ...bookData,
        author: bookData.author.name,
      };
      return book;
    });

    localStorage.setItem('books', JSON.stringify(books));
    return books;
  }

  return JSON.parse(localData);
};

export const getAuthors = async () => {
  const localData = localStorage.getItem('authors');

  if (localData == null) {
    const response = await axios.get('http://localhost:3001/api/authors');
    const authors = response.data;

    localStorage.setItem('authors', JSON.stringify(authors));
    return authors;
  }

  return JSON.parse(localData);
};
