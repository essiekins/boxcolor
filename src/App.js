import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  constructor (props) {
    super(props);
  
  /* need a starting state with a starting color */
  /* also need a clicker counter, also update my state as many time as it clicks */
  /* this so far will be for my whatsInDaBox */

  this.state= {
    color:'purple',
    clickCount: 0, 
  }
}
/* I need my rainbow to circle back to original color */
/* definetly need a loop... le sigh */
/* need to iterate through every color in colors */

colorCycle = () => {
  let colors=['blue','green','yellow','red','orange','yellow','lime','aqua','blue', 'purple'];
  let switcher= Math.floor(Math.random()*10)
  
this.setState ({  /* starting changes */
clickCount: this.state.clickCount++,

})
} /*end of colorCycle */



render () {
  return (
    <div className="App">
      <div className="title"> (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Hello Disco Boxes ✧ﾟ･:*. </div>
     <div className="boxHolders">
      <div className="toggleBox">
      I like being clicked
      </div>
      <div className="whatsInDaBox">
       I like random colors
       </div> {/*end of box holder */}
      </div>
     
    </div>
  );
}

}
