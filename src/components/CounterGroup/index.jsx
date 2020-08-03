import React from 'react';
import Count from '../Counter';

class CounterGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfCounts: 0,
      total: 0
    };
  }

  inputChange = (event) => {
    this.setState({ numberOfCounts: Number(event.target.value) });
    if (Number(event.target.value) === 0) {
      this.setState({ total: 0 });
    }
  }

  calcTotal = (e) => {
    this.setState({ total: this.state.total + e });
  }

  render() {
    return (
      <div>
        Number of counters: <input value={this.state.numberOfCounts} onChange={this.inputChange}></input><br/>
        Total: {this.state.total}
        {
          new Array(this.state.numberOfCounts).fill(0).map((value, index) => {
            return <Count key={index} getNumber={this.calcTotal}/>
          })
        }
      </div>
    )
  }
}

export default CounterGroup;