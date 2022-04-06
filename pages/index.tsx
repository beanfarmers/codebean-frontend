import React from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

import NavBar from '@src/components/NavBar';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>CodeBean :: Main</title>
      <meta name='description' content='CodeBean main page' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <NavBar />

    <main>
      <div className='h-screen bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500'>
        <div className='h-full flex flex-col space-y-14 justify-center items-center text-center text-6xl text-gray-100'>
          <div>Code.</div>
          <div>Share.</div>
          <div>Run.</div>
        </div>
      </div>
    </main>

    <footer className='flex flex-1 justify-center items-center py-5 px-0 bg-gray-800'>
      <a
        href='https://github.com/litsynp'
        target='_blank'
        rel='noopener noreferrer'
        className='flex justify-center items-center text-gray-200'
      >
        CodeBean by litsynp
      </a>
    </footer>
  </div>
);

export default Home;
