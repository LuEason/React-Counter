import React from 'react';
import Count from '../Counter';

class CounterGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {
          new Array(6).fill(0).map((value, index) => {
            return <Count key={index}/>
          })
        }
      </div>
    )
  }
}

export default CounterGroup;