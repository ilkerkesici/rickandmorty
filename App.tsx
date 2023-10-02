import React from 'react';
import Router from 'containers/Router/Router';
import {Provider} from 'react-redux';
import {store} from 'reduxStore/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
