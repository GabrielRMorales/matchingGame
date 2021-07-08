import './App.css';
import Card from "./Card";

function App() {
  let arr = Array
  const cards = Array(6).fill().map((val, index)=>{
    return <Card key={index} id={index} />;
  });
  return (
    <div className="App">
     {cards}
    </div>
  );
}

export default App;
