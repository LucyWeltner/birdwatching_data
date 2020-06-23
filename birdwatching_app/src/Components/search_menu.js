import React from "react" 

export default class SeachMenu extends React.Component {
	state = {
		selected: "all_birds"
	}
	render() {
		let sortedOptions = this.props.options.sort()
			return(
				<form onSubmit={event => {event.preventDefault(); this.props.makeGraph(this.state.selected)}}>
					<select name="birds" onChange={event => this.setState({selected: event.target.value})}>
						{sortedOptions.map((species, index) => <option value={species} key={index}>{species.replace(/_/g, " ")}</option>)}
					</select>
					<input type="submit"/>
				</form>
			)
	}
}