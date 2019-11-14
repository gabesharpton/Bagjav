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
        //this.startGame();
        this.makeCards(); 
        this.shuffle();
        // this.checkCard();
    }

    makeCards = () => {
        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
        const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']

        
        for (let suit in suits){
            for (let value in values) {
                this.state.deck.push(<span className='cards' key={value+suit}>{values[value]}</span>);
            }
        }
        // this.shuffle();
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
            //this.deal();
            return this;
    }
    deal = () => {
            this.setState({ player1: this.state.deck.filter((cards, index) => {
                    return index < 13 ? cards : null
                }) 
            }) 
            this.setState({ player2: this.state.deck.filter((cards, index) => {
                    return index >= 13 && index < 26 ? cards : null
                }) 
            }) 
            this.setState({ player3: this.state.deck.filter((cards, index) => {
                    return index >= 26 && index < 39 ? cards : null
                }) 
            }) 
            this.setState({ player4: this.state.deck.filter((cards, index) => {
                    return index >= 39 && index <= 52 ? cards : null
                }) 
            }) 
    }

    startGame = () => {
        // let choice = prompt("Would you like to start the game?")
        // if(choice === 'yes'){
        // this.choseCard()
        // console.log(this.playCard)
        // this.state.playCard = this.state.player2.filter(() => this.state.playCard)
        // console.log(this.state.children)
        return;
    }
    choseCard(){
        this.setState({playCard: this.state.player1.splice(0,1)})
        //I need to filter player2 array to find props.children[0]
        //if it has that then push to this.state.playCard
        //Player 3 sorts through array to find card etc....
    }
    player2turn() {
        this.setState({playCard: this.state.player2.filter((card) => {
            return card === this.state.playCard[0].props.children[0]
        })})
    }
    
    
    // checkCard (cardValue) {
        //     return this.cardValue = this.state.playCard["0"].props.children[0]
        
        // }
        render(){
            console.log( this.state.player1 )
            console.log( this.state.player2 )
            console.log( this.state.player3 )
            console.log( this.state.player4 )
            console.log(this.state.playCard)
            // console.log(this.state.playCard["0"].props.children[0])
            return(
                <div>
                    {/* <p>{this.state.deck}</p> */}
                <p id='player1'>{this.state.player1}</p>
                <p id='player2'>{this.state.player2}</p>
                <p id='player3'>{this.state.player3}</p>
                <p id='player4'>{this.state.player4}</p>
                <button onClick={() => this.deal()} >Deal</button>
                <button onClick={() => this.choseCard()} >chose card</button>
                <button onClick={() => this.player2turn()} >PLayer 2</button>
                
                <p>{this.state.playCard} this one</p>
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
