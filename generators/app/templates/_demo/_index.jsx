import React from 'react';
import ReactDOM from 'react-dom';
import App from '../index.jsx';

const data = {
  content: 'hello world'
};

ReactDOM.render(<App {...data}/>, document.getElementById('react-app'));
