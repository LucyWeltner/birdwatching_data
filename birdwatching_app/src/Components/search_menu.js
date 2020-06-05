import React from "react" 
import Graph from './graph.js'
export default class SeachMenu extends React.Component {
	state = {
		selectedBird: ""
	}
	makeGraph(event) {
		event.preventDefault()
		console.log("you selected " + this.state.selectedBird)
	}
	render() {
		return(
			<form onSubmit={value => this.makeGraph(value)}>
				<select name="birds" onChange={event => this.setState({selectedBird: event.target.value})}>
					{this.props.options.map((option, index) => <option value={option} key={index}>{option}</option>)}
				</select>
				<input type="submit"/>
			</form>
		)
	}
}