import React from 'react';
import { Link } from 'react-router-dom';

function Chips() {
  return (
    <div>
      <h1>Chips</h1>
      <p>Crunchy and salty, the perfect snack for any time!</p>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Chips;
