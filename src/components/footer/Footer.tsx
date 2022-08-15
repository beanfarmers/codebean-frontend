import React from 'react';

import GitHubLogo from '@src/components/GitHubLogo';

const Footer = () => (
  <footer className='flex flex-1 justify-center items-center py-5 px-0 bg-gray-800'>
    <div className='flex justify-center items-center text-gray-200 space-x-2'>
      <span>
        <span className='italic'>CodeBean</span> by
      </span>
      <a
        href='https://github.com/litsynp'
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-center space-x-2'
      >
        <GitHubLogo />
        <span>litsynp</span>
      </a>
    </div>
  </footer>
);

export default Footer;
