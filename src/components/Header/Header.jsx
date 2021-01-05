import React from 'react';
import logo from '../../assets/img/logo.svg';
import {Link} from 'react-router-dom';

import Button from '../Button/Button';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to='/'>
        <div className="header__logo">
          <img width="38" src={logo} alt="Pizza logo" />
          <div>
            <h1> React Pizza </h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        </Link>
        
        <Link to='/cart'>
          <Button>520</Button>
        </Link>
        
      </div>
    </div>
  );
};
export default Header;
