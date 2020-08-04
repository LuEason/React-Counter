import { INCREASE, DESCREASE, SET_ZERO_TOTAL } from '../actions/actions';

function cacl(total = 0, action) {
  switch (action.type) {
    case INCREASE: {
      return total + 1;
    }
    case DESCREASE: {
      return total - 1;
    }
    case SET_ZERO_TOTAL: {
      return 0;
    }
    default:
      return total;
  }
}

export default cacl;