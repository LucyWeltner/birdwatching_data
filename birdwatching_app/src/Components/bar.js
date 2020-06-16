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
		let numOfSightings = this.props.height/this.props.scale
		if (this.state.displaySightings) {
			if (this.props.height > 20) {
				textbox = <text transform='rotate(90)' y="-2.5" x="2.5" fontSize="5px" fill="white">{numOfSightings} {this.props.info + "s"}</text>
			}
			else {
				 textbox = <text fontSize="5px" transform='rotate(90)' y="-2.5" x="-26" fill="black">{(numOfSightings === 1) ? numOfSightings + " " + this.props.info : numOfSightings + " " + this.props.info + "s"}</text>
			}
		}
		return (
			<g className="bar" transform={`translate(${this.props.xAxis*10+15}, ${180-this.props.height})`}>
				<rect onMouseOver={this.showHeight} onMouseLeave={this.hideHeight} height={this.props.height} width="10" stroke="grey" strokeWidth="1"/>
				{textbox}
			</g> 
		)
	}
}
