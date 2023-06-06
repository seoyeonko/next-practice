import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/photos">Photos</Link>
      </li>
    </ul>
  );
};

export default Nav;
