import React from 'react';
import AppContext from '../components/AppContext';

const Home = () => {
  return (
    <AppContext.Consumer>
      {({ user, setDefault }) => (
        <div>
          <div>
            <h1>Keys</h1>
            {Object.keys(user).map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </div>

          <div>
            <h1>Values</h1>
            {Object.values(user).map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </div>

          <div>
            <h1>Entries</h1>
            {Object.entries(user).map(([key, value], idx) => (
              <div key={idx}>
                <span>{key}</span>-<span>{value}</span>
              </div>
            ))}
          </div>

          <button type='button' onClick={setDefault}>
            set Default
          </button>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default Home;
