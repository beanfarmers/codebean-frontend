import React from 'react';

import type { AppProps } from 'next/app';

import '@styles/globals.css';
import FullLayout from '@src/components/common/FullLayout';

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;

  return (
    <FullLayout>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <AnyComponent {...pageProps} />
    </FullLayout>
  );
}

export default MyApp;
