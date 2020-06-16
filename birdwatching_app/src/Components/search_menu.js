import React from "react" 

export default class SeachMenu extends React.Component {
	state = {
		selectedBird: "all_birds"
	}
	render() {
		let sortedOptions = this.props.options.sort()
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