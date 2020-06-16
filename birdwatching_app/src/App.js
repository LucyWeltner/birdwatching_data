import React from 'react';
import './App.css';
import Graph from './Components/graph.js'
import SearchMenu from './Components/search_menu.js'

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

  getTotals() {
    let allData = this.processData()
    let birdData = allData.map(date => date.birds)
    let NumOfSightings = birdData.map(date => Object.values(date))
    let totalsObj = {}
    NumOfSightings.forEach((date, index) => {
      totalsObj[allData[index].date] = date.reduce((total=0, sighting) => total + sighting)
    }) 
    return totalsObj
  }

  getDiversity() {
    let allData = this.processData()
    let numOfSpecies = allData.map(date => Object.values(date.birds).length)
    return numOfSpecies 
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
  }

  makeGraph = (bird) => {
    if (bird !== "all_birds" && bird !== "all_species") {
      this.setState(prevState => {
        return {...prevState, title: bird, data: prevState.birdSpecies[bird], info: "Sighting"}
      })
    }
    else if (bird === "all_birds") {
      this.setState(prevState => {
        return {...prevState, title: "all_birds", data: Object.values(this.getTotals()), info: "Sighting"}
      })
    }
    else {
      this.setState(prevState => {
        return {...prevState, title: "all_species", data: this.getDiversity(), info: "Specie"}
      })
    }
  }

  getSearchOptions() {
    let birdSpeciesArray = Object.keys(this.state.birdSpecies)
    birdSpeciesArray = birdSpeciesArray.concat(["all_birds", "all_species"])
    return birdSpeciesArray
  }

  render() {
    return (
      <div className="App">
        <h2>Search For a Bird</h2>
        <SearchMenu options={this.getSearchOptions()} makeGraph={this.makeGraph}/>
        <div id="graph">
          <Graph title={this.state.title.replace(/_/g, " ")} data={this.state.data} dates={this.getDates()} getTotals={() => this.getTotals()} info={this.state.info}/>
        </div>
      </div>
    );
  }

}

export default App;




