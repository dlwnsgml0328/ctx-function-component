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

  const changeName = useCallback(
    (name: string) => {
      setCtxUser({ ...ctxUser, name: name });
    },
    [ctxUser]
  );

  return (
    <AppContext.Provider
      value={{
        user: ctxUser,
        setDefault: defaultSetting,
        setName: changeName,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
