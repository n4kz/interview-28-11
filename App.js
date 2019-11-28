import React from 'react';
import {Provider} from 'react-redux';

import MainScreen from './src/screens/main';
import createStore from './src/store';

const store = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
};

export default App;
