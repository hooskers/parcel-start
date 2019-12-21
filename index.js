/** @jsx jsx */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { jsx, css } from '@emotion/core';

const style = css`
  color: hotpink;
`;

const App = () => {
  const defaultName = 'DEFAULT';
  const [name, setName] = useState(defaultName);

  return (
    <div className="App" css={style}>
      <h1>{`Hi there, ${name}!!!`}</h1>
      <label htmlFor="actual-name">Actual name: </label>
      <input
        id="actual-name"
        onChange={e => setName(e.target.value || defaultName)}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
