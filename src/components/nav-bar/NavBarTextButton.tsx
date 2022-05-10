import React from 'react';

import Link from 'next/link';

interface Props {
  text: string;
  url: string;
  className?: string;
}

const NavBarTextButton = ({ text, url, className = '' }: Props) => (
  <Link href={url} passHref>
    <a href='replace' className={className}>
      <span className='my-auto text-gray-200'>{text}</span>
    </a>
  </Link>
);

export default NavBarTextButton;
