export const toggleThemeAction = 'TOGGLE_THEME';
export const updatePeopleAction = 'UPDATE_PEOPLE';

export function updatePeople(people) {
  return { type: updatePeopleAction, payload: { people } };
}

export function toggleTheme() {
  return { type: toggleThemeAction };
}
