import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Women = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to='Groming'>Grooming</Link>
          </li>
          <li>
            <Link to='Shirt'>Shirt</Link>
          </li>
          <li>
            <Link to='Trouser'>Trouser</Link>
          </li>
          <li>
            <Link to='Jwellery'>Jewellery</Link>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Women;