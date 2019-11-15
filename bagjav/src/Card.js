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


choseCard(){
    this.setState(({playCard, player1}) => {
        return {
            playCard: [...playCard, ...player1.slice(0, 1)],
            player1: [...player1.slice(1, player1.length)]
        
        };
      });
    
}
player2turn = () => {
    let player2 = [...this.state.player2]
    let playCard = [...this.state.playCard['0'].props.children[0]]
            // for(let i = 0; i < player2.length; i++){
                console.log(playCard)
                console.log(player2['0'].props.children[0])
        if(player2.includes(playCard === true)){
    this.setState(({playCard, player2}) => {

                return {
                    playCard: [...playCard, ...player2.slice(playCard, 1)],
                    player2: [...player2.slice(1, player2.length)]
                
                };
            }
            );
        
        // else(player2.find(playCard === false))
        // return ;
               
}
}
player3turn = () => {
    this.setState(({playCard, player3}) => {
        return {
            playCard: [...playCard, ...player3.slice(0, 1)],
            player3: [...player3.slice(1, player3.length)]
        
        };
      });
}
player4turn = () => {
    this.setState(({playCard, player4}) => {
        return {
            playCard: [...playCard, ...player4.slice(0, 1)],
            player4: [...player4.slice(1, player4.length)]
        
        };
      });
}



        render(){
            console.log( this.state.player1 )
            console.log( this.state.player2 )
            console.log( this.state.player3 )
            console.log( this.state.player4 )
            console.log(this.state.playCard)
            
            return(
                <div>
            
                <p id='player1'>{this.state.player1}</p>
                <p id='player2'>{this.state.player2}</p>
                <p id='player3'>{this.state.player3}</p>
                <p id='player4'>{this.state.player4}</p>
                <button onClick={() => this.deal()} >Deal</button>
                <button onClick={() => this.choseCard()} >Player 1</button>
                <button onClick={() => this.player2turn()} >Player 2</button>
                <button onClick={() => this.player3turn()} >Player 3</button>
                <button onClick={() => this.player4turn()} >Player 4</button>
                
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