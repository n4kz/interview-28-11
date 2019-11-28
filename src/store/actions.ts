export const toggleThemeAction: string = 'TOGGLE_THEME';
export const updatePeopleAction: string = 'UPDATE_PEOPLE';

export interface Action {
  type: string;
  payload?: any;
}

export function updatePeople(people: Array<object>): Action {
  return {type: updatePeopleAction, payload: {people}};
}

export function toggleTheme(): Action {
  return {type: toggleThemeAction};
}
