import '../styles/globals.css';
import AppContext from '../components/AppContext';
import type { AppProps } from 'next/app';
import { useCallback, useContext, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const { user } = useContext(AppContext);

  const [ctxUser, setCtxUser] = useState(user);

  const defaultSetting = useCallback(() => {
    setCtxUser({ name: 'junhee lee', age: 26, hobbies: ['works out'] });
  }, []);

  return (
    <AppContext.Provider
      value={{
        user: ctxUser,
        setDefault: defaultSetting,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
