import React from 'react';
import './App.css';
import Graph from './Components/graph.js'
import SearchMenu from './Components/search_menu.js'

function App() {
  let birdData = require("./BirdData/bird_data.json")
  birdData = JSON.stringify(birdData)
  birdData = JSON.parse(birdData)
  birdData = birdData.info.map(date => date.birds)
  let allSightings = birdData.map(sightings => Object.keys(sightings))
  allSightings = allSightings.flat()
  let birdSpecies = {}
  allSightings.forEach(species => {
    if (!birdSpecies[species]) {
        birdSpecies[species] = "yes"
    }
  })
  console.log(birdSpecies)
  return (
    <div className="App">
      <h2>Search For a Bird</h2>
      <SearchMenu options={Object.keys(birdSpecies)}/>
      <Graph title="stuff" data={[10, 20, 50, 5]}/>
    </div>
  );
}

export default App;
