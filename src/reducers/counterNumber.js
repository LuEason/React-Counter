import { CHANGE_COUNTER_NUMBER } from '../actions/actions';

function setCounterNumber(number = 0, action) {
  switch (action.type) {
    case CHANGE_COUNTER_NUMBER: {
      return action.counterNumber;
    }
    default:
      return number;
  }
}

export default setCounterNumber;