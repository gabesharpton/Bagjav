
export default class Cards {
    constructor(){
        this.deck = [];
        this.reset();
        this.shuffle();
    }
    reset(){
        this.deck = [];
        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
        const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']

        for (let suit in suits){
            for (let value in values) {
                this.deck.push(`${values[value]} of ${suits[suit]}`);
            }
        }
    }

        shuffle() {
            const {deck} = this;
            let j = deck.length, i;

            while(j) {
                i = Math.floor(Math.random() * j--);
                [deck[j], deck[i]] = [deck[i], deck[j]]
            }
            return this;
        }
        deal(){
            return this.deck.pop();
        }

}
const deck1 = new Cards();
console.log(deck1.deck);
deck1.reset();
console.log(deck1.deck);