import React, {Component} from 'react';
import { Route, Link } from "react-router-dom"
import './App.css';
import Intro from './Intro'
import Cards from './Card'



class App extends Component {
  constructor(){
    super()
    this.state= deck1
  }
  render(){
  return (
    <div className="App">
      <nav>
        <Link to="">Intro</Link>
      </nav>
      <Route path="" render={Intro}/>
     {/* <Route path='' render={Cards}/> */}
     <Cards/>
   
    </div>
  );
}
}
export default App;

const deck1 = new Cards();
        console.log(deck1);
        // deck1.reset();
        // console.log(deck1.deck);
