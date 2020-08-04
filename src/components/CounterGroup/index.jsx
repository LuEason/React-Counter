import React from 'react';
import CounterContainer from '../../containers/counterContainer';

class CounterGroup extends React.Component {

  inputChange = (event) => {
    this.setState({ numberOfCounts: Number(event.target.value) });
    this.props.setCounterNumber(Number(event.target.value));
    this.props.setZeroTotal();
  }

  render() {
    return (
      <div>
        Number of counters: <input value = { this.props.counterNumber } onChange = { this.inputChange }></input><br />
        Total: { this.props.total }
        {
          new Array(this.props.counterNumber).fill(0).map((value, index) => {
            return <CounterContainer key = { index }/>
          })
        }
      </div>
    )
  }
}

export default CounterGroup;
