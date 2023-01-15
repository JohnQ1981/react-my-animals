import "./App.css";
import AnimalShow from "./AnimalShow";
import { useState } from "react";
// const handleClick=()=>{
//   console.log("button was clicked");
//   //console.log(handleClick);
//   //console.log(handleClick());
// };

function getRandomAnimal(){
  const animals =['bird','cat','cow','dog','snake','gator','horse','bear'];
  return animals[Math.floor(Math.random()*animals.length)]
}
//console.log(getRandomAnimal());
function App() {
  const [animals, setAnimals] = useState([]);

  const handleClickAnimal=()=>{
    setAnimals([...animals, getRandomAnimal()]);
  }

  const renderedAnimals = animals.map((animal, index)=>{
    return <AnimalShow type={animal} key={index} />
  });

  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleClick1 = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      Hello
      <div>
        
        <button onClick={handleClick}>Add Animal</button>
        {" "}
        <button onClick={handleClick1}>Remove Animal</button>
        <div>Number of Animals: {count}</div>
        {" "}
        <button onClick={handleClickAnimal}>Random Animal</button>
        <div>
        {animals}</div>
        <div className="animal-list">{renderedAnimals}</div>
      </div>
    </div>
  );
}

export default App;
