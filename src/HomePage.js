// HomePage.js
import React from 'react';
import LoginSignup from './LoginSignup';
//import './HomePage.css';
const HomePage = ({ onLogin }) => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Book Management System</h1>
      </header>
      <div className="home-login-signup">
        <LoginSignup onLogin={onLogin} />
      </div>
    </div>
  );
};
export default HomePage;