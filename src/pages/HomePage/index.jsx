import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      
      <Link to="/gallery">
        Go to my gallery
      </Link>

      <Link to="/about">
        Go to about
      </Link>
    </div>
  )
};

export default HomePage;