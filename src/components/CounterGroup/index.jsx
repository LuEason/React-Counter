import React from 'react';
import Count from '../Counter';

class CounterGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfCounts: 0
    };
  }

  inputChange = (event) => {
    this.setState({ numberOfCounts: Number(event.target.value) });
  }

  render() {
    return (
      <div>
        number of counters: <input value={this.state.numberOfCounts} onChange={this.inputChange}></input>
        {
          new Array(this.state.numberOfCounts).fill(0).map((value, index) => {
            return <Count key={index} />
          })
        }
      </div>
    )
  }
}

export default CounterGroup;