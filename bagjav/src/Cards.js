import React, {Component} from 'react';
import './card.css'
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
            
        }
        //this.startGame();
        this.makeCards(); 
        this.shuffle();
        
        // this.checkCard();
    }

    makeCards = () => {
        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
        const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']

        
        for (let suit in suits){
            for (let value in values) {
                this.state.deck.push(<span className='cards' key={value+suit}>{values[value]}</span>);
                //change span to Deck
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
                }).sort() 
            }) 
            this.state.player1.sort();
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
    
    sort = () => {
        
        //let sorted = (a,b) => a.props.children - b.props.children;
        this.setState({player1: this.state.player1.sort((a,b) => a.key - b.key)}
            );
        this.setState({player2: this.state.player2.sort((a,b)=> a.key - b.key)}
            );
        this.setState({player3: this.state.player3.sort((a,b) => a.key - b.key)}
            );
        this.setState({player4: this.state.player4.sort((a,b) => a.key - b.key)}
            );
                };
            
    
            choseCard = () => {
                this.setState(({playCard, player1}) => {
                    return {
                        playCard: [...playCard, ...player1.slice(0, 1)],
                        player1: [...player1.slice(1, player1.length)]
                    
                    };
                });
                
            }
           player2turn = () => {
                let {player2} = this.state
                let {playCard} = this.state
            let filtered = player2.filter(cards=> {
                return playCard.some(card=> {
                    return card.props.children === cards.props.children
                })
            });
            let newPlayer2 = player2.filter(card => {
                return playCard.some(cards=> {
                return card.props.children !== cards.props.children})})
            this.setState({
                playCard: [...playCard, ...filtered],
                player2: [...newPlayer2]
            })
            //console.log(filtered)

                }
           player3turn = () => {
                let {player3} = this.state
                let {playCard} = this.state
            let filtered = player3.filter(cards=> {
                return playCard.some(card=> {
                    return card.props.children === cards.props.children
                })
            });
            let newPlayer3 = player3.filter(card => {
                return playCard.some(cards=> {
                return card.props.children !== cards.props.children})})
            this.setState({
                playCard: [...playCard, ...filtered],
                player3: [...newPlayer3]
            })
            }
           player4turn = () => {
                let {player4} = this.state
                let {playCard} = this.state
            let filtered = player4.filter(cards=> {
                return playCard.some(card=> {
                    return card.props.children === cards.props.children
                })
            });
            let newPlayer4 = player4.filter(card => {
                return playCard.some(cards=> {
                return card.props.children !== cards.props.children})})
            this.setState({
                playCard: [...playCard, ...filtered],
                player4: [...newPlayer4]
            })
            }
playGame = (e) => {
            if(this.state.playCard.length < 4){
                this.playGame()
                this.player2turn()
                this.player3turn()
                this.player4turn()
        }
    }
    render(){
            
            return(
                <div>
            
                
            
                <p id='player1'>{this.state.player1}</p>
                <p id='player2'>{this.state.player2}</p>
                <p id='player3'>{this.state.player3}</p>
                <p id='player4'>{this.state.player4}</p>
                <button onClick={() => this.deal()} >Deal</button>
                <button onClick={() => this.sort()} >sort</button>
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