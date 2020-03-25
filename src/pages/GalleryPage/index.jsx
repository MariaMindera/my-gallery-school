import React from "react";
import { Link } from 'react-router-dom';

const GalleryPage = () => {
  return (
    <div>
      <h1>Gallery Page</h1>

      <Link to="/about">
        Go to about
      </Link>
    </div>
  );
};

export default GalleryPage;
