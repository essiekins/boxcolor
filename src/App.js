import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  constructor (props) {
    super(props);
  
  /* need a starting state with a starting color */
  /* also need a clicker counter, also update my state as many time as it clicks */
  this.state= {
    color:'purple',
    clickCount: 0, 
  }
}
/* I need my rainbow to circle back to original color */
disco = () => {
  let colors=['blue','green','yellow','red','orange','yellow','lime','aqua','blue', 'purple'];
}
render () {
  return (
    <div className="App">
      <div className="title"> (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Hello Disco Boxes ✧ﾟ･:*. </div>
      <div className="beforeBox">
      
      </div>
      <div className="afterBox">
     

      </div>
     
    </div>
  );
}

}
