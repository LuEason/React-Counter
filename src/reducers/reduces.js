import { combineReducers } from 'redux';

import { RESERT } from '../actions/actions';

function setReset(state = RESERT, action) {
  switch (action.type) {
    case RESERT:
      return action.isToReset;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  reset: setReset
})

export default todoApp;
