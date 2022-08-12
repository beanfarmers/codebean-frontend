import React from 'react';

import type { AppProps } from 'next/app';

import '@styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <AnyComponent {...pageProps} />;
}

export default MyApp;
