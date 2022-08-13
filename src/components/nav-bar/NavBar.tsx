import React from 'react';

import NavBarTextButton from '@src/components/nav-bar/NavBarTextButton';

const NavBar = () => (
  <nav className='flex justify-between h-16 px-5 bg-gray-800'>
    <div className='flex items-center'>
      <NavBarTextButton
        text='CodeBean'
        url='/'
        className='text-center w-full text-2xl italic'
      />
      <div className='flex ml-12 space-x-10 font-bold'>
        <NavBarTextButton text='Codes' url='/codes' className='my-auto' />
        <NavBarTextButton
          text='Community'
          url='/community'
          className='my-auto'
        />
      </div>
    </div>
    <NavBarTextButton text='+' url='/codes/new' className='my-auto text-2xl' />
  </nav>
);

export default NavBar;
