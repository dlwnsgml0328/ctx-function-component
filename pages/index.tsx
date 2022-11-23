import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

const Immsi = () => {
  const { user, logInfo, setName, defaultUserInfo } = useUser();

  const [input, setInput] = useState('');

  return (
    <div>
      <h1>Hello User!</h1>

      {Object.entries(user).map(([key, value], idx) => (
        <div key={idx}>
          <span>{key}</span> - <span>{value}</span>
        </div>
      ))}

      <hr />

      <button type='button' onClick={logInfo}>
        info
      </button>

      <hr />

      <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
      <button type='button' onClick={() => setName(input)}>
        change the name
      </button>

      <button type='button' onClick={defaultUserInfo}>
        make default user info
      </button>
    </div>
  );
};

export default Immsi;
