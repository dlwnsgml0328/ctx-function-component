import { createContext } from 'react';

const AppContext = createContext({
  user: {
    name: 'John Doe',
    age: 33,
    hobbies: ['learning'],
  },
  setDefault: () => {},
});

export default AppContext;

// user의 초기값은 어떻게 설정할 수 있을까요?
