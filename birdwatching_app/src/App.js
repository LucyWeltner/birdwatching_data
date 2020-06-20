import React from 'react';
import './App.css';
import SearchForBird from './Components/searchForABirdContainer.js'
import SearchForDate from './Components/searchForADateContainer.js'

class App extends React.Component {
  state = {
    birdSpecies: {},
    data: [],
    title: "choose_a_bird",
    info: "Sighting"
  }

  processData() {
    let birdData = require("./BirdData/bird_data.json")
    birdData = JSON.stringify(birdData)
    birdData = JSON.parse(birdData)
    return birdData.info
  }

  render() {
    return (
      <div className="App">
        <SearchForBird processData = {this.processData}/>
        <SearchForDate processData={this.processData}/>
      </div>
    );
  }

}

export default App;




