import React, {Component}from 'react';
//import { ReactComponent } from '*.svg';
// import './App.css';
//import Card from './Card'

class Deck extends Component() {
  
  constructor(props){
  super(props)
  this.state = {
    deck: []
  }
  this.makeCards()
}
  makeCards = () => {
    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']

    //use regular foor loop and use i, then use i for click event
    //make variable index and push it into new array with each card
    for (let suit in suits){
        for (let value in values) {
            this.state.deck.push(<button className='cards' onClick={(i) => this.choseCard(i)} key={value+suit}>{`${values[value]}`}</button>);
            return this.deck
        }
    }}
    // this.shuffle();
    render(){
    return this.deck
}
  
}
console.log(Deck)
//   return (
//     <div className="App">
//      {/* <h1> Welcome to Bagjav!</h1> */}
     
//      {/* <p>{deck}</p> */}
//     </div>
//   );
// }

export default Deck;