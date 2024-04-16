import React from 'react';
import { Link } from 'react-router-dom';

function Candy() {
  return (
    <div>
      <h1>Candy</h1>
      <p>Sweet treats to brighten your day!</p>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Candy;
