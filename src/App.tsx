import './App.css';
import React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import SearchPage from './pages/searchPage/searchPage';
import HomePage from './pages/homePage/homePage';
import BookmarkPage from './pages/bookmarkPage/bookmarkPage';
import NavBar from './components/navBar/navBar';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Container width="375px" height="812px" className="layout">
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/bookmark" element={<BookmarkPage />} />
            </Routes>
          </div>
          <div className="navbar-layout">
            <NavBar />
          </div>
        </Container>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
