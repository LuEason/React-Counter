import counter from '../components/Counter';
import { connect } from 'react-redux';
import { INCREASE, DESCREASE } from '../actions/actions';

const defaultState = {
  total: 0,
  counterNumber: 0
};

const mapStateToProps = (state = defaultState) => {
  return {
    total: state.total,
    counterNumber: state.counterNumber
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => { dispatch({ type: INCREASE }) },
    decrease: () => { dispatch({ type: DESCREASE }) }
  };
};

const counterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(counter);

export default counterContainer;
