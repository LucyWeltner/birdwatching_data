import React from 'react';
import Graph from './graph.js'
import SearchMenu from './search_menu.js'

export default class SearchForDate extends React.Component {

  state = {
    title: "",
    data: [],
    labels: [],
    info: "Sighting"
  }

  makeDateGraph = (date1) => {
    let data = this.props.processData()
    let dataForDate = data.find(item => item.date === date1)
    let frequencySighted = Object.values(dataForDate.birds)
    let speciesSighted = Object.keys(dataForDate.birds)
    this.setState(prevState => {
     return {...prevState, title: date1, data: frequencySighted, labels: speciesSighted}
    })
  }

  getDates() {
    return this.props.processData().map(day => day.date)
  }

  render() {
    return (
        <div id="dateSearchContainer">
          <h2>Search For a Date</h2>
          <SearchMenu options={this.getDates()} makeGraph={this.makeDateGraph} default="2/25"/>
          <div id="dateGraph">
            <Graph title={this.state.title.replace(/_/g, " ")} data={this.state.data} dates={this.state.labels} info={this.state.info}/>
          </div>
        </div>
    )
  }      
}