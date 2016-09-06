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
  componentDidMount() {
    document.addEventListener('keypress', this.handleEvent, false);
  }

  handleEvent(e) {
    var value;
    if (e.type === 'click') {
      value = $(e.target).text();
    }
    if (e.type === 'keypress') {
      value = String.fromCharCode(e.keyCode);
    }
    if (value >=0 || value <= 0){
      this.output(value);
    }
    if (value == 'c') {
      this.clear();
    }

  }
  clear() {
    this.setState({total: 0});
  }
  output(num) {
    console.log(num);
    let output = this.state.total ? this.state.total + '' + num : num;
    output = parseInt(output);
    this.setState({ total: output });
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