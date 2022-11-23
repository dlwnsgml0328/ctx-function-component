import type { AppProps } from 'next/app';
import UserContext from '../context/UserContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContext>
      <Component {...pageProps} />
    </UserContext>
  );
}

export default MyApp;
