import './App.css';
import Placeholder from './placeHolder/placeHolder';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Placeholder />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
