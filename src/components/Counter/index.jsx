import React from 'react';

class counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      counterNumber: props.counterNumber
    };
  }

  increase = () => {
    this.setState((preState) => {
      return {
        number: preState.number + 1
      }
    });
    this.setState({ number: this.state.number + 1 });
    this.props.increase();
  }

  decrease = () => {
    this.setState({ number: this.state.number - 1 });
    this.props.decrease();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.counterNumber !== prevState.counterNumber) {
      return {
        number: 0,
        counterNumber: nextProps.counterNumber
      };
    }
    return null;
  }

  render() {
    return (
      <div>
        <button onClick = { this.decrease }>-</button>&nbsp;
        <mark> { this.state.number } </mark>&nbsp;
        <button onClick = { this.increase }>+</button>
      </div>
    );
  }
}

export default counter;