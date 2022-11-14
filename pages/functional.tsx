import React, { useContext } from 'react';
import AppContext from '../components/AppContext';

const Functional = () => {
  const { user, setDefault } = useContext(AppContext);

  console.log('test user:', user);

  return (
    <div>
      <h1>Hello Functional!</h1>

      {Object.entries(user).map(([key, value], idx) => (
        <div key={idx}>
          <span>{idx} -</span>
          <span>{key} -</span>
          {value}
        </div>
      ))}

      <button onClick={setDefault}>default</button>
    </div>
  );
};

export default Functional;

// const user = { age: 20, hobbies: Array(1), name: 'John Doe' };
