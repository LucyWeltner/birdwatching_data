import React from 'react';
import './App.css';
import Graph from './Components/graph.js'
import SearchMenu from './Components/search_menu.js'

class App extends React.Component {
  state = {
    birdSpecies: {},
    data: [],
    title: "stuff",
    totals: {}
  }

  processData() {
    let birdData = require("./BirdData/bird_data.json")
    birdData = JSON.stringify(birdData)
    birdData = JSON.parse(birdData)
    return birdData.info
  }

  getTotals() {
    let allData = this.processData()
    let birdData = allData.map(date => date.birds)
    let NumOfSightings = birdData.map(date => Object.values(date))
    let totalsObj = {}
    NumOfSightings.forEach((date, index) => {
      totalsObj[allData[index].date] = date.reduce((total=0, sighting) => total + sighting)
    }) 
    this.setState({totals: totalsObj})
  }

  getSightings() {
    let birdData = this.processData().map(date => date.birds)
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
    this.setState({birdSpecies: birdSpecies})
  }

  getDates() {
    return this.processData().map(day => day.date)
  }

  componentDidMount() {
    this.getSightings()
    this.getTotals()
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
          <Graph title={this.state.title} data={this.state.data} dates={() => this.getDates()}/>
        </div>
      </div>
    );
  }

}

export default App;


