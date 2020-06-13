import React from "react" 

export default class SeachMenu extends React.Component {
	state = {
		selectedBird: "american_crow"
	}
	// makeGraph(event) {
	// 	event.preventDefault()
	// 	console.log("you selected " + this.state.selectedBird)
	// 	console.log(this.props.allData[`${this.state.selectedBird}`])

	// 	return (
	// 		<Graph data={this.props.allData[this.state.selectedBird]}/>
	// 	)
	// }
	render() {
		let sortedOptions = this.props.options.sort()
		console.log(sortedOptions)
		return(
			<form onSubmit={event => {event.preventDefault(); this.props.makeGraph(this.state.selectedBird)}}>
				<select name="birds" onChange={event => this.setState({selectedBird: event.target.value})}>
					{sortedOptions.map((species, index) => <option value={species} key={index}>{species.replace(/_/g, " ")}</option>)}
				</select>
				<input type="submit"/>
			</form>
		)
	}
}