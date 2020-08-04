import { combineReducers } from 'redux';
import cacl from './total';
import setCounterNumber from './counterNumber';

const reduces = combineReducers({
  total: cacl,
  counterNumber: setCounterNumber
});

export default reduces;
