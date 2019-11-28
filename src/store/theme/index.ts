import {toggleThemeAction, toggleTheme, Action} from '../actions';

export default function reducer(state: string = 'light', action: Action): string {
  switch (action.type) {
    case toggleThemeAction: {
      let theme: string = state === 'light' ? 'dark' : 'light';

      return theme;
    }

    default:
      return state;
  }
}

export {toggleTheme};
