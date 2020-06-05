import React from 'react';
import './App.css';
import Graph from './Components/graph.js'
import SearchMenu from './Components/search_menu.js'

class App extends React.Component {
  state = {
    birdSpecies: {},
    data: [],
    title: "stuff"
  }
  processData() {
    let birdData = require("./BirdData/bird_data.json")
    birdData = JSON.stringify(birdData)
    birdData = JSON.parse(birdData)
    birdData = birdData.info.map(date => date.birds)
    let allSightings = birdData.map(sightings => Object.keys(sightings))
    allSightings = allSightings.flat()
    let birdSpecies = {}
    allSightings.forEach(species => {
      if (!birdSpecies[species]) {
          let sightingsForSpecies = birdData.map(BirdsOnDate => {
            if (BirdsOnDate[species]) {
              return BirdsOnDate[species]
            }
            else {
              return 0
            }
          })
        birdSpecies[species] = sightingsForSpecies
      }
    })
    this.setState({birdSpecies: birdSpecies}, () => console.log(this.state))
  }

  componentDidMount() {
    this.processData()
  }

  makeGraph = (bird) => {
    console.log("you selected " + bird)
    console.log(this.state.birdSpecies[bird])
    this.setState(prevState => {
      return {...prevState, title: bird, data: prevState.birdSpecies[bird]}
    })
    // let graph = document.getElementById("graph")
    // graphElement = <Graph title={bird} data={this.state.birdSpecies[bird]}/>
    // ReactDOM.render(graphElement, graph)
  }

  render() {
    return (
      <div className="App">
        <h2>Search For a Bird</h2>
        <SearchMenu options={Object.keys(this.state.birdSpecies)} makeGraph={this.makeGraph}/>
        <div id="graph">
          <Graph title={this.state.title} data={this.state.data}/>
        </div>
      </div>
    );
  }

}

export default App;


