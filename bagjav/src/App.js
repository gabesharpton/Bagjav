import React, {Component} from 'react';
import './App.css';
//import Intro from './Intro'
import Cards from './Card'
//import PlayGame from './components/playGame'


class App extends Component {
  
  render(){
  return (
    <div className="App">
      
      {/* <Route path="" render={Intro}/> */}
     <Cards/>
     {/* <PlayGame /> */}
   
    </div>
  );
}
}
export default App;

const deck1 = new Cards();
        console.log(deck1);
        // deck1.reset();
        // console.log(deck1.deck);
