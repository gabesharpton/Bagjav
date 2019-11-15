import React, {Component} from 'react';
// import './player.css';
// import Cards from './Card'
export default class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players: [],
      currentPlayer: 1,
    }
  }  
 
    

  //   setPlayer = (cards) => {
  //     this.setState((prevState) => ({
  //       currentPlayer: prevState.currentPlayer + 1,
  //     players: [
  //       ...prevState.players, {
  //         number: prevState.currentPlayer,
  //         cards
  //       }
  //     ]
  //   }
  //   ))
  // }}
  render(){
  return (
    <div>
     <p>{this.state.player1}</p>
    </div>
  );
  }
  
}
  

//Player should be able to choose card from their hand and select player they want to attack
//PLayer cannot play card unless it is their turn 
//Player cannot play ace unless they do not have the suit and have not been attacked that set

