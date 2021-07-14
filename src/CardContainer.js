import React, {Component} from "react";
import Card from "./Card";

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
        this.handleClick= this.handleClick.bind(this);
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
          
            if (this.state.cards[id].color!==stateOneCards[0].color){
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
               
            }

        }
         
    }

  render(){
      let cards=Array(6).fill().map((val, index)=>{
        return <Card key={index} id={index} color={this.state.cards[index].color} onClick={this.handleClick} status={this.state.cards[index].state} />;
    });
      return (
    <div>
     {cards}
    </div>
  );
  }
  
}

export default CardContainer;