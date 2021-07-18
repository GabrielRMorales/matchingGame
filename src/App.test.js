import { within, render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import "jest-styled-components";
import App from './App';

const colors = ["red","green","blue","red","green","blue"];
describe("the initial screen",()=>{
  beforeEach(()=>{
    render(<App />);
  })
  it('renders cards', () => {
    const cards = screen.queryAllByRole("card");
    expect(cards).not.toBeNull();
  });

  it("renders six cards", ()=>{
    const cards = screen.queryAllByRole("card");
    expect(cards).toHaveLength(6);
  });
  
});

describe("the card colors",()=>{

  it("renders cards with colors",()=>{
    render(<App />);
    const cards = screen.queryAllByRole("card");
    cards.forEach((c, index)=>{
      expect(screen.getByTestId(`card-${index}`)).toHaveStyle({"background-color": "gray"});
    })
    
    
  });

});

describe("the card click events", ()=>{

  beforeEach(()=>{
    render(<App/>);
  });

  it("changes the cards color when clicked", ()=>{
  
    let cardTwo = screen.getByTestId("card-1");
    userEvent.click(cardTwo);
    expect(cardTwo).toHaveStyle({"background-color": "green"});
  });

  //test when clicked with already clicked cards
  it("returns card colors to gray when two different cards are clicked in a row", async ()=>{
    let cardOne=screen.getByTestId("card-0");
    let cardThree=screen.getByTestId("card-2");
    userEvent.click(cardOne);
    expect(cardOne).toHaveStyle({"background-color": "red"});
    userEvent.click(cardThree);
    expect(cardThree).toHaveStyle({"background-color": "blue"});
    //two second pause and expect colors to be gray
    await new Promise(resolve=>setTimeout(resolve,1500));
    expect(cardOne).toHaveStyle({"background-color": "gray"});
    expect(cardThree).toHaveStyle({"background-color": "gray"});
  })

  it("sets a pair of cards to stay shown if their colors match",async ()=>{
    let cardOne=screen.getByTestId("card-0");
    let cardFour=screen.getByTestId("card-3");
    expect(cardOne).toHaveStyle({"background-color": "gray"});
    userEvent.click(cardOne);
    expect(cardOne).toHaveStyle({"background-color": "red"});
    expect(cardFour).toHaveStyle({"background-color": "gray"});
    userEvent.click(cardFour);
    expect(cardFour).toHaveStyle({"background-color": "red"});
    await new Promise(resolve=>setTimeout(resolve,1500));
    expect(cardOne).toHaveStyle({"background-color": "red"});
    expect(cardFour).toHaveStyle({"background-color": "red"});


  });
  //test that cards aren't clickable after 2
  it("allows only two cards to be flipped at one time",()=>{
    let cardOne = screen.getByTestId("card-0"),
    cardTwo = screen.getByTestId("card-1"),
    cardThree = screen.getByTestId("card-2");
    userEvent.click(cardOne);
    userEvent.click(cardTwo);
    userEvent.click(cardThree);
    expect(cardOne).toHaveStyle({"background-color": "red"});
    expect(cardTwo).toHaveStyle({"background-color": "green"});
    expect(cardThree).toHaveStyle({"background-color": "gray"});

  });

  it("allows another card to be clicked after two cards have been matched",()=>{
    let cardOne = screen.getByTestId("card-2");
    let cardTwo= screen.getByTestId("card-5");
    let cardThree = screen.getByTestId("card-1");
    userEvent.click(cardOne);
    userEvent.click(cardTwo);
    userEvent.click(cardThree);
    expect(cardOne).toHaveStyle({"background-color": "blue"});
    expect(cardTwo).toHaveStyle({"background-color": "blue"});
    expect(cardThree).toHaveStyle({"background-color": "green"});
    
  });

  it("has a new game button", ()=>{
    let btn = screen.queryByRole("new-game-btn");
    expect(btn).toBeInTheDocument();
  });

  describe("the new game button", ()=>{
    //test that new game button sets all colors to gray
    it("changes all cards to gray",()=>{
      let cardOne = screen.getByTestId("card-2"),
      cardTwo = screen.getByTestId("card-5"),
      newGameBtn = screen.getByRole("new-game-btn");
      userEvent.click(cardOne);
      userEvent.click(cardTwo);
      userEvent.click(newGameBtn);
      expect(cardOne).toHaveStyle({"background-color": "gray"});
      expect(cardTwo).toHaveStyle({"background-color": "gray"});

    });

    /*it("shuffles the cards",()=>{

    });*/
  });

  

});