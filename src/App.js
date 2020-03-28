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
colorCycle = () => {
  let colors=['blue','green','yellow','red','orange','yellow','lime','aqua','blue', 'purple'];
  let i= Math.floor(Math.random()*10)
  
  
this.setState ({  /* starting changes */
clickCount: this.state.clickCount + 1,
//i need switcher to pick any index
color: this.state.color,
//colors[i],
})
// console.log(colors[i]);

//color changer clicker
document.getElementsByClassName('toggleBox')[0].style.backgroundColor = colors[i];

//clicker count
// document.getElementsByClassName('toggleBox').text.clickCount = clickCount;

} /*end of colorCycle */

render () {
  return (
    <div className="App">
      <div className="title"> (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Hello Disco Boxes ✧ﾟ･:*. </div>
      <h1>Click this little box to see him rave!</h1>
     <div className="boxHolders"> 
      {/* <div className="timesClicked" onClick={this.clickCount}>
        I've been clicked this many times:
        <p>{clickCount}</p>
      </div> */}
       
      <div className="toggleBox" onClick={this.colorCycle}>
      〜(^∇^〜）<br></br>♩ ♪ ♫ ♬ <br></br>（〜^∇^)〜

       </div> {/*end of box holder */}
      </div>
      
    </div>
  );
}

}
