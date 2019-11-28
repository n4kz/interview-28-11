import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Screen from './Screen';

let initialState = {
  people: [],
  theme: 'light',
};

let store = createStore((state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PEOPLE':
      state.people = action.people;
      return state;
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
});

const App = () => {
  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  );
};

export default App;
