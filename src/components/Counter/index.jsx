import React from 'react';

class counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  increase = () => {
    this.setState((preState) => {
      return {
        number: preState.number + 1
      }
    });
  }

  descrease = () => {
    this.setState({ number: this.state.number - 1 });
  }

  render() {
    return (
      <div>
        <button onClick={this.increase}>+</button>
        <mark>{this.state.number}</mark>
        <button onClick={this.descrease}>-</button>
      </div>
    );
  }
}

export default counter;