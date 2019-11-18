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
        this.sort();
        this.deal();
        this.endSet()
    }

    makeCards = () => {
        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']

        //use regular foor loop and use i, then use i for click event
        //make variable index and push it into new array with each card
        for (let suit in suits){
            for (let value in values) {
                this.state.deck.push(<button className='cards' onClick={(i) => this.choseCard(i)} key={value+suit}>{`${values[value]}`}</button>);
                
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
                player1Turn = () => {
                    this.choseCard()
                }
                choseCard = (i) => {
                    //this.setState({ player1: this.state.player1.filter(card => card.key !== i)})
                //i.preventDefault()
                //takes i from for loop to determin index
                this.setState(({playCard, player1}) => {
                    //let {player1} = this.state
               
                    //change `index` to whichever index you want to remove
                    for(let i = 0; i < player1.length; i++){
                    
                    const index = i;
                    console.log(i)
                    //const toInsert = player1[index];
                    let newp1 = player1.splice(index, 1);
                    //playCard.push(toInsert);
                
                    return {
                        playCard: newp1,
                        player1: player1,
                    };
                    
                }
                
                return i}
            
                );
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

            while(this.state.playCard.length < 4){
                // this.choseCard
                // this.player2turn
                // this.player3turn
                // this.player4turn
        }
    }

    endSet = () => {
        for(let i =0; i < this.state.playCard.length; i++){
        if(this.state.playCard.length < 4){
            alert("set Over")
        }
    }
    }
    
    render(){
            
            return(
                <div>
            
                {/* <Deck deck={this.props.deck}/> */}
            
                <p id='player1'>{this.state.player1}</p>
                <p id='player2'>{this.state.player2}</p>
                <p id='player3'>{this.state.player3}</p>
                <p id='player4'>{this.state.player4}</p>
                <button onClick={() => this.deal()} >Deal</button>
                <button onClick={() => this.sort()} >sort</button>
                {/* <button onClick={() => this.playGame()}>Play</button> */}
                <button onClick={() => this.player1Turn()} >Player 1</button>
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

         