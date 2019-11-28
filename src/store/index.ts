import {combineReducers, createStore} from 'redux';

import peopleReducer, * as peopleActions from './people';
import themeReducer, * as themeActions from './theme';

export default function init(): any {
  const reducer = combineReducers({
    people: peopleReducer,
    theme: themeReducer,
  });

  return createStore(reducer);
}

export const actions: object = {
  ...peopleActions,
  ...themeActions,
};
