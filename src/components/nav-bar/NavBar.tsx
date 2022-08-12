import React from 'react';

import NavBarTextButton from '@src/components/nav-bar/NavBarTextButton';

const NavBar = () => (
  <div className='flex h-16 px-5 bg-gray-800'>
    <NavBarTextButton
      text='CodeBean'
      url='/!'
      className='my-auto text-2xl italic'
    />
    <div className='flex ml-12 space-x-10'>
      <NavBarTextButton text='Codes' url='/codes' className='my-auto' />
      <NavBarTextButton text='Community' url='/codes' className='my-auto' />
    </div>
  </div>
);

export default NavBar;
