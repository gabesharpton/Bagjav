import React, {Component} from 'react';
// import this.state from '../Card'


export default class PlayGame extends Component{
    constructor(props){
        super(props);
        this.state = {
            deck: [],
            player1: [],
            player2: [],
            player3: [],
            player4: [],
            playCard: [],
            
        }
    }

choseCard(){
    this.setState(state => {
        return {playCard: [...state.playCard, ...state.player1.splice(0, 1)]};
      });
    
}
player2turn = () => {
    this.setState(state => {
        return {playCard: [...state.playCard, ...state.player2.splice(0, 1)]};
      });
    
}
player3turn = () => {
    this.setState(state => {
        return {playCard: [...state.playCard, ...state.player3.splice(0, 1)]};
      });
}
player4turn = () => {
    this.setState(state => {
        return {playCard: [...state.playCard, ...state.player4.splice(0, 1)]};
      });
}
render() 
{
console.log(this)
return (
    <div>
        
    </div>
)
}
}
