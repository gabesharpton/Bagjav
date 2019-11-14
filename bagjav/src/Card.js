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
            player4: [],
            playCard: []
            
        }
        this.makeCards();
        this.shuffle();
        this.deal();
        this.startGame();
        // this.checkCard();
    }
    makeCards = () => {
        this.deck = [];
        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
        const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']

        
        for (let suit in suits){
            for (let value in values) {
                this.state.deck.push(<span className='cards' key={value+suit}>{values[value]}</span>);
            }
        }
        return this.deck
    }

    shuffle = () => {
            const {deck} = this.state;
            let j = deck.length, i;
            

            while(j) {
                i = Math.floor(Math.random() * j--);
                [deck[j], deck[i]] = [deck[i], deck[j]]
                // console.log([deck[i], deck[j]])
            }
            return this;
    }
        deal = () => {

                // let deals = this.state.deck.splice(0, 13)
                this.setState(state => {
                    let player1 = this.state.deck.splice(0, 13)
                    return player1;
                })
            // this.state.player1 = this.state.deck.splice(0, 13)
            this.state.player2 = this.state.deck.splice(0, 13)
            this.state.player3 = this.state.deck.splice(0, 13)
            this.state.player4 = this.state.deck.splice(0, 13)

            return this.state;
        
    }

    startGame = () => {
        // let choice = prompt("Would you like to start the game?")
        // if(choice === 'yes'){
        this.choseCard()
        // console.log(this.playCard)
        // this.state.playCard = this.state.player2.filter(() => this.state.playCard)
        // console.log(this.state.children)
        return;
    }
    choseCard(){
        this.playCard = this.state
        // this.state.playCard = this.state.player1.splice(0, 1)
        // console.log(this.state.playCard["0"].props.children[0])
        // this.state.playCard = this.state.player2.filter(this.checkCard(this.cardValue, this.state.playCard))
        // console.log(this.state.playCard["0"].key[this.value])

        //I need to sort player2 array to find props.children[0]
        //if it has that then push to this.state.playCard
        //Player 3 sorts through array to find card etc....
    }

    checkCard (cardValue) {
        return this.cardValue = this.state.playCard["0"].props.children[0]

    }
        render(){
            return(
                <div>
                    {/* <p>{this.state.deck}</p> */}
                <p id='player1'>{this.state.player1}</p>
                <p id='player2'>{this.state.player2}</p>
                <p id='player3'>{this.state.player3}</p>
                <p id='player4'>{this.state.player4}</p>
                <p>{this.state.playCard}</p>
                <p>{this.state.playCard.length}</p>
                </div>
            )
        }
    }








   // --------------------------------------------------------------

                
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
