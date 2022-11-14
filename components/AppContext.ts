import { createContext } from 'react';

const AppContext = createContext({
  user: {
    name: 'John Doe',
    age: 33,
    hobbies: ['learning'],
  },
  setDefault: () => {},
  setName: (name: string) => {},
});

export default AppContext;
