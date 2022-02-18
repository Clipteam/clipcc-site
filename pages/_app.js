import { NextUIProvider } from '@nextui-org/react';
import { NextIntlProvider } from 'next-intl';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextIntlProvider>
  );
}

export default MyApp
