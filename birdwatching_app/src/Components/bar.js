import React from "react"
export default class Bar extends React.Component {
	state = {
		displaySightings: false
	}

	showHeight = () => {
		this.setState({displaySightings: true})
	}

	render() {
		let textbox = <text transform='rotate(90)' y="-2.5" font-size="5px" fill="white">{this.props.height/5} Sightings</text>
		return (
			<g transform={`translate(${this.props.xAxis*10+15}, ${180-this.props.height})`}>
				<rect onMouseOver={this.showHeight} height={this.props.height} width="10"/>
				{this.state.displaySightings ? textbox : null}
			</g> 
		)
	}
}
