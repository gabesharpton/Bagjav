
export default class Cards {
    constructor(){
        this.deck = [];
        this.makeCards();
        this.shuffle();
        this.player = {
            player1: [],
            player2: [],
            player3: [],
            player4: []
        }
        this.deal();
    }
    makeCards(){
        this.deck = [];
        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
        const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']

        
        for (let suit in suits){
            for (let value in values) {
                this.deck.push(`${values[value]} of ${suits[suit]}`);
            }
        }
        return this.deck
    }

        shuffle() {
            const {deck} = this;
            let j = deck.length, i;
            

            while(j) {
                i = Math.floor(Math.random() * j--);
                [deck[j], deck[i]] = [deck[i], deck[j]]
                // console.log([deck[i], deck[j]])
            }
            return this;
        }
        deal(){
            // for(let players in this.player){
                for(let c = 0; c <= 13; c++){
                    this.deck.shift(this.player.player1)
                    // this.player.push(this.player.player1)
                }
            return ;
        }

    // }
  

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
}