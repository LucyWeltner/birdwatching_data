import React from "react"
import Bar from "./bar.js"
import _ from "lodash"

export default class Graph extends React.Component {
	render() {
		let scale 
		console.log(this.props.data)
		if (_.max(this.props.data) > 50) {
			scale = 1
		}
		else if (_.max(this.props.data) > 25) {
			scale = 2
		}
		else {	
			scale = 3
		}
		return (
				<svg viewBox = "0 0 200 200">
					<text x="10" y ="20">{this.props.title}</text>
					<line x1="10" y1="25" x2="10" y2="180" stroke="grey"/>
					<line x1="10" y1="180" x2="180" y2="180" stroke="grey"/>
					{this.props.data.map((height, index) => <Bar key={index} xAxis={index} height={height*scale} scale={scale}/>)}
					{this.props.dates.map((date, index) => <text x={index*10+15} fontSize="4" y="190" key={index}>{date+" "}</text>)}
				</svg>
			)
	}
}



