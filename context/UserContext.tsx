import React, { createContext, useCallback, useState } from 'react';

export interface UserContextValues {
  user: {
    name: string;
    age: number;
    hobbies: string[];
  };
  logInfo: () => void;
  defaultUserInfo: () => void;
  setName: (name: string) => void;
}

const contextDefaultValues: UserContextValues = {
  user: {
    name: 'John Doe',
    age: 26,
    hobbies: ['learning'],
  },
  logInfo: () => {},
  defaultUserInfo: () => {},
  setName: (name: string) => {},
};

const UserContext = createContext(contextDefaultValues);

export const useUser = () => React.useContext(UserContext);

const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState(contextDefaultValues.user);

  const logInfo = () => {
    console.log('- user:', user);
  };

  const setName = useCallback(
    (name: string) => {
      console.log('- change name to:', name);
      setUser({ ...user, name: name });
    },
    [user]
  );

  const defaultUserInfo = useCallback(() => {
    console.log('- make default user info');
    setUser(contextDefaultValues.user);
  }, []);

  const contextValue: UserContextValues = {
    user,
    logInfo,
    setName,
    defaultUserInfo,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default UserProvider;
