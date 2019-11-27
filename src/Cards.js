import React, {Component} from 'react';
import './styling/card.css'
//import Deck from './components/Deck'

export default class Cards extends Component{
    constructor(){
        super();
        this.state = {
            deck: [],
            player1: [],
            player2: [],
            player3: [],
            player4: [],
            playCard: [],
            currentPlayer: 1   
        }
        this.makeCards(); 
        this.shuffle();   
    }
    makeCards = () => {
            const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
            const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']

                for (let suit in suits) {
                    for (let value in values) {
                        this.state.deck.push( <button className = 'cards'
                            value = {
                                `${values[value]} of ${suits[suit]}`
                            }
                            onClick = {
                                (event) => this.choseCard(event)
                            }
                            key = {
                                value + suit
                            }> {`${values[value]} of ${suits[suit]}`} </button>);

                    }
                }
                    return this.deck
    };

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
        };
        deal = () => {
            if(this.state.player1.length < 1){
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
        };
        sort = () => {
            
            //let sorted = (a,b) => a.props.children - b.props.children;
            this.setState({player1: this.state.player1.sort((a,b) => a.key - b.key)}
                );
            this.setState({player2: this.state.player2.sort((a,b) => a.key - b.key)}
                );
            this.setState({player3: this.state.player3.sort((a,b) => a.key - b.key)}
                );
            this.setState({player4: this.state.player4.sort((a,b) => a.key - b.key)}
                );
        };
                
    player1Turn = () => {
        let {playCard} = this.state
        if(playCard.length === 1)
                       this.player2turn();
                       this.player3turn();
                       this.player4turn()}

                    
    
    choseCard = (event) => {
        //console.log('hello world')
        //if(event.target && event.target.value){
            const targetedCard = event.currentTarget
            console.log(targetedCard)
            const eventTarget = event.target.value
            this.setState(({
                player1,
            }) => {
                let button = <button className = 'cards' key = {eventTarget}> {eventTarget} </button>;
                let newpCard = [];
                //console.log(event.target.value)
                if(eventTarget){
                    newpCard.push(button)
                        let filtered = player1.filter(cards => {
                            return newpCard.some(card => {
                                return card.value !== cards.props.children[1]
                            })
                        });
                    console.log(newpCard)
                    if (this.state.currentPlayer === 1) {
                        return {
                            playCard: newpCard,
                            player1: [...filtered, player1.length],
                            currentPlayer: 2
                        }
                    }else {
                        return alert('You already played this set')
                    }
            }}
            )
            this.removeCardInPlay()
            //this.player1Turn();
    //}
    }
    removeCardInPlay = () => {
        let {player1} = this.state
        if(player1.value === this.state.playCard.value){
            this.setState({
                player1: [...player1.slice(1, player1.length)]
            })
        }
    }
    player2turn = () => {
        let {
            player2
        } = this.state
        let {
            playCard
        } = this.state
        let filtered = player2.filter(cards => {
            return playCard.some(card => {
                return card.props.children[1][0] === cards.props.children[1][0]
            })
        });
        let newPlayer2 = player2.filter(card => {
            return playCard.some(cards => {
                return card.props.children[1][0] !== cards.props.children[1][0]
            })
        })
        if (playCard.length >= 1) {
            this.setState({
                playCard: [...playCard, ...filtered],
                player2: [...newPlayer2]
            })
        } else return;
        
    };
    player3turn = () => {
        let {
            player3
        } = this.state
        let {
            playCard
        } = this.state
        let filtered = player3.filter(cards => {
            return playCard.some(card => {
                return card.props.children[1][0] === cards.props.children[1][0]
            })
        });
        let newPlayer3 = player3.filter(card => {
            return playCard.some(cards => {
                return card.props.children[1][0] !== cards.props.children[1][0]
            })
        })
        this.setState({
            playCard: [...playCard, ...filtered],
            player3: [...newPlayer3]
        })
    };
    player4turn = () => {
        let {
            player4
        } = this.state
        let {
            playCard
        } = this.state
        let filtered = player4.filter(cards => {
            return playCard.some(card => {
                return card.props.children[1][0] === cards.props.children[1][0]
            })
        });
        let newPlayer4 = player4.filter(card => {
            return playCard.some(cards => {
                return card.props.children[1][0] !== cards.props.children[1][0]
            })
        })
        this.setState({
            playCard: [...playCard, ...filtered],
            player4: [...newPlayer4],
            currentPlayer: 5
        })
    };
    playGame = () => {

                if(this.state.playCard.length < 4){
                    this.choseCard()
                    this.player2turn()
                    this.player3turn()
                    this.player4turn()
            }
        }

    endSet = () => {
        setTimeout(()=>{
        if(this.state.playCard.length === 4|| this.state.currentPlayer === 5){
            console.log("set Over")
            this.setState({
                playCard: [],
                currentPlayer: 1
            })}else{
                console.log('still playing')
            }
        },500)
    }
    endGame = () => {
        let {player1} = this.state
        let {playCard} = this.state
        if(player1.length === 0 && playCard.length === 1){
            setTimeout(()=>{
                alert('Player 1 wins this hand')
            }, 500
            
            )}
    }
    
    
render() {
    this.endSet();
    this.endGame();
    //console.log(this.state)
    return (<div>
            
            {/* <Deck deck={this.props.deck}/> */}
        
            <p id='player1'>{this.state.player1}</p>
            <p id='player2'>{this.state.player2}</p>
            <p id='player3'>{this.state.player3}</p>
            <p id='player4'>{this.state.player4}</p>
            <button onClick={() => this.deal()} >Deal</button>
            <button onClick={() => this.sort()} >sort</button>
            <button onClick={() => this.player2turn()} >Player 2</button>
            <button onClick={() => this.player3turn()} >Player 3</button>
            <button onClick={() => this.player4turn()} >Player 4</button>
            
            <p id='playCard'>Card in play:
            {this.state.playCard}</p>
            </div>)
}
}








   // --------------------------------------------------------------



        // this.setState({playCard: this.state.player2.filter((card,index ) => {
        //     return index === this.state.playCard[0].props.children ? card : null
        // })})


                            //{this.setState({ player1: this.state.player1.filter(card => card.key !== i)})
                //i.preventDefault()
                //takes i from for loop to determin index}
                            // for(let i = 0; i < player1.length; i++)
                    // {
                            // const index = i;
                            // console.log(i)
         
                            // choseCard = (i) => {
            //     //let {player1} = this.state
            //     //takes i from for loop to determin index
            //     i.preventDefault()
            //     for(let i = 0; i < this.state.player1.length; i++){
            //     this.setState(({playCard, player1}) => {
            //             console.log(i)
            //             if(playCard.length < 4){
            //                 return {
            //                     playCard: [...playCard, ...player1.slice(i, 1)],
            //                     player1: [...player1.slice(0, i), ...player1.slice(i, player1.length)]
                                
            //                 };
                        
            //             //return index = i
            //         }
            //         else{
            //             return}
            //         }
            //             //console.log(i)
                        
            //     )};
                    
            //     }