import React, {Component} from 'react';
import { Route, Link } from "react-router-dom"
import './App.css';
import Intro from './Intro'
import Cards from './Card'
import Player from './Player'


class App extends Component {
  constructor(){
    super()
    this.state= deck1
  }
  render(){
  return (
    <div className="App">
      <nav>
        {/* <Link to='' render={Player}>Intro</Link> */}
      </nav>
      <Route path="" render={Intro}/>
     <Cards/>
     <Player></Player>
   
    </div>
  );
}
}
export default App;

const deck1 = new Cards();
        console.log(deck1);
        // deck1.reset();
        // console.log(deck1.deck);
