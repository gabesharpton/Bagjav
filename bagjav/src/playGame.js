
class playGame{
startGame = () => {
    // let choice = prompt("Would you like to start the game?")
    // if(choice === 'yes'){
    // this.choseCard()
    // console.log(this.playCard)
    // this.state.playCard = this.state.player2.filter(() => this.state.playCard)
    // console.log(this.state.children)
    return;
}
choseCard = () => {
    this.setState({playCard: this.props.player1.shift()})
    //I need to filter player2 array to find props.children[0]
    //if it has that then push to this.state.playCard
    //Player 3 sorts through array to find card etc....
}
player2turn = () => {
    // this.setState({playCard: this.state.player2.filter((card,index ) => {
    //     return index === this.state.playCard[0].props.children ? card : null
    // })})
    this.setState(prevState => ({playCard: this.state.player2.shift().prevState}))
}
}
export default playGame