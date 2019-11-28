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
    case 'UPDATE_PEOPLE': {
      let { people } = action;

      return { ...state, people };
    }

    case 'TOGGLE_THEME': {
      let theme = state.theme === 'light'?
        'dark':
        'light';

      return { ...state, theme };
    }

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
