import {toggleThemeAction, toggleTheme} from '../actions';

export default function reducer(state = 'light', action) {
  switch (action.type) {
    case toggleThemeAction: {
      let theme = state === 'light' ? 'dark' : 'light';

      return theme;
    }

    default:
      return state;
  }
}

export {toggleTheme};
