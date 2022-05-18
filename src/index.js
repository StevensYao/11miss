import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

render(<App/>, document.getElementById('app'));

// eslint-disable-next-line no-undef
if (module.hot) {
  // eslint-disable-next-line no-undef
  module.hot.accept(function() {
    window.location.reload();
  });
}
