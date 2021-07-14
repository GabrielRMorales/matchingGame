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

  /*test when two of same colored cards are clicekd
  it("sets a pair of cards to stay shown if their colors match",async ()=>{
    let cardOne=screen.getByTestId("card-0");
    let cardFour=screen.getByTestId("card-3");
    expect(cardOne).toHaveStyle()
    userEvent.click(cardOne);
    expect(cardOne).toHaveStyle({"background-color": ""});
    userEvent.click(cardFour);
    expect(cardFour).toHaveStyle({"background-color": ""});
    await Promise(resolve=>setTimeout(resolve,1500));
    expect(cardOne).toHaveStyle({"background-color": ""});


  });
 */
  //test that cards aren't clickable after 2

});