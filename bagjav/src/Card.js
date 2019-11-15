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
            playCard: [],
            
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
        // let player1 = [ ...this.state.player1 ]
        // let chosenCard = player1.splice(0, 1)
        // this.setState(() => ({player1, chosenCard}))
        this.setState(state => {
            return {playCard: [...state.playCard, ...state.player1.splice(0, 1)]};
          });
        
    }
    player2turn() {
        // let player2 = [ ...this.state.player2 ]
        // let playCard = player2.splice(0, 1)
        // this.setState(() => ({player2, playCard}))
        this.setState(state => {
            return {playCard: [...state.playCard, ...state.player2.splice(0, 1)]};
          });
        
    }
        // this.setState(() => ({playCard: this.state.player2.splice(0,1)}))
        //I need to filter player2 array to find props.children[0]
        //if it has that then push to this.state.playCard
        //Player 3 sorts through array to find card etc....
    
    
    
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
                
                <p id='playcard'>{this.state.playCard} is the play card</p>
                <p>{this.state.playCard.length}</p>
                </div>
            )
        }
    }








   // --------------------------------------------------------------



        // this.setState({playCard: this.state.player2.filter((card,index ) => {
        //     return index === this.state.playCard[0].props.children ? card : null
        // })})