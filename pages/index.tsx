import React from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>CodeBean :: Main</title>
      <meta name='description' content='CodeBean main page' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <div className='h-[calc(100vh-8rem)] bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500'>
      <div className='h-full flex flex-col space-y-14 justify-center items-center text-center text-6xl text-gray-100'>
        <div>Code.</div>
        <div>Share.</div>
        <div>Run.</div>
      </div>
    </div>
  </div>
);

export default Home;
