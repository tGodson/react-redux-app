import React from 'react';
import userImg from '../user.svg';

const Nav = () => (
  <div className="navbar">
    <h1 className="app-logo">Bookstore CMS</h1>
    <p>BOOKS</p>
    <p className="disabled">CATEGORIES</p>
    <div className="user-img">
      <img src={userImg} alt="profile" />
    </div>
  </div>
);

export default Nav;