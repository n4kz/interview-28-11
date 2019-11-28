import {updatePeopleAction, updatePeople, Action} from '../actions';

export default function reducer(state: Array<object> = [], action: Action): Array<object> {
  switch (action.type) {
    case updatePeopleAction: {
      let {people} = action.payload;

      return people;
    }

    default:
      return state;
  }
}

export {updatePeople};
