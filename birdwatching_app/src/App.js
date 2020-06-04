import React from 'react';
import logo from './logo.svg';
import './App.css';
import Graph from './Components/graph.js'

function App() {
  let birdData = require("./BirdData/bird_data.json")
  birdData = JSON.stringify(birdData)
  birdData = JSON.parse(birdData)
  birdData = birdData.info.map(date => date.birds)
  console.log(birdData)
  return (
    <div className="App">
      <header className="App-header">
        <Graph title="stuff" data={[10, 20, 50, 5]}/>
      </header>
    </div>
  );
}

export default App;
