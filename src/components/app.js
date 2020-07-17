import React from 'react';
import Header from './header';
import Profile from './profile';
import avatar from '../avatar.png';
import logo from '../logo.svg';

function App() {
  return (
    <div className="container">
      <Header logo={logo} title="Wishlist" />
      <Profile username="Omar Little" avatar={avatar} />
    </div>
  );
}

export default App;
