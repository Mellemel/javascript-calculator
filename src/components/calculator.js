import React from 'react';
import Numpad from './numpad';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0
    };
    this.handleEvent = this.handleEvent.bind(this);
  }
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div id="output">{this.state.total}</div>
          <Numpad onClick={this.handleEvent}/>
        </div>
      </div>
    );
  }
}

export default Calculator;