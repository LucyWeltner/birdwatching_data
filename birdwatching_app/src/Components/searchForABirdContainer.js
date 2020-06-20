import React from 'react';
import Graph from './graph.js'
import SearchMenu from './search_menu.js'

export default class SearchForBird extends React.Component {
  state = {
    birdSpecies: {},
    data: [],
    title: "choose_a_bird",
    info: "Sighting"
  }

  getTotals() {
    let allData = this.props.processData()
    let birdData = allData.map(date => date.birds)
    let NumOfSightings = birdData.map(date => Object.values(date))
    let totalsObj = {}
    NumOfSightings.forEach((date, index) => {
      totalsObj[allData[index].date] = date.reduce((total=0, sighting) => total + sighting)
    }) 
    return totalsObj
  }

  getDiversity() {
    let allData = this.props.processData()
    let numOfSpecies = allData.map(date => Object.values(date.birds).length)
    return numOfSpecies 
  }

  getSightings() {
    let birdData = this.props.processData().map(date => date.birds)
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
    return this.props.processData().map(day => day.date)
  }

  componentDidMount() {
    this.getSightings()
  }

   getSearchOptions() {
    let birdSpeciesArray = Object.keys(this.state.birdSpecies)
    birdSpeciesArray = birdSpeciesArray.concat(["all_birds", "all_species"])
    birdSpeciesArray.map(bird => bird.replace(/_/g, " "))
    return birdSpeciesArray
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

  render() {
    return (
      <div className="birdSearchContainer">
        <h2>Search For a Bird</h2>
        <SearchMenu options={this.getSearchOptions()} makeGraph={this.makeGraph}/>
        <div id="graph">
          <Graph title={this.state.title.replace(/_/g, " ")} data={this.state.data} dates={this.getDates()} getTotals={() => this.getTotals()} info={this.state.info}/>
        </div>
      </div>
    )
  }
}