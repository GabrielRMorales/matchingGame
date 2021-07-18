import React, {Component} from "react";
import Card from "./Card";
import NewGameButton from "./NewGameButton";

let colors = ["red","green","blue","red","green","blue"];

class CardContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            cards: colors.map(color=>({
                color,
                state: 0
            }))
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleNewGame = this.handleNewGame.bind(this);
    }
    handleClick(id){
        let stateOneCards = this.state.cards.filter(card=>{
            return card.state==1;
        });
        //if no other card has state of 1
        if (stateOneCards.length==0){
               //set state of one card
               let newerCardState = this.state.cards.map((card,index)=>{
                   if (index==id){
                    return Object.assign({}, {color: card.color, state: 1});
                   }
                   return card;
               });
               this.setState({
                cards: newerCardState
               });
        }
    //if one other card has state of 1
        else if (stateOneCards.length==1){
            //compare
            let firstColor = this.state.cards[id].color;
            let secondColor = stateOneCards[0].color;
            if (firstColor!==secondColor){
                console.log(this.state.cards);
                let newState = this.state.cards.map((card,index)=>{
                    if (index==id){
                        console.log(index);
                        return Object.assign({}, {color: card.color, state: 1});
                    }
                    return card;
                })
                //setState as state 1
                this.setState({cards: newState}, function(){
                   
                    setTimeout(()=>{
                //1.5 seconds later, setState as color of gray for both cards, and state 0
                let cleanState = this.state.cards.map((card)=>{
                    if (card.state == 1){
                        return Object.assign({}, {color: card.color, state: 0});
                    } 
                    return card;
                });
                this.setState({cards: cleanState});
                }, 1500);
            });               
               
            } else if (firstColor==secondColor){
                let newState = this.state.cards.map((card, index)=>{
                    if (index == id || card.state == 1){
                        return Object.assign({}, {color: card.color, state: 2});
                    }
                    return card;
                })
                this.setState({cards: newState});
            }

        }
         
    }

    handleNewGame(){
        let newGameState = this.state.cards.map(card=>{
            return Object.assign({}, card, {state: 0});
        })
        this.setState({
            cards: newGameState
        });
    }

  render(){
      let cards=Array(6).fill().map((val, index)=>{
        return <Card key={index} id={index} color={this.state.cards[index].color} onClick={this.handleClick} status={this.state.cards[index].state} />;
    });
      return (
    <div>
    <NewGameButton onClick={this.handleNewGame} />
     {cards}
    </div>
  );
  }
  
}

export default CardContainer;