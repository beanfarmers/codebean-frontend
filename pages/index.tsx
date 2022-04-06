import React from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

import styles from '@styles/Home.module.css';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>CodeBean :: Main</title>
      <meta name='description' content='CodeBean main page' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main className={styles.main}>CodeBean</main>

    <footer className={styles.footer}>
      <a
        href='https://github.com/litsynp'
        target='_blank'
        rel='noopener noreferrer'
      >
        litsynp
      </a>
    </footer>
  </div>
);

export default Home;
