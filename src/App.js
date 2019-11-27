import React, {Component} from 'react';
import './styling/App.css';
//import Intro from './Intro'
//import Deck from './components/Deck'
import Cards from './Cards'
//import Card from './components/Card'
//import PlayGame from './components/playGame'


class App extends Component {
  
  render(){
  return (
    <div className="App">
      
      {/* <Route path="" render={Intro}/> */}
     <Cards/>
     {/* <Card /> */}
     {/* <Deck /> */}
     {/* <PlayGame /> */}
   
    </div>
  );
}
}
export default App;

