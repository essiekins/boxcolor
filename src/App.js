import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  constructor (props) {
    super(props);
  
  /* need a starting state with a starting color */
  /* also need a clicker counter, also update my state as many time as it clicks */
  this.state= {
    color:'pink',
    clickCount: 0, 
  }
}
render () {
  return (
    <div className="App">
      <h1> (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Hello Disco Boxes ✧ﾟ･:*.</h1>
     
    </div>
  );
}

}
