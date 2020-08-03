import React from 'react';
import store from '../../index';
import { reset } from '../../actions/actions';

class counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  componentDidMount() {
    store.subscribe(() =>{
      if (store.getState().reset) {
        this.setState({ number: 0 });
        store.dispatch(reset(false));
      }
    })
  }

  increase = () => {
    this.setState((preState) => {
      return {
        number: preState.number + 1
      }
    });
    this.props.getIncreasedValue(1);
  }

  descrease = () => {
    this.setState({ number: this.state.number - 1 });
    this.props.getIncreasedValue(-1);
  }

  render() {
    return (
      <div>
        <button onClick = { this.increase }>+</button>
        <mark>{ this.state.number }</mark>
        <button onClick = { this.descrease }>-</button>
      </div>
    );
  }
}

export default counter;