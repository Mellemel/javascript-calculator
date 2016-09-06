import React from 'react';
import Numpad from './numpad';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0
    };
    this.returnValue = this.returnValue.bind(this);
  }
  returnValue(e) {
    console.log(e);
  }
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div id="output">{this.state.total}</div>
          <Numpad onClick={this.returnValue} />
        </div>
      </div>
    );
  }
}

export default Calculator;