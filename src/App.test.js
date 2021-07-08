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
      expect(screen.getByTestId(`card-${index+1}`)).toHaveStyle({"background-color": "gray"});
    })
    
    
  });
/*
  it("renders cards in three color pairs", ()=>{

  })*/

})