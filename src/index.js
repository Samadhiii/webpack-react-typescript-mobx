import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import store from './stores';

ReactDOM.render(
  <App {...store} />,
  document.getElementById('mirco-dview')
);

if (module.hot) {
  module.hot.accept();
}

console.log(process.env.NODE_ENV);
