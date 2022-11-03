import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const[joke, setJoke]  = useState([]);

  useEffect(() => {
        const url = `https://api.chucknorris.io/jokes/random`

        const fetchData = async() => {
          try{
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            setJoke(json);
          }catch(error){
            console.log(error);
          }
        };
        fetchData();
  }, []);

  

  return (
   <div className="App">
      <div className="App-header">
      <h1>Chuck Norris Jokes</h1> 
      <h2>{joke.value}</h2>
      <a href="/" id="new">New Joke</a>
      </div>
    </div>
  );
}

export default App;