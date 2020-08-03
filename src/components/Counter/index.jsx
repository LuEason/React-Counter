import React from 'react';

class counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  increase = () => {
    let newNumber = this.state.number + 1;
    this.setState((preState) => {
      return {
        number: newNumber
      }
    });
    this.props.getNumber(1);
  }

  descrease = () => {
    this.setState({ number: this.state.number - 1 });
    this.props.getNumber(-1);
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