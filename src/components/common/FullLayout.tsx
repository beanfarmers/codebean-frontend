import React, { ReactElement } from 'react';

import Footer from '@src/components/footer/Footer';
import NavBar from '@src/components/nav-bar/NavBar';

const FullLayout = ({ children }: { children: ReactElement }) => (
  <div>
    <NavBar />
    <main className='min-h-screen bg-white'>{children}</main>
    <Footer />
  </div>
);

export default FullLayout;
