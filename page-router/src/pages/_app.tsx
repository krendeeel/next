import type { AppProps } from 'next/app';
import { RootLayout } from '@/_widgets/rootLayout/RootLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
