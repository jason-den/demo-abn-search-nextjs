import '../styles/globals.css';
import React from 'react';
import { FunctionComponent } from 'react';

function MyApp({ Component, pageProps }: { Component: FunctionComponent; pageProps: any }) {
  return <Component {...pageProps} />;
}

export default MyApp;
