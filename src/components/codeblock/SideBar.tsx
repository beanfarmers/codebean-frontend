import React from 'react';

import Divider from '@src/components/codeblock/Divider';
import SideBarHoverableMenu from '@src/components/codeblock/SideBarHoverableMenu';

function SideBar() {
  return (
    <div className='basis-1/3 min-w-[16rem] max-w-[20rem] h-full border-r space-y-8 py-8 px-8 text-neutral-800'>
      <div className='space-y-3'>
        <div className='font-bold text-lg w-full flex items-center space-x-2'>
          <img
            className='w-8 rounded-full'
            src='/cat-40px.jpeg'
            alt='member profile'
          />
          <span>litsynp</span>
        </div>
        <Divider />
        <ul className='space-y-2 text-gray-500'>
          <SideBarHoverableMenu text='Dashboard' />
          <SideBarHoverableMenu text='My Codes' />
          <SideBarHoverableMenu text='Recent Codes' />
          <SideBarHoverableMenu text='Favorites' />
        </ul>
      </div>
      <div className='space-y-3'>
        <div className='font-bold text-lg'>Popular Languages</div>
        <Divider />
        <ul className='space-y-2 text-gray-500'>
          <SideBarHoverableMenu text='Python' />
          <SideBarHoverableMenu text='Java' />
          <SideBarHoverableMenu text='Kotlin' />
          <SideBarHoverableMenu text='Swift' />
          <SideBarHoverableMenu text='Go' />
          <SideBarHoverableMenu text='C' />
          <SideBarHoverableMenu text='C++' />
        </ul>
        <div>
          <span className='hover:text-blue-600 cursor-pointer text-xs text-gray-500'>
            Show more
          </span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
