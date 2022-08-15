import React, { ReactElement } from 'react';

import Footer from '@src/components/footer/Footer';
import NavBar from '@src/components/nav-bar/NavBar';

const FullLayout = ({ children }: { children: ReactElement }) => (
  <div className='text-sm'>
    <NavBar />
    <main className='min-h-screen bg-white'>{children}</main>
    <Footer />
  </div>
);

export default FullLayout;
