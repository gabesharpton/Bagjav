import React, {Component} from 'react';
import './card.css'

export default class Cards extends Component{
    constructor(props){
        super(props);
        this.state = {
            deck: [],
            player1: [],
                player2: [],
                player3: [],
                player4: []
            
        }
        this.makeCards();
        this.shuffle();
        this.deal();
    }
    makeCards(){
        this.deck = [];
        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
        const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']

        
        for (let suit in suits){
            for (let value in values) {
                this.state.deck.push(`${values[value]} of ${suits[suit]}`);
            }
        }
        return this.deck
    }

        shuffle() {
            const {deck} = this.state;
            let j = deck.length, i;
            

            while(j) {
                i = Math.floor(Math.random() * j--);
                [deck[j], deck[i]] = [deck[i], deck[j]]
                // console.log([deck[i], deck[j]])
            }
            return this;
        }
        deal(){

            this.setState(this.state.player1 = this.state.deck.splice(0, 13))
            this.setState(this.state.player2 = this.state.deck.splice(0, 13))
            this.setState(this.state.player3 = this.state.deck.splice(0, 13))
            this.setState(this.state.player4 = this.state.deck.splice(0, 13))

            
            // this.state.deck.fill(this.state.player1)
           
                // while((i = deck.shift() !== undefined){

                // })

            // let {deck} = this.state
            // for( let i = 0; i <= 13; i++){
            //     if(deck[i] !== 0){
            //         let card = deck[i]
            //         console.log(card)
            //          deck.pop()}
                //  this.state.deck.pop(this.state.player2)
                return this.state;
            
        }
           
           
             
            
    // function deals(){

                






        // let cardsInHand = 13;
        // let player = ["'player1': cardsInHand, 'player2': cardsInHand, 'player3', 'player4'"];

        // for (let player = 0; player < 4; player++){
        //   console.log(player)
        //   for(let cardsInHand = 0; cardsInHand < deck1.length; cardsInHand++){
        //     console.log(deck1[0])
        //     }
        // }

        // for(cardsInHand in player){
        //     deck1.push(cardsInHand[player])
        //     console.log(player[0])
        // }
                //}

                
                
        // console.log(deck1)
        // deals()

        render(){
            return(
                <div><p>{this.state.deck} </p>
                <p>{this.state.player1}</p>
                <p>{this.state.player2}</p>
                <p>{this.state.player3}</p>
                <p>{this.state.player4}</p>
                <h2>test</h2></div>
            )
        }
    }