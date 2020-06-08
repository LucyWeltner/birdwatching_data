import React from "react"
import BarCSS from './bar.css'

export default class Bar extends React.Component {
	state = {
		displaySightings: false
	}

	showHeight = () => {
		this.setState({displaySightings: true})
	}

	hideHeight = () => {
		this.setState({displaySightings: false})
	}

	render() {
		let textbox = null
		if (this.state.displaySightings) {
			if (this.props.height > 20) {
				textbox = <text transform='rotate(90)' y="-2.5" x="2.5" font-size="5px" fill="white">{this.props.height/5} Sightings</text>
			}
			else {
				 textbox = <text font-size="5px" transform='rotate(90)' y="-2.5" x={-25} fill="black">{this.props.height/5} Sightings</text>
			}
		}
		return (
			<g class="bar" transform={`translate(${this.props.xAxis*10+15}, ${180-this.props.height})`}>
				<rect onMouseOver={this.showHeight} onMouseLeave={this.hideHeight} height={this.props.height} width="10" stroke="grey" stroke-width="1"/>
				{textbox}
			</g> 
		)
	}
}
