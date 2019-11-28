import {updatePeopleAction, updatePeople} from '../actions';

export default function reducer(state = [], action) {
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
