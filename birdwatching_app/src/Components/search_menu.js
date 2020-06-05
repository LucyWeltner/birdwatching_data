import React from "react" 

export default class SeachMenu extends React.Component {
	makeGraph(selected) {
		console.log("you selected" + selected)
	}
	render() {
		return(
			<form onSubmit={value => this.makeGraph(value)}>
				<select name="birds">
					{this.props.options.map(option => <option value={option}>{option}</option>)}
				</select>
			</form>
		)
	}
}