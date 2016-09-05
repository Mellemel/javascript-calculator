import React from 'react';
import {Button} from 'react-toolbox/lib/button';
import {Card} from 'react-toolbox/lib/card';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0
    };
  }
  render(){
    return (
      <Card style={{width: '500px'}}>
        <div>
          <Button floating raised>7</Button>
          <Button floating raised>4</Button>
          <Button floating raised>1</Button>
        </div>
        <div>
          <Button floating raised>8</Button>
          <Button floating raised>5</Button>
          <Button floating raised>2</Button>
          <Button floating raised>0</Button>
        </div>
        <div>
          <Button floating raised>9</Button>
          <Button floating raised>6</Button>
          <Button floating raised>3</Button>
        </div>
      </Card>
    );
  }
}

export default Calculator;