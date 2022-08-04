import React from 'react';

import GitHubLogo from '@src/components/GitHubLogo';

const Footer = () => (
  <footer className='flex flex-1 justify-center items-center py-5 px-0 bg-gray-800'>
    <a
      href='https://github.com/litsynp'
      target='_blank'
      rel='noopener noreferrer'
      className='flex justify-center items-center text-gray-200 space-x-2'
    >
      <p>CodeBean by</p>
      <p>
        <GitHubLogo />
      </p>
      <p>litsynp</p>
    </a>
  </footer>
);

export default Footer;
