import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  constructor (props) {
    super(props);
  
  /* need a starting state with a starting color */
  /* also need a clicker counter, also update my state as many time as it clicks */
  this.state= {
    color:'pink',
    clickCount= 0, 
  }
}
  return (
    <div className="App">
      <h1> Hello Disco Boxes ^u^</h1>
     
    </div>
  );
}


export default App;
