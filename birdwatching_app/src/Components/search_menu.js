import React from "react" 
import searchMenuCSS from './search_menu.css'

export default class SeachMenu extends React.Component {
	state = {
		selected: this.props.default
	}
	render() {
		let sortedOptions = this.props.options.sort()
			return(
				<div className="search">
					<form onSubmit={event => {event.preventDefault(); this.props.makeGraph(this.state.selected)}}>
						<select name="birds" onChange={event => this.setState({selected: event.target.value})}>
							{sortedOptions.map((species, index) => <option value={species} key={index}>{species.replace(/_/g, " ")}</option>)}
						</select>
						<input type="submit"/>
					</form>
					<br />
				</div>
			)
	}
}