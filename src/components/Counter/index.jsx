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
        number: preState.state.number + 1
      }
    });
    this.props.getIncreasedValue(1);
  }

  descrease = () => {
    this.setState({ number: this.state.number - 1 });
    this.props.getIncreasedValue(-1);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.clear === 0) {
      return {
        number: 0
      };
    }
    return null;
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