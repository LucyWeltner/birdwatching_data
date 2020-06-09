import React from "react" 

export default class SeachMenu extends React.Component {
	state = {
		selectedBird: "song_sparrow"
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
		return(
			<form onSubmit={event => {event.preventDefault(); this.props.makeGraph(this.state.selectedBird)}}>
				<select name="birds" onChange={event => this.setState({selectedBird: event.target.value})}>
					{this.props.options.map((species, index) => <option value={species} key={index}>{species}</option>)}
				</select>
				<input type="submit"/>
			</form>
		)
	}
}