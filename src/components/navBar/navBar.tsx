import React from 'react';
import './navBar.css';
import { useNavigate } from 'react-router-dom';
import bookImg from './book.png';
import searchImg from './search.png';
import homeImg from './home.png';

const NavBar: React.FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbar-item" onClick={() => navigate('/')}>
        <img src={bookImg} />
      </div>
      <div className="navbar-item" onClick={() => navigate('/search')}>
        <img src={searchImg} />
      </div>
      <div className="navbar-item" onClick={() => navigate('/bookmark')}>
        <img src={homeImg} />
      </div>
    </div>
  );
};

export default NavBar;
