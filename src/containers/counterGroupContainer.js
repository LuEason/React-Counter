import counterGroup from '../components/CounterGroup';
import { connect } from 'react-redux';
import { CHANGE_COUNTER_NUMBER, SET_ZERO_TOTAL } from '../actions/actions';

const defaultState = {
  total: 0,
  counertNumber: 0
};

const setZeroTotal = () => {
  return {
    type: SET_ZERO_TOTAL
  }
}

const setCounterNumber = (counterNumber) => {
  return {
    type: CHANGE_COUNTER_NUMBER,
    counterNumber: counterNumber
  }
}

const mapStateToProps = (state = defaultState) => {
  return {
    total: state.total,
    counterNumber: state.counterNumber
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCounterNumber: (counterNumber) => { dispatch(setCounterNumber(counterNumber)) },
    setZeroTotal: () =>  {dispatch(setZeroTotal()) }
  };
};

const counterGroupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(counterGroup);

export default counterGroupContainer;
